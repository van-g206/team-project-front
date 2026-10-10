// Abre e fecha a navegação no celular.
const botaoMenu = document.querySelector('.botao-menu');
const linksNavegacao = document.querySelector('.links-navegacao');

botaoMenu.addEventListener('click', () => {
  const menuAberto = linksNavegacao.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', menuAberto);
  botaoMenu.setAttribute('aria-label', menuAberto ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu depois que a pessoa escolhe uma seção.
linksNavegacao.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    linksNavegacao.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
  });
});
