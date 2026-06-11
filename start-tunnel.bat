@echo off
chcp 65001 >nul
cd /d "C:\Users\24371\Desktop\photo-gallery"

echo.
echo ═══════════════════════════════════════════
echo   📷 光影瞬间 - 启动中...
echo ═══════════════════════════════════════════
echo.

:: 启动本地服务器
echo [1/2] 启动本地服务器...
start "光影瞬间-服务器" /MIN cmd /c "node server.js"

:: 等服务器启动
timeout /t 2 /nobreak >nul

:: 启动 serveo 隧道
echo [2/2] 启动公网隧道...
ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=60 -R 80:localhost:3000 serveo.net

echo.
echo 隧道已关闭。按任意键退出...
pause >nul
