const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
});

// Seleciona todas as imagens do carrossel e a imagem principal
const carouselImages = document.querySelectorAll('.swiper-slide img');
const mainImage = document.getElementById('main-image');

// Função para atualizar a imagem principal e destacar a imagem selecionada
function updateSelectedImage(selectedImage) {
  // Atualiza a imagem principal
  mainImage.src = selectedImage.src;

  // Remove a classe 'selected' de todas as imagens
  carouselImages.forEach(image => {
      image.classList.remove('selected');
  });

  // Adiciona a classe 'selected' na imagem clicada
  selectedImage.classList.add('selected');
}

// Adiciona o evento de clique nas imagens do carrossel
carouselImages.forEach(image => {
  image.addEventListener('click', () => {
      updateSelectedImage(image);
  });
});

// Definir a primeira imagem como a focada inicialmente
updateSelectedImage(carouselImages[0]);