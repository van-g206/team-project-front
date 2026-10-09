document.addEventListener('DOMContentLoaded', () => {
  const botaoMenu = document.querySelector('.botao-menu');
  const menuLinks = document.querySelector('.menu-links');

  // abre e fecha o menu no celular
  botaoMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('aberto');
  });

  // fecha o menu depois de clicar em um link
  menuLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuLinks.classList.remove('aberto');
    });
  });
});