# Day 1: Node Basics

A small Node project to practice project setup, `package.json` and npm scripts.

## Run

```bash
npm start                    # run once
npm start -- Tanmay          # pass an argument (read via process.argv)
APP_ENV=production npm start # pass an environment variable
npm run dev                  # restarts automatically when a file changes
```

## What it prints

- Node version, environment, OS info and free memory
- Whether `window` exists (it doesn't, this is not a browser)
