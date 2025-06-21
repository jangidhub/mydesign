// Video controls functionality
        const video = document.querySelector('.hero-video');
        const playBtn = document.getElementById('playBtn');
        const progressFill = document.getElementById('progressFill');
        const timeDisplay = document.getElementById('timeDisplay');

        let isPlaying = false;

        // Auto-play video when it comes into view
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                    isPlaying = true;
                    playBtn.innerHTML = '⏸';
                }
            });
        });

        videoObserver.observe(video);

        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                video.pause();
                playBtn.innerHTML = '▶';
            } else {
                video.play();
                playBtn.innerHTML = '⏸';
            }
            isPlaying = !isPlaying;
        });

        video.addEventListener('timeupdate', () => {
            const progress = (video.currentTime / video.duration) * 100;
            progressFill.style.width = progress + '%';
            
            const current = formatTime(video.currentTime);
            const duration = formatTime(video.duration);
            timeDisplay.textContent = `${current} / ${duration}`;
        });

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // Smooth scrolling for product cards
        const productCards = document.querySelectorAll('.product-card');
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, {
            threshold: 0.1
        });

        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            cardObserver.observe(card);
        });

        // Add to cart functionality
        document.querySelectorAll('.buy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productName = e.target.closest('.product-card').querySelector('.product-name').textContent;
                
                // Create floating notification
                const notification = document.createElement('div');
                notification.textContent = `${productName} added to cart!`;
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #34c759;
                    color: white;
                    padding: 15px 25px;
                    border-radius: 10px;
                    font-weight: 600;
                    z-index: 1000;
                    animation: slideIn 0.3s ease-out;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease-out forwards';
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            });
        });

        // Add slide animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);