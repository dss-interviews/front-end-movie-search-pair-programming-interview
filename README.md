# Movie Finder

A movie search application built with Fresh framework, Deno, using [Tailwind CSS](https://tailwindcss.com/) for styling. Search for movies by name and year using a simple local data API.

[Deno](https://docs.deno.com/runtime/) is a modern TypeScript runtime with built-in security, package management, and tooling.

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
```

**Note:** The development server runs with full permissions (`-A`) for Fresh framework functionality.

### 5. Open in Browser
Navigate to: **http://localhost:8000**

That's it! The app is now running. 🎬

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


### User Stories
See [docs/user-stories.md](docs/user-stories.md) for the specific user stories to work on during the coding exercise.
