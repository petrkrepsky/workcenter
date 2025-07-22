#!/bin/bash

# MCP Chrome Browser Setup Script

echo "Setting up MCP Chrome Browser Integration..."

# Install browser-tools-mcp globally
echo "Installing browser-tools-mcp..."
npm install -g @agentdeskai/browser-tools-mcp

# Install browser-tools-server globally 
echo "Installing browser-tools-server..."
npm install -g @agentdeskai/browser-tools-server

echo "Setup complete!"
echo ""
echo "Next steps:"
echo "1. Install the Chrome extension from: https://chromewebstore.google.com/detail/browser-tools-mcp/XXX"
echo "2. Run the local server: npx @agentdeskai/browser-tools-server@latest"
echo "3. Open Chrome dev tools and look for the BrowserToolsMCP panel"
echo "4. Copy claude_desktop_config.json to your Claude Desktop config location"
echo ""
echo "For Claude Desktop, copy the config to:"
echo "- macOS: ~/Library/Application Support/Claude/claude_desktop_config.json"
echo "- Windows: %APPDATA%/Claude/claude_desktop_config.json"
echo "- Linux: ~/.config/Claude/claude_desktop_config.json"