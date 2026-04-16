document.addEventListener('DOMContentLoaded', function() {
    const featureButtons = document.querySelectorAll('.feature-button');
    const featureDisplay = document.getElementById('feature-display');

    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featureInfo = this.getAttribute('data-feature-info');
            featureDisplay.textContent = featureInfo;
        });
    });

    const scrollToTopButton = document.getElementById('scroll-to-top');
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const videoElement = document.getElementById('console-video');
    videoElement.addEventListener('mouseover', function() {
        this.play();
    });

    videoElement.addEventListener('mouseout', function() {
        this.pause();
        this.currentTime = 0;
    });
});