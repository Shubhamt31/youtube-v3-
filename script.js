document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'AIzaSyA46IcNz2ZbijNK1LLs0bU4r__lC0PPQ2s';
    const videoId = 'Kl46_z65ypU';

    const videoPlayer = document.getElementById('custom-player');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function () {
        // Set video source dynamically
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        videoPlayer.style.display = 'block';
        playButton.style.display = 'none';
    });
});
