const $lgContainer = document.getElementById("animated-thumbnails");

const inlineGallery = lightGallery($lgContainer, {
  container: $lgContainer,
  autoplay:true,
  autoplayControls:true,
  download:false,
  hash: false,
  closable: true,
  fullScreen:true,
  showMaximizeIcon: false,
  appendSubHtmlTo: ".lg-itemg",
  slideDelay: 400,
  plugins: [lgZoom, lgThumbnail,lgAutoplay],
  allowMediaOverlap: true,
  captions: false,
  thumbWidth: 60,
  thumbHeight: "40px",
  thumbMargin: 4
});




