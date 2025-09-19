# Ngrok Setup Guide

This project is now configured to run on port 8080 and is ready for ngrok tunneling.

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:8080`

2. **In a new terminal, start ngrok:**
   ```bash
   ngrok http 8080
   ```

3. **Access your app:**
   - Local: `http://localhost:8080`
   - Public (via ngrok): Use the HTTPS URL provided by ngrok (e.g., `https://abc123.ngrok.io`)

## Configuration Details

- **Port**: 8080 (configured in `vite.config.js`)
- **Host**: Set to `true` to allow external access (required for ngrok)
- **Strict Port**: Enabled to ensure port 8080 is used

## Alternative Commands

- `npm run dev:ngrok` - Starts the server with explicit host binding
- `npm run dev` - Standard development server (also works with ngrok)

## Troubleshooting

- If port 8080 is already in use, the server will exit with an error
- Make sure ngrok is installed: `npm install -g ngrok` or download from [ngrok.com](https://ngrok.com)
- The server must be running before starting ngrok


