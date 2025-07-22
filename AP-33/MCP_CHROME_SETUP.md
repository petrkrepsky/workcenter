# MCP Chrome Browser Setup

This directory contains configuration files for integrating Chrome browser with MCP (Model Context Protocol).

## Files

- `claude_desktop_config.json` - Configuration for Claude Desktop MCP integration
- `setup-mcp-chrome.sh` - Installation script for MCP Chrome browser tools
- `MCP_CHROME_SETUP.md` - This documentation file

## Setup Instructions

### 1. Install MCP Chrome Browser Tools

Run the setup script:
```bash
./setup-mcp-chrome.sh
```

### 2. Install Chrome Extension

Install the Browser Tools MCP extension from the Chrome Web Store:
- Search for "Browser Tools MCP" in Chrome Web Store
- Install and pin the extension for easy access

### 3. Configure Claude Desktop

Copy the configuration to your Claude Desktop config location:

**macOS:**
```bash
cp claude_desktop_config.json ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Windows:**
```bash
copy claude_desktop_config.json %APPDATA%\Claude\claude_desktop_config.json
```

**Linux:**
```bash
cp claude_desktop_config.json ~/.config/Claude/claude_desktop_config.json
```

### 4. Start the MCP Server

Run the browser tools server:
```bash
npx @agentdeskai/browser-tools-server@latest
```

### 5. Connect Chrome

1. Open Chrome Developer Tools (F12)
2. Look for the "BrowserToolsMCP" panel
3. Click "Connect" to connect the current tab to the MCP server

## Usage

Once configured, you can:
- Monitor browser logs directly from Claude Desktop
- Automate browser tasks through Claude
- Analyze webpage content and interactions
- Perform complex browser automation

## Alternative MCP Chrome Options

If you prefer different MCP Chrome implementations:

### Chrome MCP Server (hangwin/mcp-chrome)
```bash
pnpm install -g mcp-chrome-bridge
mcp-chrome-bridge register
```

### Chrome Control MCP (lxe/chrome-mcp)
```bash
# Launch Chrome with remote debugging
chrome --remote-debugging-port=9222
```

## Troubleshooting

- Ensure the MCP server is running on port 3025
- Verify Chrome extension permissions for active tabs
- Check that the browser tools server is accessible at http://localhost:3025
- Restart Claude Desktop after configuration changes