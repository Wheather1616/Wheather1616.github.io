# William Heather | Software Developer Portfolio

A lightweight static portfolio built using HTML, CSS and vanilla JavaScript. No Squarespace, Google Sites, npm build or framework is required.

## Files

- `index.html` — homepage with responsive hero and interactive project selector
- `assets/site.css` — homepage styles, typography and colour palette
- `assets/site.js` — project selector and case-study link behaviour
- `assets/header-logo.png`, `assets/monogram.png`, `assets/favicon.png` — brand artwork
- `projects/*.html` — individual project case-study starter pages
- `.nojekyll` — tells GitHub Pages to serve static files without Jekyll processing

## Publish on GitHub Pages

1. Sign in to `https://github.com/Wheather1616`.
2. Create a **public** repository named exactly `Wheather1616.github.io` (case-insensitive URL). If that repository already exists, review it before modifying anything.
3. Put the **contents** of this folder into the repository root. `index.html` must be at the root, not nested inside the ZIP folder.
4. In the repository select **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, and click **Save**.
5. Allow up to ten minutes for deployment, then visit `https://wheather1616.github.io/`.

### Terminal method (for a new, empty repository)

```bash
cd /path/to/william-heather-github-pages
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin git@github.com:Wheather1616/Wheather1616.github.io.git
git push -u origin main
```

If you use HTTPS rather than SSH, change the remote URL to `https://github.com/Wheather1616/Wheather1616.github.io.git`. Do not run `git init` inside an existing, unrelated project folder.

### Preview on your computer

From inside the folder run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. Stop the local server with Ctrl+C. You can also open `index.html` directly, although a local server is more representative of the published site.

## Important before sharing widely

- The four images in the project selector are **illustrative CSS mock-ups**, not real application screenshots. Replace with screenshots of your projects.
- Three case studies contain starter descriptions; expand them with **your own** measured results, technical decisions, screenshots and verified repository links.
- Shining Knights is intentionally a **placeholder**, because its implementation has not been confirmed.
- The page uses public contact details previously provided by William: `williamheather16@gmail.com`, GitHub `Wheather1616` and LinkedIn `william-heather-348965392`. Update these if needed.
- Before publishing workplace software source code or screenshots, remove credentials, personal data, private booking information and anything that belongs to clients/employers.
- The existing repository called `Shining_Knights` was not automatically linked because its public README currently describes a different project.

## Edit content

- Update homepage headlines and biographies in `index.html`.
- Update descriptions and technology tags in `assets/site.js`. Keep the corresponding item titles in `index.html` synchronised.
- Edit case-study pages under `projects/`.
- Palette lives near the top of `assets/site.css` (Night Bordeaux `#52050A`, Dust Grey `#D7D0C8`, Amethyst `#A846A0`, Pacific Cyan `#258EA6`, Vibrant Coral `#F87666`).
- The `email`, GitHub and LinkedIn contact links are already populated.

## Hosting

GitHub Pages hosts static files. No backend services, server-side Python or database is deployed by this site. Project demos requiring a backend must be hosted separately.

See GitHub's official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
