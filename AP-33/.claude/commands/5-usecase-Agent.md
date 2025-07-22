 Rules

  - Be specific and business oriented - no generic content
  - Base analysis on actual Clear Deal 2.0 business requirements and use cases
  - Use czech language for description of logs and deliverables
  - Do not make any other follow up or steps
  - Do not propose next steps
  - In case you cannot use tools to write in repo, log into local file with MD format
  - Precision: Be very careful - don't miss any use case from any domain file
  - Completeness: Each file must be comprehensive and implementation-ready
  - BIAN Compliance: Perfect alignment with BIAN framework references
  - Screen Connectivity: Clear traceability to specific Figma designs

  Roles

  - You are a functional analyst working on JIRA ticket screen analysis.

  Goal

  - Create individual use case files by merging BIAN Service Domain information with connected Figma screens. Each use case should contain comprehensive technical specifications preparation steps.

  Workflow

  1. Input data:

  - BIAN Domains: /workinprogress/SD/ directory contains 10 Service Domain files with detailed use cases
  - Figma Analysis: /workinprogress/figma/ directory contains 8 screen analysis files
  - Existing Examples: /workinprogress/use_cases/ directory contains template examples

  2. Required File Structure:

  Each use case file should follow this exact structure:

  # UC-XXX: [Use Case Title]

  ## BIAN Section
  ### Domain Information
  **BIAN Domain:** [Domain Name]
  **Domain Description:** [Domain description in Czech]

  ### BIAN Framework References
  - **Business Object Model:** [BOM URL]
  - **Control Record:** [Control Record URL]
  - **Domain Reference:** [Domain Reference URL]

  ## Use Case Details
  ### Základní informace
  - **Use Case ID:** UC-XXX
  - **Name:** [title]
  - **BRQ Process:** [Related BRQ process]
  - **Typ procesu:** [Process type]

  ### Systems
  [List of involved systems]

  ### Actors
  [List of actors/roles]

  ### Inputs
  [Input data and parameters]

  ### Outputs
  [Output data and results]

  ### Data Requirements
  [Detailed data requirements]

  ## FIGMA Screens
  ### Primary screens
  [Specific Figma screens with URLs and connections]

  ### [Additional screen categories as needed]

 ## Business Value & Metrics
  ### Key matrix
  ### Expected business venefits
  ### Acceptance criteria

  ---
  *Use Case created: actual date*
  *Project: AP-32 Clear Deal 2.0*
  *BIAN Framework: [Domain Name]*

  3. Business Requirements Mapping:

  - Map each screen to specific BRQ requirements from use case analysis
  - Identify which business processes each screen implements
  - Document data inputs/outputs required for each screen
  - Analyze user roles and permissions needed
  - Connect screens to BIAN Service Domain implementations

  4. Screen Documentation:

  - Create detailed analysis files in /workinprogress/figma/ folder
  - Structure each analysis as:
  # Screen Section XX: [Function Name]

  ## Figma Reference
  **URL:** [complete figma URL]
  **Node ID:** [extracted node ID]

  ## Screen Count
  **Počet obrazovek:** X screens

  ## Screens Overview
  ### Screen 1: [Screen Name]
  - **Účel:** [Business purpose in Czech]
  - **Implementuje BRQ:** [Specific BRQ requirements]
  - **Typ:** [Manual/Automated/Semi-automated]

  ## Data Requirements
  - **UI Data:** [Static content, labels, graphics]
  - **System Data:** [API data, calculations, validations]
  - **User Data:** [Input fields, selections, preferences]

  ## Technical Implementation
  ### Systémy involved:
  - **CD 2.0 mobilní aplikace:** [Role description]
  - **[Other systems]:** [Integration requirements]

  ## BRQ Requirements Mapping
  ### BRQ XX.XX: [Requirement name]
  - **Systém:** [Systems involved]
  - **Role:** [User role]
  - **Input:** [Required inputs]
  - **Output:** [Expected outputs]
  - **Typ:** [Process type]

  ## UX/UI Design Notes
  - [Design patterns, accessibility, user experience observations]

  ## Process Flow
  - [Step-by-step user interaction flow]

  ## Next Screen Connection
  - [Navigation paths and screen transitions]

  5. Use case coverage:

  - CRITICAL: Extract ALL use cases from ALL 10 SD domain files: /workinprogress/SD
    - each file contains multiple process requirements under this domain. This process requirements consists of multiple steps as the second level steps such as BRQ03.14 - Založení hlavičky smlouvy a generování v CRM 
    - for each step generate use case in structure above and Map each use case to relevant Figma screens from these sections:
          - Screen Section 01: App Launch (Node ID: 328:33726)
          - Screen Section 02: Login Entry (Node ID: 1885:18661)
          - Screen Section 03: Authentication Flow (Node ID: 353:8000)
          - Screen Section 04: PIN Setup (Node ID: 1766:13810)
          - Screen Section 05: PIN Authentication (Node ID: 72:5853)
          - Screen Section 06: Main Dashboard (Node ID: 59:2433)
          - Screen Section 07: Investment Strategy Planning (Node ID: 1872:20026)

  6. Log and Commit Changes:

  - Use GH tool for GITHUB operations
  - Create a sub-issue under main JIRA ticket:
    - Title: "Figma screen analýza dokončena - [X] obrazovek zdokumentováno"
    - Description:
    # Provedená analýza Figma obrazovek:

 
  7. Deliverables:

  - Individual use case files: UC-XXX_[descriptive_name].md
  - Comprehensive summary: 00_comprehensive_use_case_summary.md
