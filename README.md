# 📘 Read Bible Together（Vue 版）

[![ci](https://github.com/jennifershih/vue-read-bible-project/actions/workflows/ci.yml/badge.svg)](https://github.com/jennifershih/vue-read-bible-project/actions/workflows/ci.yml)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![Live demo](https://img.shields.io/badge/demo-GitHub%20Pages-2ea44f)](https://jennifershih.github.io/vue-read-bible-project/)

Read the Bible in Chinese (Chinese Union Version, 和合本) by book and chapter. This is the Vue 3 sibling of the Angular app [read-bible](https://github.com/jennifershih/read-bible), built to compare the two frameworks.

**[Try it →](https://jennifershih.github.io/vue-read-bible-project/)**

## Features

- Pick any of the 66 books and a chapter; verses appear with numbers.
- Loading and error states; late responses from an earlier selection are ignored.
- Light and dark mode follow your system setting.

## Built with

- Vue 3.5 (`<script setup>`, composables) + Vite
- TypeScript, Vitest + Vue Test Utils, Cypress
- ESLint (flat config) + oxlint, Prettier
- Text from [bible-api.com](https://bible-api.com) (`translation=cuv`)

## Getting started

Requires Node.js 22+.

```bash
git clone https://github.com/jennifershih/vue-read-bible-project.git
cd vue-read-bible-project
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Type-check and build into `dist/` |
| `npm run test:unit` | Unit tests (Vitest) |
| `npm run test:e2e` | End-to-end tests (Cypress) against the production build |
| `npm run lint` | oxlint + ESLint |

## Project structure

```
src
├── App.vue                     # layout
├── components/BibleReader.vue  # book & chapter pickers, passage
├── composables/useBibleChapter.ts
└── data/bible-books.ts         # 66 books: Chinese name, API name, chapters
```

## CI/CD

Lint, unit tests and the build run on every push and pull request, Cypress runs the e2e test, and `main` is published to GitHub Pages.
