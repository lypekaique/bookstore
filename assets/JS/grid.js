document.addEventListener("DOMContentLoaded", function () {
  // Formata os nomes dos países nos overlays sem alterar os data-attributes
  document.querySelectorAll(".country-card").forEach((card) => {
    const countryCode = card.getAttribute("data-country");
    const formattedName = formatCountryName(countryCode);
    card.querySelector(".country-overlay").textContent = formattedName;
  });

  function formatCountryName(countryCode) {
    return countryCode
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const countryData = {
    brazil: {
      name: "Brazil",
      images: [
        {
          url: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Christ the Redeemer in Rio de Janeiro",
        },
        {
          url: "https://images.unsplash.com/photo-1556751003-a249a53dc9b7?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Amazon Rainforest",
        },
        {
          url: "https://images.unsplash.com/photo-1550574364-d19c7a455f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Beautiful beaches of Brazil",
        },
        {
          url: "https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Rio Carnival",
        },
      ],
    },
    japan: {
      name: "Japan",
      images: [
        {
          url: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Tokyo cityscape",
        },
        {
          url: "https://images.unsplash.com/photo-1528296991138-4a718efd2906?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Traditional temple in Kyoto",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Mount Fuji",
        },
        {
          url: "https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Cherry blossoms",
        },
      ],
    },
    italy: {
      name: "Italy",
      images: [
        {
          url: "https://plus.unsplash.com/premium_photo-1675975678138-9413779a753a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Colosseum in Rome",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1663039976418-de9f584aaa57?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Canals of Venice",
        },
        {
          url: "https://images.unsplash.com/photo-1720135418555-2458b5f6693c?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Tuscan countryside",
        },
        {
          url: "https://images.unsplash.com/photo-1583844056361-4418a8f2a985?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Amalfi Coast",
        },
      ],
    },
    suica: {
      name: "Suiça",
      images: [
        {
          url: "https://plus.unsplash.com/premium_photo-1674680852778-c59c7fd89985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Zurique",
        },
        {
          url: "https://images.unsplash.com/photo-1634920967431-b46ec552bef1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Castelo Chillon",
        },
        {
          url: "https://images.unsplash.com/photo-1621149573349-452fd2bd9705?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Kapellbrücke",
        },
        {
          url: "https://images.unsplash.com/photo-1605825856823-cabe105ab0af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Interlaken",
        },
      ],
    },
    australia: {
      name: "Australia",
      images: [
        {
          url: "https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Sydney Opera House",
        },
        {
          url: "https://images.unsplash.com/photo-1605235904827-2fc511a86dd0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Australian Outback",
        },
        {
          url: "https://images.unsplash.com/photo-1442386967425-6205da77c3ed?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Great Barrier Reef",
        },
        {
          url: "https://res.cloudinary.com/oasisapp/image/upload/c_fill,w_1200/1/australia/animals-37079",
          caption: "Native wildlife",
        },
      ],
    },
    "south-africa": {
      name: "South Africa",
      images: [
        {
          url: "https://source.unsplash.com/random/800x600/?south-africa,cape-town",
          caption: "Cape Town and Table Mountain",
        },
        {
          url: "https://source.unsplash.com/random/800x600/?south-africa,safari",
          caption: "Safari adventure",
        },
        {
          url: "https://source.unsplash.com/random/800x600/?south-africa,garden-route",
          caption: "Garden Route",
        },
        {
          url: "https://source.unsplash.com/random/800x600/?south-africa,wildlife",
          caption: "African wildlife",
        },
      ],
    },
  };

  // DOM elements
  const modal = document.querySelector(".country-modal");
  const modalImg = document.getElementById("modal-image");
  const modalCountryName = document.getElementById("modal-country-name");
  const imageCaption = document.getElementById("image-caption");
  const imageCounter = document.querySelector(".image-counter");
  const closeBtn = document.querySelector(".close-modal");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const countryCards = document.querySelectorAll(".country-card");

  let currentCountry = null;
  let currentIndex = 0;

  function openCountryModal(countryCode) {
    // Usa o countryCode exatamente como está no data-attribute
    currentCountry = countryData[countryCode];

    if (!currentCountry) {
      console.error("País não encontrado:", countryCode);
      return;
    }

    currentIndex = 0;
    updateModal();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function updateModal() {
    modalImg.src = currentCountry.images[currentIndex].url;
    modalImg.alt = currentCountry.images[currentIndex].caption;
    modalCountryName.textContent = currentCountry.name;
    imageCaption.textContent = currentCountry.images[currentIndex].caption;
    imageCounter.textContent = `${currentIndex + 1} / ${
      currentCountry.images.length
    }`;
  }

  function navigate(direction) {
    currentIndex += direction;

    if (currentIndex >= currentCountry.images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentCountry.images.length - 1;

    updateModal();
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Event listeners
  countryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const countryCode = card.getAttribute("data-country");
      openCountryModal(countryCode);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", () => navigate(-1));
  nextBtn.addEventListener("click", () => navigate(1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    }
  });
});
