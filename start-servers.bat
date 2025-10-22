@echo off
echo Starting Contact Manager servers...
echo.

echo Starting JSON Server (Database) on port 3005...
start "JSON Server" cmd /k "npx json-server --watch src/app/_data/db.json --port 3005"

echo Waiting 3 seconds...
timeout /t 3 /nobreak > nul

echo Starting Next.js App on port 3001...
start "Next.js App" cmd /k "npm run dev -- --port 3001"

echo.
echo Both servers are starting...
echo JSON Server: http://localhost:3005
echo Next.js App: http://localhost:3001
echo.
echo Press any key to exit...
pause > nul
