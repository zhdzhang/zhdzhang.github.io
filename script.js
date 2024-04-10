const videos = document.querySelectorAll('.videoclip');

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


$(document).ready(function () {
  $("a.abstract").click(function(){
      // nextAll function in jQuery only find the next sibling(same level) element
      $(this).nextAll("div.abstract").slideToggle("fast");
      return false;
  });
  $("a.bib").click(function(){
      $(this).nextAll("div.bib").slideToggle("fast");
      return false;
  });

  $("a.reference").click(function(){
      $(this).nextAll("div.reference").slideToggle("fast");
      return false;
  });
});