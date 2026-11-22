# BrynBrands Group & Sekurutau Web Ecosystem

Official website for **BrynBrands Group**, the **Sekurutau Sculpture Gallery**, and the **Sekurutau World Music Subsite**.

---

## Ecosystem Architecture

- **`index.html`** — Main BrynBrands Group corporate website (leadership, multi-sector investments, 2026 timeline).
- **`gallery/`** — Sekurutau Sculpture Gallery (fine art stone sculptures, masterworks, acquisition enquiry).
- **`music/`** — Sekurutau World Music Subsite:
  - Featured 2026 comeback album: **Sahwira Mukuru** (CD BTM. 011).
  - Custom tactile HTML5 audio player playing 6 verified preview tracks.
  - Complete 10-album discography archive from 2000 platinum debut *Kurauone* to *Sahwira Mukuru*.
  - Artist liner notes and production credits modals.
  - Streaming platform links (YouTube, Spotify, Apple Music, Deezer) and booking contact lines.
- **`jonh.jpg`** — Official high-resolution autographed BrynBrands oval emblem.
- **`DEPLOYMENT_AND_MAINTENANCE_GUIDE.md`** — Comprehensive handover and deployment guide for developers.

---

## Quick Local Preview

- **Windows:** Double-click `preview_website.bat` to launch a local server and automatically open the site in your browser.
- **Mac / Linux:** Run `python3 -m http.server 8080` and open `http://localhost:8080`.

---

## Production Deployment

### 1. cPanel / Apache / Shared Hosting
- Upload all contents of this directory to your web server's `public_html` root.
- Ensure the included `.htaccess` file is uploaded (manages MIME types, audio range requests, gzip compression, and caching).
- File permissions: `644` for files, `755` for folders.

### 2. Vercel / Netlify / Cloudflare Pages / GitHub Pages
- Pre-configured `vercel.json` and `netlify.toml` are included. Simply drag-and-drop this folder or link your Git repository.

### 3. Nginx VPS
- See `DEPLOYMENT_AND_MAINTENANCE_GUIDE.md` for the complete copy-paste `nginx.conf` server block with HTTP byte-range audio seeking.

---

## Handover & Maintenance

For details on adding new songs, updating albums, modifying gallery sculptures, or changing booking numbers, refer to **`DEPLOYMENT_AND_MAINTENANCE_GUIDE.md`**.