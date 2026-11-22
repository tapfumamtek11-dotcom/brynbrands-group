        // Custom Cursor
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursorDot');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Theme Sync
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        }

        // Cursor hover effect
        const hoverElements = document.querySelectorAll('a, button, .artwork-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });

        // Magnetic effect
        document.querySelectorAll('.magnetic').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });

        // Artwork data
        const artworks = [
            {
                id: 1,
                title: "Whispers of the Ancestors",
                year: 2023,
                material: "Serpentine Stone",
                dimensions: "78 × 45 × 32 cm",
                weight: "85 kg",
                status: "available",
                provenance: "Direct from artist studio",
                description: "A meditation on the continuity between generations, this piece captures the moment when ancestral wisdom passes through the veil into living consciousness.",
                image: "cat.png"
            },
            {
                id: 2,
                title: "The Embrace of Leadership",
                year: 2022,
                material: "Black Springstone",
                dimensions: "92 × 55 × 40 cm",
                weight: "120 kg",
                status: "sold",
                provenance: "Private collection, Geneva",
                description: "Exploring the duality of power and tenderness, this work embodies the African philosophy of leadership as service—strength expressed through nurturing.",
                image: "stoneeee.png"
            },
            {
                id: 3,
                title: "Spirit of Ubuntu",
                year: 2023,
                material: "Opal Stone",
                dimensions: "65 × 38 × 28 cm",
                weight: "55 kg",
                status: "available",
                provenance: "Direct from artist studio",
                description: "Ubuntu—'I am because we are'—finds form in interlocking figures that cannot exist independently, a celebration of human interconnection.",
                image: "stoneee.png"
            },
            {
                id: 4,
                title: "Keeper of Dreams",
                year: 2021,
                material: "Lepidolite",
                dimensions: "88 × 48 × 35 cm",
                weight: "95 kg",
                status: "commission",
                provenance: "Commission available",
                description: "The guardian figure cradles possibility itself—a protective spirit watching over the unborn visions of those who dare to imagine.",
                image: "rok.png"
            },
            {
                id: 5,
                title: "Dawn Meditation",
                year: 2024,
                material: "Green Serpentine",
                dimensions: "72 × 42 × 30 cm",
                weight: "70 kg",
                status: "available",
                provenance: "Direct from artist studio",
                description: "Captured in the stillness of first light, this contemplative figure embodies the sacred pause between sleep and waking, where clarity is born.",
                image: "another.png"
            },
            {
                id: 6,
                title: "The Eternal Bond",
                year: 2022,
                material: "Butter Jade",
                dimensions: "85 × 52 × 38 cm",
                weight: "110 kg",
                status: "sold",
                provenance: "Private collection, London",
                description: "Two forms merge into one, exploring love not as possession but as mutual becoming—the space where individual souls create something greater.",
                image: "maybee.png"
            }
        ];

        // Populate collection grid
        const collectionGrid = document.getElementById('collectionGrid');

        function renderArtworks(filter = 'all') {
            collectionGrid.innerHTML = '';
            const filtered = filter === 'all' ? artworks : artworks.filter(a => a.status === filter);

            filtered.forEach((artwork, index) => {
                const card = document.createElement('div');
                card.className = 'artwork-card reveal';
                card.style.transitionDelay = `${index * 0.1}s`;
                card.dataset.id = artwork.id;
                card.dataset.status = artwork.status;

                const statusClass = artwork.status === 'available' ? 'status-available' :
                                   artwork.status === 'sold' ? 'status-sold' : 'status-commission';
                const statusText = artwork.status === 'commission' ? 'Commission' :
                                  artwork.status.charAt(0).toUpperCase() + artwork.status.slice(1);

                card.innerHTML = `
                    <div class="artwork-image-container">
                        <img src="images/${artwork.image}" class="artwork-image" alt="${artwork.title}">
                        <div class="artwork-overlay"></div>
                        <span class="artwork-status ${statusClass}">${statusText}</span>
                        <div class="artwork-info">
                            <h3 class="artwork-title">${artwork.title}</h3>
                            <p class="artwork-meta">${artwork.material} · ${artwork.year}</p>
                        </div>
                        <div class="artwork-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                `;

                card.addEventListener('click', () => openModal(artwork));
                card.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
                card.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
                collectionGrid.appendChild(card);

                // Trigger reveal animation
                setTimeout(() => card.classList.add('visible'), 100);
            });
        }

        renderArtworks();

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderArtworks(btn.dataset.filter);
            });
        });

        // Modal functionality
        const modal = document.getElementById('artworkModal');
        const modalClose = document.getElementById('modalClose');
        const modalInquire = document.getElementById('modalInquire');
        let currentArtwork = null;

        function openModal(artwork) {
            currentArtwork = artwork;

            document.getElementById('modalImage').src = `images/${artwork.image}`;
            document.getElementById('modalTitle').textContent = artwork.title;
            document.getElementById('modalYear').textContent = artwork.year;
            document.getElementById('modalDescription').textContent = artwork.description;
            document.getElementById('modalMaterial').textContent = artwork.material;
            document.getElementById('modalDimensions').textContent = artwork.dimensions;
            document.getElementById('modalWeight').textContent = artwork.weight;
            document.getElementById('modalProvenance').textContent = artwork.provenance;

            const statusEl = document.getElementById('modalStatus');
            const statusClass = artwork.status === 'available' ? 'status-available' :
                               artwork.status === 'sold' ? 'status-sold' : 'status-commission';
            const statusText = artwork.status === 'commission' ? 'Commission Available' :
                              artwork.status.charAt(0).toUpperCase() + artwork.status.slice(1);
            statusEl.className = `modal-status ${statusClass}`;
            statusEl.textContent = statusText;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        modalInquire.addEventListener('click', () => {
            closeModal();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                document.getElementById('interest').value = 'collection';
                document.getElementById('message').value = `I am interested in "${currentArtwork.title}" (${currentArtwork.year}).`;
                document.getElementById('message').focus();
            }, 800);
        });

        // Alert modal
        const alertModal = document.getElementById('alertModal');
        const alertClose = document.getElementById('alertClose');

        function showAlert(title, message) {
            document.getElementById('alertTitle').textContent = title;
            document.getElementById('alertMessage').textContent = message;
            alertModal.classList.add('active');
        }

        alertClose.addEventListener('click', () => {
            alertModal.classList.remove('active');
        });

        alertModal.addEventListener('click', (e) => {
            if (e.target === alertModal) {
                alertModal.classList.remove('active');
            }
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;

            showAlert(
                'Thank You, ' + name.split(' ')[0],
                'Your enquiry has been received. We typically respond within 48 hours during business days.'
            );

            e.target.reset();
        });

        // Mobile menu
        const menuBtn = document.getElementById('menuBtn');
        const menuCloseBtn = document.getElementById('menuClose');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = mobileMenu.querySelectorAll('a');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Scroll reveal
        const reveals = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -80px 0px'
        });

        reveals.forEach(el => revealObserver.observe(el));

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (modal.classList.contains('active')) closeModal();
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
                if (alertModal.classList.contains('active')) {
                    alertModal.classList.remove('active');
                }
            }
        });

        // Parallax on shapes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.shape').forEach((shape, i) => {
                const speed = 0.1 + (i * 0.05);
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });