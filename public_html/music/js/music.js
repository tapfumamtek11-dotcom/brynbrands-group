/**
 * BryBrands Music — Audio Player Controller & Interactive UI Logic
 * Author: Antigravity Pair Programmer
 */

document.addEventListener('DOMContentLoaded', () => {
    // Ensure MUSIC_DATA is loaded
    if (typeof MUSIC_DATA === 'undefined') {
        console.error('MUSIC_DATA is not defined.');
        return;
    }

    const { artist, featuredRelease, discography } = MUSIC_DATA;
    const tracks = featuredRelease.tracks;

    // State
    let currentTrackIdx = 0;
    let isPlaying = false;
    let isLooping = false;
    let isMuted = false;
    let previousVolume = 0.85;

    // Elements
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.volume = previousVolume;

    // UI Elements
    const vinylDisc = document.getElementById('vinylDisc');
    const playerChassis = document.getElementById('playerChassis');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const loopBtn = document.getElementById('loopBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    
    const progressWrapper = document.getElementById('progressWrapper');
    const progressBar = document.getElementById('progressBar');
    const progressBuffered = document.getElementById('progressBuffered');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    
    const trackNumberLabel = document.getElementById('trackNumberLabel');
    const currentTrackTitle = document.getElementById('currentTrackTitle');
    const currentTrackDesc = document.getElementById('currentTrackDesc');
    const tracksContainer = document.getElementById('tracksContainer');
    const discographyContainer = document.getElementById('discographyContainer');

    // Modals
    const linerNotesModal = document.getElementById('linerNotesModal');
    const creditsModal = document.getElementById('creditsModal');
    const openLinerNotesBtn = document.getElementById('openLinerNotes');
    const openCreditsBtn = document.getElementById('openCredits');
    const closeBtns = document.querySelectorAll('.modal-close-btn');

    // Navigation
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');

    // Render Tracklist
    function renderTracklist() {
        if (!tracksContainer) return;
        tracksContainer.innerHTML = '';

        tracks.forEach((track, idx) => {
            const card = document.createElement('div');
            card.className = `track-item-card ${idx === currentTrackIdx ? 'active' : ''}`;
            card.dataset.index = idx;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `Play Track ${track.number}: ${track.title}`);

            card.innerHTML = `
                <div class="track-card-left">
                    <span class="track-idx">${track.number}</span>
                    <div class="track-titles-block">
                        <span class="track-song-title">${escapeHtml(track.title)}</span>
                        <span class="track-song-meaning">${escapeHtml(track.meaning)}</span>
                    </div>
                </div>
                <div class="track-card-right">
                    <span class="track-duration-pill">${track.duration}</span>
                    <div class="track-play-indicator" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                selectTrack(idx, true);
            });

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectTrack(idx, true);
                }
            });

            tracksContainer.appendChild(card);
        });
    }

    // Render Discography Grid
    function renderDiscography() {
        if (!discographyContainer) return;
        discographyContainer.innerHTML = '';

        discography.forEach(item => {
            const card = document.createElement('article');
            card.className = 'release-card';
            
            card.innerHTML = `
                <div class="release-card-cover">
                    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)} Cover" loading="lazy">
                    <span class="release-badge">${escapeHtml(item.badge)}</span>
                </div>
                <div class="release-card-body">
                    <div>
                        <div class="release-meta-head">
                            <span class="release-catalog-tag">${escapeHtml(item.catalog)}</span>
                            <span class="release-year">${escapeHtml(item.year)}</span>
                        </div>
                        <h3 class="release-title">${escapeHtml(item.title)}</h3>
                        <p class="release-desc">${escapeHtml(item.description)}</p>
                    </div>
                    <div>
                        ${item.catalog === 'BTM 011' ? 
                            `<a href="#player" class="release-action-link">Listen Now →</a>` : 
                            `<span class="release-action-link" style="opacity: 0.75;">${escapeHtml(item.highlight)}</span>`
                        }
                    </div>
                </div>
            `;

            discographyContainer.appendChild(card);
        });
    }

    // Track Selection
    function selectTrack(idx, shouldAutoplay = false) {
        if (idx < 0 || idx >= tracks.length) return;
        currentTrackIdx = idx;
        const track = tracks[currentTrackIdx];

        // Update player labels
        if (trackNumberLabel) trackNumberLabel.textContent = `TRACK ${track.number} OF ${tracks.length}`;
        if (currentTrackTitle) currentTrackTitle.textContent = track.title;
        if (currentTrackDesc) currentTrackDesc.textContent = track.meaning;
        if (totalTimeEl) totalTimeEl.textContent = track.duration;

        // Set audio source
        audio.src = track.audioSrc;
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '00:00';

        // Update tracklist active states
        const allCards = tracksContainer.querySelectorAll('.track-item-card');
        allCards.forEach((card, i) => {
            if (i === currentTrackIdx) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        if (shouldAutoplay) {
            playAudio();
        } else {
            pauseAudio();
        }
    }

    // Playback Controls
    function playAudio() {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                updatePlayStateUI();
            }).catch(err => {
                console.warn('Playback deferred or interrupted:', err);
                isPlaying = false;
                updatePlayStateUI();
            });
        }
    }

    function pauseAudio() {
        audio.pause();
        isPlaying = false;
        updatePlayStateUI();
    }

    function togglePlay() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    function updatePlayStateUI() {
        if (isPlaying) {
            if (playerChassis) playerChassis.classList.add('playing');
            if (vinylDisc) vinylDisc.classList.add('spinning');
            if (playIcon) {
                playIcon.innerHTML = `
                    <rect x="6" y="4" width="4" height="16" fill="currentColor"></rect>
                    <rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>
                `;
            }
            if (playBtn) playBtn.setAttribute('aria-label', 'Pause Audio');
        } else {
            if (playerChassis) playerChassis.classList.remove('playing');
            if (vinylDisc) vinylDisc.classList.remove('spinning');
            if (playIcon) {
                playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>`;
            }
            if (playBtn) playBtn.setAttribute('aria-label', 'Play Audio');
        }
    }

    function prevTrack() {
        let prevIdx = currentTrackIdx - 1;
        if (prevIdx < 0) prevIdx = tracks.length - 1;
        selectTrack(prevIdx, isPlaying);
    }

    function nextTrack() {
        let nextIdx = currentTrackIdx + 1;
        if (nextIdx >= tracks.length) nextIdx = 0;
        selectTrack(nextIdx, isPlaying);
    }

    // Audio Event Handlers
    audio.addEventListener('timeupdate', () => {
        if (!isNaN(audio.duration) && audio.duration > 0) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${percent}%`;
            currentTimeEl.textContent = formatTime(audio.currentTime);
            totalTimeEl.textContent = formatTime(audio.duration);
        } else {
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener('progress', () => {
        if (audio.buffered.length > 0 && !isNaN(audio.duration) && audio.duration > 0) {
            const bufferedEnd = audio.buffered.end(audio.buffered.length - 1);
            const percent = (bufferedEnd / audio.duration) * 100;
            if (progressBuffered) progressBuffered.style.width = `${percent}%`;
        }
    });

    audio.addEventListener('ended', () => {
        if (isLooping) {
            audio.currentTime = 0;
            playAudio();
        } else {
            nextTrack();
        }
    });

    audio.addEventListener('error', (e) => {
        console.error('Audio playback error:', e);
        isPlaying = false;
        updatePlayStateUI();
        if (currentTrackDesc) {
            currentTrackDesc.textContent = `${tracks[currentTrackIdx].meaning} (Audio format or preview error)`;
        }
    });

    // Progress Bar Scrubbing
    if (progressWrapper) {
        progressWrapper.addEventListener('click', (e) => {
            const rect = progressWrapper.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            if (!isNaN(audio.duration) && audio.duration > 0) {
                audio.currentTime = clickPos * audio.duration;
            }
        });
    }

    // Loop Toggle
    if (loopBtn) {
        loopBtn.addEventListener('click', () => {
            isLooping = !isLooping;
            loopBtn.classList.toggle('active', isLooping);
            loopBtn.setAttribute('aria-pressed', isLooping.toString());
        });
    }

    // Volume & Mute Controls
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            audio.volume = val;
            isMuted = val === 0;
            updateMuteUI();
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            if (isMuted) {
                previousVolume = audio.volume || 0.85;
                audio.volume = 0;
                if (volumeSlider) volumeSlider.value = 0;
            } else {
                audio.volume = previousVolume || 0.85;
                if (volumeSlider) volumeSlider.value = audio.volume;
            }
            updateMuteUI();
        });
    }

    function updateMuteUI() {
        if (muteBtn) {
            muteBtn.classList.toggle('active', isMuted);
            muteBtn.setAttribute('aria-label', isMuted ? 'Unmute Audio' : 'Mute Audio');
        }
    }

    // Event Listeners for Player Buttons
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', prevTrack);
    if (nextBtn) nextBtn.addEventListener('click', nextTrack);

    // Hero "Listen Now" action
    const heroListenBtn = document.getElementById('heroListenBtn');
    if (heroListenBtn) {
        heroListenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const playerSection = document.getElementById('player');
            if (playerSection) {
                playerSection.scrollIntoView({ behavior: 'smooth' });
                if (!isPlaying) {
                    playAudio();
                }
            }
        });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        // Prevent keyboard shortcuts when user is interacting with form inputs
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            togglePlay();
        } else if (e.key === 'ArrowRight' && e.ctrlKey) {
            nextTrack();
        } else if (e.key === 'ArrowLeft' && e.ctrlKey) {
            prevTrack();
        }
    });

    // Helper: Format Time in MM:SS
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Modals Management
    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openLinerNotesBtn && linerNotesModal) {
        openLinerNotesBtn.addEventListener('click', () => openModal(linerNotesModal));
    }

    if (openCreditsBtn && creditsModal) {
        openCreditsBtn.addEventListener('click', () => openModal(creditsModal));
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) closeModal(modal);
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(linerNotesModal);
            closeModal(creditsModal);
        }
    });

    // Mobile Navigation Drawer
    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
            const isOpen = mobileDrawer.classList.contains('open');
            mobileToggle.setAttribute('aria-expanded', isOpen.toString());
        });

        mobileDrawer.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Custom Cursor tracking
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');
    if (cursor && cursorDot) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.16;
            cursorY += (mouseY - cursorY) * 0.16;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const interactiveElements = document.querySelectorAll('a, button, input, .track-item-card, .release-card, .stream-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    }

    // Initialize Page
    renderTracklist();
    renderDiscography();
    selectTrack(0, false);
});
