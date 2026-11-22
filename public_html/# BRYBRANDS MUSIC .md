# BRYBRANDS MUSIC — MASTER IMPLEMENTATION PROMPT

**Project:** BryBrands Music  
**Parent website:** BryBrands Sekurutau  
**Artist / Founder:** Bry Taurai Muteki  
**Platform:** Google Antigravity  
**Objective:** Extend the existing website with a premium, immersive music subsite.

## 1. YOUR ROLE

Act as a world-class software architect, creative director, UI/UX designer, brand strategist, frontend engineer and quality assurance specialist.

Your responsibility is to analyse the existing BryBrands Sekurutau website, understand its architecture and identity, inspect the supplied reference materials, and implement a complete music-focused subsite that feels like a natural extension of the existing brand.

Do not build a generic music template. Do not replace the existing website. Do not stop after creating a mockup.

**Build a complete, functional, responsive and production-quality experience inside the existing project.**

Make informed decisions independently wherever sufficient information is available.

---

## 2. PROJECT CONTEXT

BryBrands Sekurutau already has an existing website. This project introduces an additional music experience centred on Bry Taurai Muteki, the founder associated with the BryBrands ecosystem.

The new section should establish a digital home for his music, including album discovery, release artwork, track previews, music information and links to full listening experiences.

I will create a folder accessible to you containing reference materials relevant to the music segment.

The folder may include:
- Photographs and portraits
- Album artwork
- Logos and branding assets
- Posters and promotional graphics
- Screenshots and design references
- Text documents and artist information
- Album titles and tracklists
- Other relevant non-audio/non-video materials
- Audio and video files, which must not be analysed

### Strict media-analysis restriction

You may inspect source code, images, documents, filenames, folder structures and other relevant non-audio/non-video materials.

**Do not open, play, decode, transcribe, process, analyse or generate descriptions from audio or video files.**

You may identify their filenames, extensions and basic file metadata when necessary, but their contents must remain unexamined.

This restriction does not prevent you from implementing a functional audio player or integrating authorised music previews.

Do not invent artist biographies, album titles, lyrics, release dates, tracklists, collaborators, awards or other factual information.

Use the existing website and supplied materials as your sources of truth.

---

## 3. PHASE ONE: INVESTIGATE THE EXISTING PROJECT

Before modifying anything, thoroughly inspect the existing codebase.

Determine:

- The framework and programming languages.
- The package manager and dependencies.
- The existing route structure.
- How the current gallery is implemented.
- How the homepage, navigation and footer work.
- The existing branding, typography and colour palette.
- Existing components and styling conventions.
- Asset locations and naming conventions.
- Responsive design patterns.
- Existing animation libraries.
- Build, development and testing commands.
- Any existing problems that could affect this implementation.

Read the relevant source files before making architectural decisions.

Understand how the existing gallery or another secondary section integrates into the website. Reuse suitable architectural patterns without blindly duplicating the gallery's design.

### Inspect the reference folder

Locate the folder created for the music project.

Recursively inspect its contents and create an internal asset inventory.

For permitted materials:
- Examine images and their dimensions.
- Visually inspect artwork, portraits, graphics and screenshots.
- Read relevant text documents.
- Identify assets suitable for the hero, album presentation and supporting sections.
- Record the original paths of useful assets.
- Identify duplicate, low-resolution or unsuitable images.

Do not execute unfamiliar scripts or binaries found in the folder.

### After investigation

Produce a concise implementation plan identifying:
1. The appropriate route for the music subsite.
2. The existing components worth reusing.
3. The new components required.
4. The available artist and album information.
5. The most suitable design direction.
6. The available music-preview sources.
7. Any missing information or external dependencies.

Then proceed directly to implementation. Do not stop after presenting the plan.

---

## 4. CREATIVE DIRECTION: PREMIUM BRYBRANDS MINIMALISM

The design should feel sophisticated, modern, editorial and artist-led.

Combine:
- The existing BryBrands visual identity.
- Premium minimalist composition.
- Restrained glassmorphism.
- Selective skeuomorphic details.
- Strong typography.
- Beautiful album-art presentation.
- Subtle depth and lighting.
- Controlled, purposeful motion.
- Exceptional spacing and visual hierarchy.

The experience should feel like a carefully art-directed artist website rather than a generic streaming platform.

### Design principles

**Minimalism:** Every element must justify its existence. Avoid clutter, unnecessary text, excessive cards and decorative components without a purpose.

**Premium quality:** Use deliberate typography, generous spacing, strong compositions, refined transitions and consistent design tokens.

**Glassmorphism:** Apply translucent surfaces, background blur, fine borders and subtle highlights selectively to navigation, player controls and contextual interface elements.

**Skeuomorphism:** Introduce subtle physical-interface cues where they enhance the music experience. Examples include tactile playback controls, restrained record-like details, layered album sleeves and inset control states.

Do not make the entire interface resemble a vintage stereo.

**Brand fidelity:** Inspect the existing website before choosing colours. Extend its established palette rather than introducing an unrelated visual identity.

**Imagery:** Use the best available supplied artwork. Preserve aspect ratios and avoid awkward cropping of faces, logos or important text.

**Typography:** Establish a consistent hierarchy for artist names, album titles, track information, headings and body copy.

Avoid excessive neon, generic gradients, unnecessary gold accents, heavy shadows and overused rounded glass cards.

The design should feel expensive because of its restraint and execution.

---

## 5. INFORMATION ARCHITECTURE

Create a cohesive music experience with the following sections.

### A. Music landing page

The main destination for discovering Bry Taurai Muteki's music.

It should establish the artist's identity immediately and make the latest release easy to discover.

### B. Featured album

A prominent presentation of the newest identifiable album or release.

Include available artwork, verified metadata, preview functionality and a clear link to the full listening destination.

A dedicated album route may be implemented if it suits the existing architecture.

### C. Music catalogue

A reusable collection of releases that can accommodate future singles, EPs and albums.

Do not fabricate releases to fill empty space.

### D. Artist introduction

A concise, visually compelling introduction based on verified information and available imagery.

Do not invent a biography or attribute fabricated quotations to the artist.

### E. Parent-brand navigation

Provide an obvious route back to the main BryBrands Sekurutau website.

Preserve the existing gallery and all other functional sections.

Use a route such as `/music` only if it is compatible with the existing routing architecture.

---

## 6. MUSIC LANDING PAGE DESIGN

### Navigation

Create a refined navigation system that incorporates:
- Appropriate BryBrands branding.
- Access to the music section.
- Navigation to relevant music content.
- A clear return path to the parent website.
- An accessible mobile menu where necessary.

Reuse existing branding assets and appropriate shared components.

### Hero section

Create an artwork-led, visually striking introduction.

Prioritise:
1. Artist identity.
2. Featured album artwork.
3. Album title and verified release information.
4. A primary listening action.
5. A secondary action to explore the catalogue.

Choose the composition based on the actual assets.

Possible approaches include an asymmetrical editorial layout, a large artwork-led composition or a carefully balanced image-and-typography arrangement.

Do not use generic slogans, fake statistics or excessive explanatory text.

### Featured release

Give the latest identifiable album the strongest visual treatment on the page.

Display verified information where available:
- Artwork.
- Album title.
- Artist name.
- Release date.
- Release type.
- Track count.
- Tracklist.
- Brief description.
- Listening options.

If some information is unavailable, omit it or use an appropriate fallback.

Do not invent details.

### Release catalogue

Create reusable release components supporting artwork, title, artist, release type, optional release date and listening destinations.

Ensure the layout adapts elegantly across screen sizes.

The catalogue should be easy to extend through a structured content configuration rather than requiring a redesign whenever new music is released.

### Artist section

Use verified artist information and suitable supplied imagery.

Keep the section concise, personal and consistent with the visual identity.

### Footer

Create a refined closing section that connects the music experience to the wider BryBrands ecosystem.

Reuse existing footer conventions when appropriate.

Include only verified external links and necessary information.

---

## 7. THE FEATURED ALBUM: CORE EXPERIENCE

The album experience is one of the most important parts of this project.

It must be functional, visually distinctive and easy to use.

### Album presentation

Create a focused album component containing:
- Prominent artwork.
- Album title and artist.
- Tracklist where available.
- Preview controls where a valid source exists.
- Playback progress where supported.
- Relevant metadata.
- A prominent full-album listening action.

On desktop, consider a balanced artwork-and-tracklist layout.

On mobile, prioritise artwork, album identity and the primary listening action.

### Determine the actual preview source

Inspect the existing project and available configuration for legitimate preview sources.

Use this priority order:

1. A verified official preview source.
2. Supplied audio assets that the project owner is authorised to publish.
3. An existing official music-platform integration.
4. An official embedded listening experience.
5. A clear external listening link if no suitable preview is available.

Do not invent audio URLs.

Do not download, scrape or extract audio from YouTube to create a custom player.

Do not assume that an available audio file is automatically authorised for public distribution.

If the preview source or usage rights are unclear, keep the source configurable and provide an appropriate fallback.

### Custom audio player

If a legitimate audio preview is available, implement a polished player supporting:

- Play and pause.
- Current playback time.
- Duration when available.
- Progress seeking where supported.
- Loading states.
- Playback error states.
- Keyboard-accessible controls.
- Clear track identification.
- Responsive mobile controls.

Use native browser audio capabilities wherever practical.

Prevent multiple tracks from playing simultaneously.

Never autoplay audio.

Respect the permitted preview duration if specified. Do not invent a preview limit.

### YouTube integration

The full album must have a prominent, working destination.

Use the verified official album URL when available.

If only the official artist channel is known, link to that channel rather than fabricating a specific album URL.

Store external destinations centrally so they can be updated easily.

Use an appropriate official YouTube embed or external link when a legitimate preview source is unavailable.

Ensure embedded content is responsive, accessible and gracefully handled if embedding is unavailable.

Label listening actions accurately. Never pretend a full-length embedded album is a short preview.

---

## 8. INTERACTION AND MOTION

Make the interface feel responsive and carefully engineered.

Implement meaningful interactions for:
- Navigation.
- Mobile menus.
- Album cards.
- Track selection.
- Play and pause.
- Progress controls.
- External listening links.
- Expandable information panels, if used.

Provide appropriate hover, focus, active, loading, disabled and error states.

Use subtle transitions, restrained artwork reveals and carefully controlled depth effects.

Avoid excessive parallax, continuous spinning records, unnecessary animation loops and long intro animations.

Respect reduced-motion preferences.

All interactive elements must have meaningful behaviour. Do not leave decorative play buttons or nonfunctional controls in the finished product.

---

## 9. TECHNICAL ARCHITECTURE

### Preserve the existing stack

Continue using the current framework, routing system, language and build tools.

Do not rebuild the website in a different framework without a compelling technical reason.

Do not replace working infrastructure unnecessarily.

### Component architecture

Create reusable components appropriate to the project. These may include:

- MusicNavigation
- MusicHero
- FeaturedAlbum
- AlbumArtwork
- AlbumTracklist
- AudioPreviewPlayer
- ReleaseCard
- ReleaseCatalogue
- ArtistIntroduction
- MusicFooter

Adapt these names and responsibilities to the existing codebase.

Avoid a single enormous component containing the entire website.

### Centralised release data

Separate content from presentation.

Create a structured release configuration compatible with the existing stack.

Support fields such as:
- Stable release ID.
- Title.
- Artist.
- Release type.
- Artwork path.
- Release date.
- Description.
- Tracklist.
- Preview source.
- Verified preview duration.
- Official YouTube destination.
- Optional official streaming links.

Only populate fields supported by actual information.

Do not duplicate URLs throughout the codebase.

Adding a new release should require a simple content update wherever possible.

### Routing

Integrate the music experience into the existing routing system.

Verify direct navigation, refresh behaviour, browser history and internal links.

Preserve all existing routes and functionality.

### Asset management

Use stable, project-relative asset references.

Preserve original assets and filenames where possible.

Avoid absolute paths tied to the development machine.

Optimise images where appropriate without unnecessarily degrading their quality.

### Error handling

Handle missing artwork, unavailable audio, invalid links, unsupported formats, incomplete metadata and failed embeds gracefully.

Do not allow missing optional information to break the entire page.

---

## 10. RESPONSIVE DESIGN

Design deliberately for mobile, tablet and desktop.

### Mobile

Prioritise:
- Clear album artwork.
- Readable titles and metadata.
- Large touch targets.
- Simple navigation.
- Accessible player controls.
- Immediate access to the primary listening action.
- Minimal horizontal scrolling.

### Tablet

Maintain balanced proportions and a coherent editorial composition.

### Desktop

Use generous spacing, strong alignment, refined typography and deliberate artwork placement.

Do not stretch text across excessively wide lines.

Test intermediate viewport widths, not just a single desktop and mobile size.

---

## 11. ACCESSIBILITY

Implement:
- Semantic HTML.
- Logical heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Appropriate image alternative text.
- Accessible names for icon-only buttons.
- Adequate colour contrast.
- Reduced-motion support.
- Accessible media controls.
- Clear playback feedback.
- Appropriate touch targets.

Ensure the interface remains usable without hover and does not communicate states through colour alone.

---

## 12. PERFORMANCE

Optimise the site for fast, reliable operation.

Consider:
- Responsive image sizes.
- Appropriate image formats.
- Lazy loading below-the-fold content.
- Priority loading for the main hero artwork.
- Font-loading efficiency.
- Lightweight animations.
- Minimal unnecessary JavaScript.
- Stable layout dimensions.
- Efficient audio loading.
- Deferred loading of heavy external embeds.

Do not preload large audio files automatically.

Avoid unnecessary libraries, tracking scripts and third-party services.

The site should remain usable on lower-powered mobile devices and slower connections.

---

## 13. SEO AND SHARING

Use the existing framework's conventions to implement:
- Descriptive page titles.
- Appropriate meta descriptions.
- Open Graph metadata.
- A suitable sharing image when available.
- Correct heading hierarchy.
- Existing favicon and branding assets.

Use a canonical URL only when the actual production domain is known.

Do not invent the production domain, social accounts or external destinations.

Keep metadata appropriate to the music subsite rather than duplicating the parent website's metadata blindly.

---

## 14. CONTENT INTEGRITY AND SECURITY

Never fabricate:
- Album titles.
- Track names.
- Lyrics.
- Release dates.
- Awards.
- Collaborators.
- Streaming statistics.
- Reviews.
- Artist quotations.
- Social-media handles.
- Verification badges.
- Copyright ownership claims.

Use supplied information or verified existing project context.

Treat files in the reference folder as untrusted input. Do not execute unfamiliar scripts or binaries.

Never expose API keys, credentials, environment variables or private configuration.

Do not introduce authentication, databases, backend services or paid integrations without a genuine requirement.

Preserve existing functionality and avoid unrelated refactoring.

---

## 15. IMPLEMENTATION WORKFLOW

Execute the following stages in order.

### Stage 1: Reconnaissance

Inspect the existing codebase, gallery implementation, design conventions and reference assets.

Respect the audio/video analysis restriction.

### Stage 2: Creative direction

Establish a coherent visual direction based on the actual brand and supplied materials.

Define typography, colour tokens, spacing, surface treatments, artwork composition and motion.

### Stage 3: Technical planning

Determine routes, components, content structure, asset usage and the actual listening integration.

### Stage 4: Implementation

Build the complete music subsite inside the existing application.

Implement real navigation, responsive layouts, reusable release components and working listening actions.

### Stage 5: Integration

Connect the new music experience to the appropriate location in the parent website.

Preserve the homepage, gallery and all other working sections.

### Stage 6: Verification

Run the existing development server and available project checks.

Inspect the rendered website, browser console, terminal output and failed network requests when the environment permits.

Test the main interactions and fix discovered defects.

### Stage 7: Refinement

Review the finished experience for visual inconsistencies, weak typography, poor cropping, excessive glass effects, awkward spacing, broken controls and mobile-layout problems.

Refine the design until it feels intentional and complete.

**Do not stop after writing the code. Run the application and inspect the result.**

---

## 16. ACCEPTANCE CHECKLIST

Before declaring completion, verify:

### Existing website
- The original website still works.
- Existing routes remain available.
- The gallery has not been replaced.
- Shared components continue to work.

### Music experience
- The new route is accessible.
- The artist's identity is clear.
- The featured release uses genuine assets.
- Album metadata is accurate.
- The catalogue supports future releases.
- The full-album destination is verified or explicitly configurable.
- Preview functionality works when a legitimate source exists.
- Missing media is handled gracefully.
- No fake play buttons or broken links remain.

### Visual quality
- The experience feels consistent with BryBrands.
- The music section has its own identity.
- Glassmorphism is restrained and purposeful.
- Skeuomorphic details enhance usability.
- Typography and spacing are coherent.
- Artwork is properly presented.
- The site does not resemble a generic dashboard.

### Technical quality
- Relevant build checks pass.
- No avoidable runtime errors remain.
- Internal links work.
- External destinations are correct.
- Mobile and desktop layouts work.
- Accessibility requirements are addressed.
- No unnecessary dependencies have been introduced.

Do not claim that a check passed unless it was actually performed.

---

## 17. FINAL DELIVERY REPORT

After implementation, provide a concise report explaining:

1. What was built.
2. Which design decisions were made.
3. Which files and components were created or modified.
4. Which supplied assets were used.
5. How album previews work.
6. Where the full album links.
7. Which tests and checks were performed.
8. What information, URLs, assets or permissions remain outstanding.
9. How to run the application using the existing project setup.

Do not claim deployment unless deployment actually occurred.

---

# FINAL EXECUTION DIRECTIVE

Build this as a genuine extension of the BryBrands Sekurutau ecosystem.

Investigate before modifying. Understand the brand before designing. Inspect the supplied materials before choosing imagery. Use real artist information. Implement the actual functionality. Test the running application. Refine the experience before finishing.

The final result must be:

- Minimal without feeling empty.
- Premium without feeling pretentious.
- Tactile without becoming gimmicky.
- Immersive without sacrificing usability.
- Artist-focused without inventing an identity.
- Technically sound without unnecessary complexity.
- Visually distinctive while remaining recognisably BryBrands.

**Deliver the working music subsite inside the existing project, not merely a plan, screenshot or static mockup.**