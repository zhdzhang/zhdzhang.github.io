const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.muted = true;
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});