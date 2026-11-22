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
    python -m http.server %PORT% --directory public_html
    goto end
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Python Launcher detected. Launching local server on port %PORT%...
    start "" "%URL%"
    py -m http.server %PORT% --directory public_html
    goto end
)

where npx >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js/npx detected. Launching local static server on port %PORT%...
    start "" "%URL%"
    npx -y serve public_html -l %PORT%
    goto end
)

echo [!] Could not detect Python or Node.js.
echo Opening public_html\index.html directly in your default browser...
start "" "public_html\index.html"

:end
pause
