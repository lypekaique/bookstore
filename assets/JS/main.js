document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o carrossel principal
  var mainCarousel = new Splide(".main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: true,
  });

  // Inicializa o carrossel de thumbnails
  var thumbnailCarousel = new Splide(".thumbnail-carousel", {
    fixedWidth: 150,
    fixedHeight: 80,
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: true,
    cover: true,
    isNavigation: true,
    focus: "center",
  });

  // Sincroniza os carrosseis
  mainCarousel.sync(thumbnailCarousel);
  mainCarousel.mount();
  thumbnailCarousel.mount();
});
