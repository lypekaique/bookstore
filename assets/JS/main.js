document.addEventListener("DOMContentLoaded", function () {
  // Dados do carrossel
  const carouselData = [
    {
      videoSrc: "assets/IMG/Natureza.mp4",
      thumbnail: "assets/IMG/Nature-Thumb.webp",
      title: "Natureza",
      subtitle: "Explore a beleza natural do nosso planeta",
    },
    {
      videoSrc: "assets/IMG/Cidade.mp4",
      thumbnail: "assets/IMG/Cidade-Thumb.webp",
      title: "Cidade",
      subtitle: "A energia vibrante da vida urbana",
    },
    {
      videoSrc: "assets/IMG/diversao.mp4",
      thumbnail: "assets/IMG/Diversao-Thumb.webp",
      title: "Diversão",
      subtitle: "Momentos de alegria e descontração",
    },
    {
      videoSrc: "assets/IMG/Aventura.mp4",
      thumbnail: "assets/IMG/Aventura-Thumb.webp",
      title: "Aventura",
      subtitle: "Descubra novas experiências emocionantes",
    },
  ];

  // Elementos DOM
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const backgroundVideo = document.querySelector(".background-video");
  const heroContent = document.querySelector(".hero-content");
  const carouselContainer = document.querySelector(".carousel-container");

  // Estado atual
  let currentIndex = 0;
  let autoScrollInterval;
  let swiper;

  // Configura o vídeo para autoplay com fallback
  function setupVideoAutoplay() {
    backgroundVideo.muted = true; // Necessário para autoplay em muitos navegadores
    backgroundVideo.playsInline = true; // Importante para iOS

    const playPromise = backgroundVideo.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay prevented, showing fallback:", error);
        // Mostra botão de play se necessário
      });
    }
  }

  // Função para inicializar o Swiper com configurações responsivas
  function initSwiper() {
    swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 15,
      loop: false,
      slideToClickedSlide: true,
      touchEventsTarget: "container",
      allowTouchMove: true, // Permite deslizar com o dedo
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
          centeredSlides: false,
        },
      },
      on: {
        init: function () {
          console.log("Swiper inicializado com sucesso");
        },
        slideChange: function () {
          updateHero(this.activeIndex);
        },
        touchEnd: function () {
          resetAutoScroll(); // Reinicia o auto-scroll após interação manual
        },
      },
    });
  }

  // Inicializa o carrossel
  function initCarousel() {
    // Cria o HTML do carrossel
    const carouselHTML = carouselData
      .map(
        (item, index) => `
        <div class="swiper-slide">
          <div class="carousel-item ${
            index === 0 ? "active" : ""
          }" data-index="${index}">
            <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
            <h3>${item.title}</h3>
          </div>
        </div>
      `
      )
      .join("");

    carouselContainer.innerHTML = `
      <div class="swiper">
        <div class="swiper-wrapper">
          ${carouselHTML}
        </div>
      </div>
    `;

    // Inicializa o Swiper
    initSwiper();

    // Adiciona event listeners para os itens do carrossel
    document.querySelectorAll(".carousel-item").forEach((item) => {
      item.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        updateHero(index);
        swiper.slideTo(index); // Garante que o Swiper sincronize
      });
    });

    // Carrega o primeiro item
    updateHero(0);
    setupVideoAutoplay();
    startAutoScroll();
  }

  // Atualiza o hero com o item selecionado
  function updateHero(index) {
    if (index === currentIndex) return;

    currentIndex = index;
    heroContent.style.opacity = "0";

    // Atualiza classes ativas
    document.querySelectorAll(".carousel-item").forEach((item) => {
      item.classList.remove("active");
    });
    document
      .querySelector(`.carousel-item[data-index="${index}"]`)
      .classList.add("active");

    // Atualiza após a animação
    setTimeout(() => {
      backgroundVideo.src = carouselData[index].videoSrc;

      // Garante que o vídeo vai tocar após carregar
      backgroundVideo.onloadeddata = function () {
        const playPromise = backgroundVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Play prevented, trying muted:", error);
            backgroundVideo.muted = true;
            backgroundVideo.play();
          });
        }
      };

      backgroundVideo.load(); // Inicia o carregamento

      heroTitle.textContent = carouselData[index].title;
      heroSubtitle.textContent = carouselData[index].subtitle;
      heroContent.style.opacity = "1";
    }, 500);

    resetAutoScroll();
  }

  // Configura o scroll automático
  function startAutoScroll() {
    clearInterval(autoScrollInterval); // Limpa qualquer intervalo existente

    autoScrollInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      updateHero(nextIndex);
      swiper.slideTo(nextIndex, 1000); // Garante sincronização com o Swiper
    }, 4000); // Tempo de troca para 4s
  }

  // Reinicia o intervalo do auto scroll
  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  }

  // Inicializa o carrossel
  initCarousel();

  // Adiciona fallback para interação manual caso o Swiper falhe
  document.querySelectorAll(".carousel-item").forEach((item) => {
    item.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      updateHero(index);
    });
  });
});
