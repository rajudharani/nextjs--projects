Write-Host "Starting Contact Manager servers..." -ForegroundColor Green
Write-Host ""

Write-Host "Starting JSON Server (Database) on port 3005..." -ForegroundColor Yellow
Start-Process -FilePath "cmd" -ArgumentList "/k", "npx json-server --watch src/app/_data/db.json --port 3005" -WindowStyle Normal

Write-Host "Waiting 3 seconds..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

Write-Host "Starting Next.js App on port 3001..." -ForegroundColor Yellow
Start-Process -FilePath "cmd" -ArgumentList "/k", "npm run dev -- --port 3001" -WindowStyle Normal

Write-Host ""
Write-Host "Both servers are starting..." -ForegroundColor Green
Write-Host "JSON Server: http://localhost:3005" -ForegroundColor Cyan
Write-Host "Next.js App: http://localhost:3001" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor White
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
