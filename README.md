# Movie Finder

A movie search application built with [Deno's Fresh framework](https://fresh.deno.dev/), using [Tailwind CSS](https://tailwindcss.com/) for styling. Search for movies by name and year using a simple local data API.

[Deno](https://docs.deno.com/runtime/) is a modern TypeScript runtime with built-in security, package management, and tooling.

## Purpose

This project is designed for use in a pair programming portion of an interview. See [docs/user-stories.md](docs/user-stories.md) for the specific user stories to work on during the coding exercise.


## Deno

If you're coming from React and Node.js, here's what's different:

**Deno vs Node.js:**
- Deno is the runtime (like Node.js) but with built-in TypeScript, security, and web standards
- No `package.json` or `node_modules` - uses URL imports and import maps
- Secure by default - requires explicit permissions

**Fresh vs Next.js/React:**
- Fresh is the web framework (like Next.js) but runs on Deno
- Uses Preact (React-compatible) with islands architecture
- `routes/` folder for file-based routing (server-side)
- `islands/` folder for client-side interactive components (can use hooks)
- No build step required - TypeScript works out of the box

**Key Concepts:**
- **Routes** (`routes/*.tsx`) - Server-side components, handle requests and render initial HTML
- **Islands** (`islands/*.tsx`) - Client-side components, can use `useState`, `useEffect`, event handlers
- **API Routes** (`routes/api/*.ts`) - Backend endpoints (like Next.js API routes)

## Quick Start

### 1. Install Deno
```bash
# macOS/Linux
curl -fsSL https://deno.land/x/install/install.sh | sh

# Windows (PowerShell)
irm https://deno.land/x/install/install.ps1 | iex
```

### 2. Clone and Run
```bash
# Clone the repository
git clone <repository-url>

# Start the app
deno task start

# Run tests
deno task test

# Run linting
deno lint
```

### 3. Open in Browser
Navigate to: **http://localhost:8000**

That's it! The app is now running. 🎬

--- 
Further [Installation intructions](https://docs.deno.com/runtime/getting_started/installation/) are available on the Deno documentation site.

**VS Code Extension:** Optionally, you can install the [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) for autocomplete, formatting, and linting support.

**Note:** The development server runs with full permissions (`-A`) for Fresh framework functionality.

## Features

- 🔍 Search movies by name and description
- ⭐ Sort by popularity, rating, title, or release date

## Troubleshooting

**If you get "deno: command not found":**
- Make sure Deno is installed and in your PATH
- Try restarting your terminal after installation

## Project Structure

- `routes/index.tsx` - Main route handler and UI component
- `routes/api/movies.ts` - API endpoint for movie search
- `data/movies.json` - Local movie data source
- `deno.json` - Deno configuration and tasks
- `static/` - Static assets and styles
- `docs/` - Documentation including user stories
- `fresh.gen.ts` - Auto-generated Fresh manifest


## User Stories
See [docs/user-stories.md](docs/user-stories.md) for the specific user stories to work on during the coding exercise.
