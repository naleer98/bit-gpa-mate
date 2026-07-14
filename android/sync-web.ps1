$Root = Split-Path -Parent $PSScriptRoot
$Www = Join-Path $PSScriptRoot "app\src\main\assets\www"
if (Test-Path $Www) { Remove-Item $Www -Recurse -Force }
New-Item -ItemType Directory -Path (Join-Path $Www "assets\icons") -Force | Out-Null
Copy-Item "$Root\index.html", "$Root\styles.css", "$Root\app.js", "$Root\manifest.json", "$Root\service-worker.js" -Destination $Www
Copy-Item "$Root\assets\uom-crest.png", "$Root\assets\bit-uom-logo.png" -Destination (Join-Path $Www "assets")
Copy-Item "$Root\assets\icons\*.png" -Destination (Join-Path $Www "assets\icons")
Write-Host "Web files synced to Android assets."
