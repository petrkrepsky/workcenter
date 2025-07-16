const fs = require('fs');
const Papa = require('papaparse');
const puppeteer = require('puppeteer');

async function run() {
  // 1) Read CSV
  const csvString = fs.readFileSync('List_artefacts_SD.csv', 'utf8');
  const parsedCsv = Papa.parse(csvString, {
    delimiter: ';',
    header: false,
    skipEmptyLines: true
  });

  // 2) Launch Puppeteer (headless mode)
  //    If you want to see the browser, use: { headless: false }
  const browser = await puppeteer.launch({ headless: true });

  // 3) Loop over the CSV rows
  let rowIndex = 0;
  for (const row of parsedCsv.data) {
    rowIndex++;
    const domainName = row[0];
    const url = row[1];

    if (!domainName || !url) {
      console.log(`Row #${rowIndex}: SKIPPING - invalid data`);
      continue;
    }

    console.log(`\nRow #${rowIndex}: domain='${domainName}', url='${url}'`);

    // Create a new page for each domain (avoids 'detached frame' issues)
    const page = await browser.newPage();

    try {
      // 3a) Go to the URL
      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 60000
      });

      // Additional wait for any dynamic rendering
      await new Promise(resolve => setTimeout(resolve, 3000));

      // [Optional Debug] Check the final HTML length:
      const content = await page.content();
      console.log(`-> Page content length: ${content.length}`);

      // 3b) Scrape the artifacts
      const artifacts = await page.evaluate(() => {
        // 1) Find the <g bizzconcept="Canvas">
        const canvas = document.querySelector('g[bizzconcept="Canvas"]');
        if (!canvas) {
          // No canvas found, return empty
          return [];
        }

        // 2) Get direct <g> children of canvas
        const childGs = Array.from(canvas.querySelectorAll(':scope > g'));

        // 3) For each child, get bizzsemantic and label text lines
        return childGs.map((gEl) => {
          const bizzsemantic = gEl.getAttribute('bizzsemantic') || '';

          const labelG = gEl.querySelector('g[bizzconcept="label"]');
          if (!labelG) {
            return {
              artifactType: '',
              bizzsemantic,
              artifactName: ''
            };
          }

          // Gather all <text> lines
          const textEls = Array.from(labelG.querySelectorAll('text'));
          const lines = textEls.map(t => t.textContent.trim()).filter(Boolean);

          // The first line might be e.g. "«ServiceDomain»"
          // We'll parse out "ServiceDomain" from the guillemets
          const firstLine = lines[0] || '';
          const match = firstLine.match(/«(.+?)»/);
          const artifactType = match ? match[1].trim() : firstLine;

          // The second line is the actual artifact name, if present
          const artifactName = lines[1] || '';

          return {
            artifactType,
            bizzsemantic,
            artifactName
          };
        });
      });

      // Filter out items with no artifactType
      const validArtifacts = artifacts.filter(a => a.artifactType);

      // 3c) Build your final domain data structure
      const domainData = {
        domainName,
        artifacts: validArtifacts
      };

      // 3d) Write it to a JSON file
      //     We'll include rowIndex to avoid collisions if domainName duplicates appear
      const safeDomainName = domainName.replace(/[^\w\d-]/g, '_') || 'unnamed_domain';
      const fileName = `${rowIndex}-${safeDomainName}.json`;

      fs.writeFileSync(fileName, JSON.stringify(domainData, null, 2), 'utf8');
      console.log(`-> Created file: ${fileName} (artifacts found: ${validArtifacts.length})`);

    } catch (err) {
      console.error(`-> Error on row #${rowIndex} ("${domainName}"):`, err);
    } finally {
      // Close the page to free resources
      await page.close();
    }
  }

  // 4) Done
  await browser.close();
  console.log('\nAll done - check for your JSON files.');
}

run();
