document.addEventListener('DOMContentLoaded', () => {
  const lista = document.querySelector('.carrossel-lista');
  const cartoes = [...document.querySelectorAll('.carrossel-item')];
  const carrossel = document.querySelector('.carrossel');
  const botaoEsquerda = document.querySelector('.carrossel-botao-esquerda');
  const botaoDireita = document.querySelector('.carrossel-botao-direita');

  const TEMPO_ENTRE_TROCAS = 2500; // em milissegundos
  let indiceAtual = 0;
  let temporizadorAutoplay = null;

  // Descobre qual card está mais perto do centro da lista
  function descobrirIndiceCentral() {
    const centroDaLista = lista.getBoundingClientRect().left + lista.clientWidth / 2;
    let indiceCentral = 0;
    let menorDistancia = Infinity;

    cartoes.forEach((cartao, indice) => {
      const area = cartao.getBoundingClientRect();
      const distancia = Math.abs(centroDaLista - (area.left + area.width / 2));

      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        indiceCentral = indice;
      }
    });

    return indiceCentral;
  }

  // Aplica a classe "foco" no card central e guarda qual é
  function destacarCartaoCentral() {
    indiceAtual = descobrirIndiceCentral();

    cartoes.forEach((cartao, indice) => {
      cartao.classList.toggle('foco', indice === indiceAtual);
    });
  }

  // Rola a lista (e só a lista) até o card escolhido
  function irParaCartao(indice) {
    const total = cartoes.length;
    const indiceCorrigido = (indice + total) % total; // volta ao início/fim

    const cartao = cartoes[indiceCorrigido];
    const posicaoParaCentralizar =
      cartao.offsetLeft - (lista.clientWidth - cartao.offsetWidth) / 2;

    lista.scrollTo({ left: posicaoParaCentralizar, behavior: 'smooth' });
  }

  function irParaProximo() {
    irParaCartao(indiceAtual + 1);
  }

  function irParaAnterior() {
    irParaCartao(indiceAtual - 1);
  }

  function iniciarAutoplay() {
    pararAutoplay(); // garante que nunca existam dois temporizadores
    temporizadorAutoplay = setInterval(irParaProximo, TEMPO_ENTRE_TROCAS);
  }

  function pararAutoplay() {
    clearInterval(temporizadorAutoplay);
    temporizadorAutoplay = null;
  }

  // Botões
  botaoDireita.addEventListener('click', () => {
    irParaProximo();
    iniciarAutoplay(); // reinicia a contagem depois do clique
  });

  botaoEsquerda.addEventListener('click', () => {
    irParaAnterior();
    iniciarAutoplay();
  });

  // Atualiza o destaque ao rolar ou redimensionar a janela
  lista.addEventListener('scroll', destacarCartaoCentral, { passive: true });
  window.addEventListener('resize', destacarCartaoCentral);

  // Pausa quando o mouse está em cima ou o dedo toca (celular)
  carrossel.addEventListener('mouseenter', pararAutoplay);
  carrossel.addEventListener('mouseleave', iniciarAutoplay);
  carrossel.addEventListener('touchstart', pararAutoplay, { passive: true });
  carrossel.addEventListener('touchend', iniciarAutoplay);

  // Pausa se a aba do navegador ficar escondida
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pararAutoplay();
    } else {
      iniciarAutoplay();
    }
  });

  // Início
  irParaCartao(0);
  destacarCartaoCentral();
  iniciarAutoplay();
});