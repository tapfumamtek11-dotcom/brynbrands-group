# BRYNBRANDS & SEKURUTAU ECOSYSTEM
## Master Developer Handover, Deployment & Maintenance Guide

**Project:** BrynBrands Group Portal, Sekurutau Gallery & Sekurutau World Music Subsite  
**Founder & Artist:** Dr. Hon. Bryn Taurai Mteki (Sekurutau)  
**Package Version:** 1.0 (Production Ready — Complete Handover)  
**Target Environment:** Any static host, cPanel, Nginx VPS, Apache, Netlify, Vercel, Cloudflare Pages, AWS S3  

---

## 1. PROJECT OVERVIEW

This package is a self-contained, high-performance static web ecosystem designed for zero-dependency hosting. It contains three seamlessly interconnected experiences:

1. **Main Corporate Portal (`public_html/index.html`)**  
   The official website for BrynBrands Group (multi-sector investments, leadership timeline updated to 2026, corporate governance, and pan-African operations).
2. **Sekurutau Sculpture Gallery (`public_html/gallery/`)**  
   The fine-art gallery showcasing Dr. Hon. Bryn Taurai Mteki's stone sculptures (serpentine, springstone, opal), exhibition archives, and acquisition enquiry workflow.
3. **Sekurutau World Music Subsite (`public_html/music/`)**  
   A dedicated music subsite built with **Premium BryBrands Minimalism**. It features:
   - The featured October 2026 comeback album **Sahwira Mukuru** (CD BTM. 011).
   - An interactive, accessible HTML5 audio player supporting play/pause, scrubbable progress bar, time formatting, vinyl disc spin synchronization, loop/repeat, and volume controls.
   - 6 authorized audio preview tracks (`1.SAHWIRA MUKURU.mp3` through `6.ROVAMBIRA.mp3`).
   - Modals for **Artist Liner Notes** (heartfelt track explanations) and **Musician & Production Credits**.
   - Streaming platform links (YouTube Music, Spotify, Apple Music, Deezer) and verified booking telephone lines (`+263 78 680 7038` / `+263 77 310 0474`).
   - A complete 10-album discography archive from his 2000 platinum debut *Kurauone* (BTM 01) to *Sahwira Mukuru* (BTM 011).
   - "Dual Genius: Stone & Melody" artist biography featuring authentic concert and signing photography.

---

## 2. DIRECTORY STRUCTURE

```text
done/
├── DEPLOYMENT_AND_MAINTENANCE_GUIDE.md  <-- This handover document
├── README.md                            <-- Quickstart guide
├── package.json                         <-- Optional npm scripts (npm start / npm run preview)
├── preview_website.bat                  <-- 1-click Windows local test launcher
└── public_html/                         <-- ROOT WEB FOLDER (Upload this to your web server)
    ├── .htaccess                        <-- Production Apache/cPanel rules (MIME, Gzip, Cache, Audio Range)
    ├── vercel.json                      <-- Vercel deployment configuration
    ├── netlify.toml                     <-- Netlify deployment configuration
    ├── preview_website.bat              <-- Local preview launcher inside web folder
    ├── index.html                       <-- BrynBrands Group Main Homepage
    ├── jonh.jpg                         <-- Official autographed BrynBrands oval logo
    ├── logo.png, logo (2).png           <-- Legacy logo assets
    ├── music.png, sings.png             <-- Authentic concert and signing photography
    ├── fifa.png, mugabe.png             <-- Historic mementos (Sepp Blatter & Infantino)
    ├── sculpture.png, sculpture2.png    <-- Masterwork stone sculptures
    ├── cv_text.txt                      <-- Verified artist CV & biography source of truth
    │
    ├── gallery/                         <-- Sekurutau Sculpture Gallery Subsite
    │   ├── index.html                   <-- Gallery Homepage
    │   ├── slideshow.html               <-- Fullscreen presentation slideshow
    │   ├── jonh.jpg                     <-- Local copy of official logo
    │   ├── css/style.css                <-- Gallery luxury dark theme stylesheet
    │   ├── js/script.js                 <-- Custom cursor, artwork data & inquiry modal
    │   └── images/                      <-- Sculpture images
    │
    └── music/                           <-- Sekurutau World Music Subsite
        ├── index.html                   <-- Music Subsite Homepage
        ├── jonh.jpg                     <-- Local copy of official logo
        ├── 1.SAHWIRA MUKURU.mp3         <-- Track 01: Sahwira Mukuru (07:24)
        ├── 2. AMAI HWEE.mp3             <-- Track 02: Amai Hwee (04:00)
        ├── 3 .RUGARE RWAUYA.mp3         <-- Track 03: Rugare Rwauya (03:26)
        ├── 4. MUSIKAVANHU.mp3           <-- Track 04: Musikavanhu (03:44)
        ├── 5. SVAA MAKUDO .mp3          <-- Track 05: Svaa Makudo (04:02)
        ├── 6.ROVAMBIRA.mp3              <-- Track 06: Rovambira (04:05)
        ├── IMG-20261011-WA0000.jpg      <-- CD Disc Artwork with tracklist & credits
        ├── IMG-20261011-WA0001.jpg      <-- CD Inlay with Sekurutau's liner notes
        ├── IMG-20261011-WA0005.jpg      <-- Official Promo Poster (Streaming & Bookings)
        ├── css/
        │   └── music.css                <-- Dark Luxury design system (responsive)
        └── js/
            ├── music-data.js            <-- Centralized releases & tracks configuration
            └── music.js                 <-- Audio engine, vinyl spin sync, modal popups
```

---

## 3. DEPLOYMENT INSTRUCTIONS

The application requires **no build step, no compiler, and no server-side database**. It can be deployed to any hosting environment immediately.

### Option A: cPanel / Apache / Traditional Shared Hosting (Recommended)
1. Open your cPanel File Manager or connect via SFTP/FTP.
2. Navigate to your server's root web directory (usually named `public_html/` or `www/` or `htdocs/`).
3. Upload all files and folders located inside the local `done/public_html/` directory.
4. Ensure the `.htaccess` file is uploaded (enable "Show Hidden Files" in cPanel File Manager).
5. Verify permissions:
   - **Folders:** `755` (`drwxr-xr-x`)
   - **Files:** `644` (`-rw-r--r--`)
6. Ensure SSL is activated (e.g. Free Let's Encrypt SSL via cPanel AutoSSL).
7. The website will be live at:
   - Main Site: `https://yourdomain.com/`
   - Gallery: `https://yourdomain.com/gallery/`
   - Music Subsite: `https://yourdomain.com/music/`

### Option B: Nginx / Ubuntu VPS
If hosting on a Linux VPS with Nginx, use this optimized server block:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Certificates
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    root /var/www/brynbrands/public_html;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;

    # Audio byte-range requests (Crucial for iOS Safari & Chrome seek bar)
    location ~* \.(mp3|m4a|ogg|wav)$ {
        add_header Accept-Ranges bytes;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Static Assets Caching
    location ~* \.(jpg|jpeg|png|gif|ico|webp|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.(css|js)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }

    # Routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Option C: Netlify / Vercel / Cloudflare Pages / GitHub Pages
- **Vercel:** Drag and drop `public_html` into Vercel dashboard, or link your GitHub repo with Root Directory set to `public_html`. Pre-configured `vercel.json` will be applied automatically.
- **Netlify:** Drag and drop `public_html` into Netlify drop zone. `netlify.toml` will handle headers and cache policies.
- **GitHub Pages:** Push repo, go to **Settings > Pages**, choose Branch `main` and Folder `/public_html` (or `/root` if using GitHub Actions).

---

## 4. HOW TO TEST LOCALLY

Before deploying, you can preview and test the complete ecosystem on any computer:

### On Windows:
- Simply double-click `preview_website.bat` in either the `done/` folder or `done/public_html/` folder.
- It will automatically launch a local web server (detecting Python or Node.js) and open `http://localhost:8080` in your default browser.

### Via Command Line:
- **Using Python 3:**
  ```bash
  cd public_html
  python -m http.server 8080
  ```
- **Using Node.js:**
  ```bash
  npx serve public_html -l 8080
  ```
- Visit `http://localhost:8080` to test all links, music audio playback, scrubbing, modals, and responsive layout.

---

## 5. DEVELOPER MAINTENANCE GUIDE

All data structures are cleanly separated from HTML markup to make updates fast and simple.

### A. How to Update or Add Music Releases
Open **`public_html/music/js/music-data.js`**:

1. **To update the Featured Album tracks:**
   Locate `featuredRelease.tracks`. Each track has the following structure:
   ```javascript
   {
       number: "07",
       title: "New Song Title",
       duration: "04:30",
       durationSec: 270,
       audioSrc: "7.NEW_SONG.mp3",
       meaning: "Short description of the song's meaning..."
   }
   ```
   Drop the MP3 file into `public_html/music/`, add this entry to the array, and the player will automatically render it!

2. **To update Booking phone numbers or Streaming links:**
   In `music-data.js`, modify:
   - `artist.bookingPhone1` and `artist.bookingPhone2`
   - `featuredRelease.streamingPlatforms` URLs (YouTube, Spotify, Apple Music, Deezer)

3. **To add a new album to the Discography archive:**
   Locate the `discography` array in `music-data.js` and add:
   ```javascript
   {
       catalog: "BTM 012",
       title: "Upcoming Album",
       year: "2027",
       type: "Album (CD)",
       badge: "Upcoming Release",
       description: "Album description...",
       highlight: "New Release",
       image: "IMG-20261011-WA0001.jpg"
   }
   ```

### B. How to Update the Gallery Sculptures
Open **`public_html/gallery/js/script.js`**:
Locate the `artworks` array around line 50. Add, edit, or mark sculptures as `"available"` or `"sold"`:
```javascript
{
    id: 5,
    title: "Title of Sculpture",
    year: 2026,
    material: "Springstone",
    dimensions: "80 × 40 × 30 cm",
    weight: "75 kg",
    status: "available", // or "sold"
    provenance: "Direct from artist studio",
    description: "Sculpture philosophy...",
    image: "sculpture_name.png"
}
```

### C. How to Update the Corporate Portal Timeline
Open **`public_html/index.html`**:
Locate the `journey-timeline` section around line 3110. Milestones are simple HTML items:
```html
<div class="timeline-item">
    <div class="timeline-marker">
        <span class="year">2026</span>
    </div>
    <div class="timeline-content">
        <h4>Milestone Title</h4>
        <p>Milestone description...</p>
    </div>
</div>
```

---

## 6. CRITICAL MEDIA & ASSET COMPLIANCE NOTES

- **Audio Files**: 6 MP3 files are located in `public_html/music/`. In compliance with project guidelines, these are for public web preview on the official artist site.
- **Audio Seeking Compatibility**: Mobile Safari (iOS) and Google Chrome require web servers to support HTTP 206 Partial Content range requests (`Accept-Ranges: bytes`). This is already pre-configured in `.htaccess`, `nginx.conf`, and `vercel.json`.
- **Logos**: The primary official logo is `jonh.jpg` (autographed BrynBrands oval emblem). It is stored in `public_html/`, `public_html/gallery/`, and `public_html/music/`.

---

## 7. HANDOVER CHECKLIST FOR RECIPIENT DEVELOPER

- [x] Full folder copied to flash drive.
- [x] Production `.htaccess`, `vercel.json`, and `netlify.toml` included.
- [x] All 6 audio files verified and playable in player.
- [x] All images, sculptures, and logos present and loading.
- [x] Local test via `preview_website.bat` confirmed working.
- [x] Navigation interlinks between Home, Gallery, and Music verified.
- [x] Zero external build dependencies required.
