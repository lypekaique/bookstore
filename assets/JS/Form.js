// Função para aplicar máscara de telefone
function applyPhoneMask(event) {
  const input = event.target;
  let value = input.value.replace(/\D/g, "");

  // Limita a 11 dígitos
  value = value.substring(0, 11);

  // Aplica máscara conforme o tamanho
  if (value.length <= 10) {
    value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  input.value = value;
}

// Função para validar e-mail
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Função para validar todo o formulário
function validateForm() {
  let isValid = true;
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");

  // Validação do nome
  if (document.getElementById("nome").value.trim() === "") {
    isValid = false;
    alert("Por favor, insira seu nome completo");
  }

  // Validação de e-mail
  if (!validateEmail(email)) {
    emailError.textContent = "Por favor, insira um e-mail válido";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validação de telefone
  const phone = document.getElementById("telefone").value.replace(/\D/g, "");
  if (phone.length < 10 || phone.length > 11) {
    isValid = false;
    alert("Telefone inválido! Digite DDD + número (10 ou 11 dígitos)");
  }

  return isValid;
}

// Função auxiliar para esperar um tempo
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Função principal para animação do formulário
async function submitFormWithAnimation(event) {
  event.preventDefault();
  if (!validateForm()) return;

  // Elementos DOM
  const elements = {
    form: document.getElementById("form"),
    formLead: document.getElementById("formLead"),
    formContainer: document.querySelector(".form-container"),
    imageSection: document.querySelector(".image-section"),
    loading: document.getElementById("loading"),
    welcomeMessage: document.getElementById("welcomeMessage"),
    mainPage: document.getElementById("mainPage"),
    mainHeader: document.querySelector(".main-header"),
    mainContent: document.querySelector(".main-content"),
    mainFooter: document.querySelector(".main-footer"),
    nome: document.getElementById("nome").value.trim(),
  };

  // 1. Esconde o formulário
  elements.form.style.opacity = "0";
  await wait(300);

  // 2. Animação de esmagamento responsiva
  if (window.innerWidth <= 768) {
    // Mobile: animação vertical
    elements.formLead.classList.add("mobile-smash-animation");
    elements.formContainer.classList.add("mobile-expand-animation");
    elements.imageSection.classList.add("mobile-crush-animation");
  } else {
    // Desktop: animação horizontal
    elements.formContainer.classList.add("desktop-smash-animation");
    elements.imageSection.classList.add("desktop-smash-hide");
  }
  await wait(500);

  // 3. Mostra o loading
  elements.loading.style.display = "flex";
  elements.loading.style.opacity = "1";
  await wait(200);

  // 4. Mostra mensagem de boas-vindas
  elements.welcomeMessage.textContent = `Bem-vindo, ${
    elements.nome || "visitante"
  }!`;
  elements.welcomeMessage.style.opacity = "1";
  elements.welcomeMessage.style.transform = "translateY(0)";
  await wait(1500);

  // 5. Animação de subida da mensagem
  elements.welcomeMessage.classList.add("slide-up");
  await wait(800);

  // 6. Prepara e mostra a página principal
  elements.mainPage.style.display = "block";
  await wait(10);
  elements.mainPage.style.opacity = "1";

  // 7. Remove o formulário completamente
  elements.formLead.style.opacity = "0";
  await wait(500);
  elements.formLead.remove();

  // 8. Ativa overflow na main
  elements.mainPage.style.overflow = "auto";

  // 9. Anima cada seção individualmente
  elements.mainHeader.style.opacity = "1";
  elements.mainHeader.style.transform = "translateY(0)";
  await wait(200);

  elements.mainContent.style.opacity = "1";
  elements.mainContent.style.transform = "translateY(0)";
  await wait(200);

  elements.mainFooter.style.opacity = "1";
  elements.mainFooter.style.transform = "translateY(0)";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  try {
    document
      .getElementById("telefone")
      .addEventListener("input", applyPhoneMask);
    document.getElementById("form").addEventListener("submit", (e) => {
      submitFormWithAnimation(e).catch((error) => {
        console.error("Erro na animação:", error);
      });
    });
  } catch (error) {
    console.error("Erro ao configurar event listeners:", error);
  }
});
