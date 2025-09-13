@echo off
REM ∂Path Labs TypeScript Setup Script for Windows

echo 🚀 Setting up ∂Path Labs TypeScript Framework...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js 18+ first:
    echo    https://nodejs.org/en/download/
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo 🎉 Setup complete!
echo.
echo 🚀 Next steps:
echo    1. npm run dev
echo    2. Open http://localhost:3000
echo.
echo ✏️  To edit content:
echo    - Team members: data/index.ts
echo    - Publications: data/index.ts
echo    - Research areas: data/index.ts
echo.
echo 📖 Full documentation: README.md
echo.
pause