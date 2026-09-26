# Ravi's 3D Portfolio 🚀

Dark + neon futuristic 3D portfolio — **React + Vite + Three.js (react-three-fiber) + Framer Motion**.

## Run it in VS Code

### 1. Prerequisites
- **Node.js LTS** (v18 or newer) — check with `node -v`
  - If not installed: download from https://nodejs.org (just click "Next" through the installer)

### 2. Open the project
- In VS Code: **File → Open Folder…** → select this `portfolio` folder

### 3. Install dependencies (one time only)
- Open the terminal: **Terminal → New Terminal** (or press <kbd>Ctrl</kbd> + <kbd>`</kbd>)
- Run:
  ```bash
  npm install
  ```
  (takes 30–60 seconds; a `node_modules` folder appears)

### 4. Start the dev server
```bash
npm run dev
```
- The terminal prints something like `➜ Local: http://localhost:5173/`
- Click that link (or open http://localhost:5173 in your browser)
- **Hot reload**: edit any file in `src/`, save, and the browser updates instantly

### 5. Stop the server
- In the terminal, press <kbd>Ctrl</kbd> + <kbd>C</kbd>

## Build for production (deploy)
```bash
npm run build
```
Output goes to `dist/`. Deploy that folder to **Netlify Drop** (drag & drop at app.netlify.com/drop)
or **GitHub Pages** / **Vercel** / **Render**.

## Where to edit your content
Everything — name, links, projects, skills, experience — lives in ONE file:

```
src/data/resume.js   ← search for "TODO" and fill in your real URLs
```

- `public/resume.docx` — the downloadable resume shown on the site (replace this file with your final resume; keep the filename)
- `src/styles.css` — all colors/styles (the `:root` variables at the top control the neon theme)
- `src/components/` — one file per section (Hero, About, Skills, Projects, Timeline, Contact)

## Folder structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── fonts.css            (local Orbitron + Space Grotesk fonts)
│   ├── fonts/               (woff2 font files)
│   └── resume.docx          (downloadable resume)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   └── resume.js        ← EDIT THIS (links, projects, skills…)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Scene3D.jsx      (the 3D hologram + starfield)
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx     (3D tilt cards)
        ├── Timeline.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Troubleshooting
| Problem | Fix |
|---|---|
| `node: command not found` | Install Node.js from nodejs.org, then restart VS Code |
| Port 5173 already in use | Run `npm run dev -- --port 5174` and open that port |
| Blank page / 3D not showing | Make sure your browser is up to date (Chrome/Edge/Firefox) |
| `npm install` fails | Delete `node_modules`, run `npm cache clean --force`, then `npm install` again |
