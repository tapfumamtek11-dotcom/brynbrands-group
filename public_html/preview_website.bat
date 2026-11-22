@echo off
setlocal
title BrynBrands & Sekurutau Local Preview Server

echo ====================================================================
echo   BrynBrands Group & Sekurutau Ecosystem - Local Preview Server
echo ====================================================================
echo.

set PORT=8080
set URL=http://localhost:%PORT%

echo Checking available environments...
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Python detected. Launching local server on port %PORT%...
    start "" "%URL%"
    python -m http.server %PORT%
    goto end
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Python Launcher detected. Launching local server on port %PORT%...
    start "" "%URL%"
    py -m http.server %PORT%
    goto end
)

where npx >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js/npx detected. Launching local static server on port %PORT%...
    start "" "%URL%"
    npx -y serve . -l %PORT%
    goto end
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js detected. Launching lightweight server...
    start "" "%URL%"
    node -e "const http=require('http'),fs=require('fs'),path=require('path');const mime={'html':'text/html','css':'text/css','js':'text/javascript','png':'image/png','jpg':'image/jpeg','jpeg':'image/jpeg','svg':'image/svg+xml','mp3':'audio/mpeg'};http.createServer((req,res)=>{let f=path.join('.',decodeURIComponent(req.url.split('?')[0]));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('Not found');}else{let ext=path.extname(f).slice(1);res.writeHead(200,{'Content-Type':mime[ext]||'application/octet-stream','Accept-Ranges':'bytes'});res.end(d);}})}).listen(%PORT%,()=>console.log('Serving on %URL%'));"
    goto end
)

echo [!] Could not detect Python or Node.js.
echo Opening index.html directly in your default browser...
start "" "index.html"

:end
pause
