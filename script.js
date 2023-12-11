// Replace 'YOUR_API_KEY' with your actual YouTube API key
const apiKey = 'AIzaSyA46IcNz2ZbijNK1LLs0bU4r__lC0PPQ2s';
const videoId = 'Kl46_z65ypU';

// Fetch video details using YouTube Data API
fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const videoTitle = data.items[0].snippet.title;
        const videoDescription = data.items[0].snippet.description;
        const videoPlayer = document.getElementById('youtube-player');

        // Set video player attributes
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
        videoPlayer.title = videoTitle;
        videoPlayer.allow = 'autoplay; encrypted-media; picture-in-picture';
    })
    .catch(error => console.error('Error fetching video details:', error));
