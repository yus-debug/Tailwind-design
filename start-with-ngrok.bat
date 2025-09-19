@echo off
echo Starting TailDesign with ngrok tunnel...
echo.

REM Start the development server in background
echo [1/2] Starting development server on port 8080...
start "Dev Server" cmd /k "npm run dev"

REM Wait a moment for the server to start
timeout /t 3 /nobreak > nul

REM Start ngrok tunnel
echo [2/2] Starting ngrok tunnel...
echo.
echo Your public URL will be displayed below:
echo Send this URL to your supervisor!
echo.
echo Press Ctrl+C to stop both services
echo.

C:\ngrok\ngrok-v3-stable-windows-amd64\ngrok.exe http 8080

pause




