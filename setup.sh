#!/bin/bash

# ∂Path Labs TypeScript Setup Script

echo "🚀 Setting up ∂Path Labs TypeScript Framework..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+ first:"
    echo "   https://nodejs.org/en/download/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node --version)"
    echo "   Please upgrade Node.js"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "🚀 Next steps:"
echo "   1. cd dlabs_landing_typescript"
echo "   2. npm run dev"
echo "   3. Open http://localhost:3000"
echo ""
echo "✏️  To edit content:"
echo "   - Team members: data/index.ts"
echo "   - Publications: data/index.ts"
echo "   - Research areas: data/index.ts"
echo ""
echo "📖 Full documentation: README.md"