document.addEventListener('DOMContentLoaded', () => {
  const lista = document.querySelector('.carrossel-lista');
  const cartoes = [...document.querySelectorAll('.carrossel-item')];
  const videos = [...document.querySelectorAll('.carrossel-item video')];
  const carrossel = document.querySelector('.carrossel');
  const botaoEsquerda = document.querySelector('.carrossel-botao-esquerda');
  const botaoDireita = document.querySelector('.carrossel-botao-direita');

  const TEMPO_POR_IMAGEM = 3000; // em milissegundos
  let indiceAtual = 0;           // card mais perto do centro agora
  let indiceAtivo = -1;          // último card que "ativamos" (vídeo, temporizador)
  let temporizadorTroca = null;
  let temporizadorRolagem = null;
  let usuarioEmCima = false;     // mouse em cima ou dedo tocando

  function videoDoCartao(indice) {
    return cartoes[indice].querySelector('video');
  }

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

  // Aplica a classe "foco" no card central
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

  // ===== Controle do tempo =====
  function pararTroca() {
    clearTimeout(temporizadorTroca);
    temporizadorTroca = null;
  }

  // Decide quando passar para o próximo card
  function agendarTroca() {
    pararTroca();

    if (usuarioEmCima || document.hidden) return;

    const video = videoDoCartao(indiceAtual);

    // Se o vídeo está tocando, não agenda nada:
    // quem chama o próximo card é o evento "ended" do vídeo
    if (video && !video.ended && !video.paused) return;

    temporizadorTroca = setTimeout(irParaProximo, TEMPO_POR_IMAGEM);
  }

  // Roda uma vez sempre que um novo card chega ao centro
  function aoMudarDeCartao() {
    // pausa e volta ao início todos os vídeos que não estão no centro
    videos.forEach((video) => {
      if (video.closest('.carrossel-item') !== cartoes[indiceAtual]) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // se o card central tem vídeo, toca do começo
    const video = videoDoCartao(indiceAtual);
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => agendarTroca()); // se o navegador bloquear, segue por tempo
    }

    agendarTroca();
  }

  // Quando um vídeo termina, avança (se o usuário não estiver com o mouse em cima)
  videos.forEach((video) => {
    video.addEventListener('ended', () => {
      const eVideoDoCentro = video.closest('.carrossel-item') === cartoes[indiceAtual];
      if (eVideoDoCentro && !usuarioEmCima) {
        irParaProximo();
      }
    });
  });

  // ===== Rolagem =====
  lista.addEventListener('scroll', () => {
    destacarCartaoCentral();
    pararTroca(); // não troca de card no meio da rolagem

    // espera a rolagem parar para ativar o card central
    clearTimeout(temporizadorRolagem);
    temporizadorRolagem = setTimeout(() => {
      if (indiceAtual !== indiceAtivo) {
        indiceAtivo = indiceAtual;
        aoMudarDeCartao();
      } else {
        agendarTroca();
      }
    }, 150);
  }, { passive: true });

  window.addEventListener('resize', destacarCartaoCentral);

  // ===== Botões =====
  botaoDireita.addEventListener('click', irParaProximo);
  botaoEsquerda.addEventListener('click', irParaAnterior);

  // ===== Pausa quando o usuário interage =====
  carrossel.addEventListener('mouseenter', () => {
    usuarioEmCima = true;
    pararTroca();
  });

  carrossel.addEventListener('mouseleave', () => {
    usuarioEmCima = false;
    agendarTroca();
  });

  carrossel.addEventListener('touchstart', () => {
    usuarioEmCima = true;
    pararTroca();
  }, { passive: true });

  carrossel.addEventListener('touchend', () => {
    usuarioEmCima = false;
    agendarTroca();
  });

  // Pausa tudo se a aba do navegador ficar escondida
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pararTroca();
      videos.forEach((video) => video.pause());
    } else {
      aoMudarDeCartao();
    }
  });

  // ===== Início =====
  irParaCartao(0);
  destacarCartaoCentral();
  indiceAtivo = indiceAtual;
  aoMudarDeCartao();
});