// Espera o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {
  // Adiciona o evento de clique nos links da navbar
  const links = document.querySelectorAll(".navbar a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link

      const targetId = this.getAttribute("href").substring(1); // Obtém o id do destino
      const targetElement = document.getElementById(targetId); // Seleciona o elemento de destino

      if (targetElement) {
        // Rolagem suave com ajuste de altura para a navbar fixa
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Ajuste para a altura da navbar
          behavior: "smooth"
        });
      }
    });
  });
});
