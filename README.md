# Contexto do projeto — LYTOS

**Projeto:** team-project-front  
**Nome institucional:** Laboratory of Yield, Technology, Operations & Systems  
**Situação:** em desenvolvimento, trabalho acadêmico de Front-End.  
**Data da análise:** 13/10/2026.

## 1. Fontes e critérios da documentação

Este documento descreve a versão recebida no arquivo `team-project-front(1).zip`. Foram lidos integralmente `index.html`, os dois arquivos CSS, os dois arquivos JavaScript e `README.md`; também foi inventariado o conjunto de recursos locais. O documento `Divisão_Trabalho.pdf` foi utilizado como evidência de planejamento e distribuição de responsabilidades.

As informações são distinguidas da seguinte maneira:

- **Implementado:** estrutura ou comportamento identificado diretamente no código atual.
- **Declarado ou planejado:** informação presente no README, no PDF ou na descrição enviada pela equipe, sem implementação correspondente comprovada.
- **Não determinado:** informação que os materiais disponíveis não permitem confirmar.

A análise é estática: os comportamentos JavaScript descritos são os definidos pelo código, sem teste de execução no navegador. Nenhum arquivo do site foi alterado. O protótipo externo do Figma não foi inspecionado; não se afirma correspondência visual com ele.

## 2. Finalidade e contexto

Segundo o README e a descrição da equipe, o LYTOS é um laboratório fictício de pesquisa e desenvolvimento em robótica, inteligência artificial e automação de alta performance. O site é um trabalho em grupo da disciplina de Front-End.

O código sustenta uma apresentação inicial de robótica: título “Robótica inteligente para o Futuro”, descrição de sistemas autônomos, imagem de fundo, indicadores e galeria de demonstrações. O título da aba ainda é “Site de Robótica”. A expansão do nome LYTOS e o contexto acadêmico estão documentados no README, não no texto principal da página.

O projeto é exclusivamente front-end. Não há backend, banco de dados ou autenticação real implementados nos arquivos analisados.

### Equipe

- Lucas Fares Corrêa Auad Pereira.
- Vanessa Thamiris Machado de Oliveira.
- Rebeca Midena de Matos.

## 3. Estado atual e escopo previsto

Embora a equipe tenha descrito o estágio como “apenas o hero inicial”, o pacote entregue contém também cabeçalho, estatísticas e carrossel. A existência dessas partes não significa que a Home ou o projeto estejam concluídos.

| Parte | Evidência atual | Situação |
| --- | --- | --- |
| Cabeçalho e navegação | `header`, `nav`, logo, links e botão mobile | Implementado |
| Início/hero | `section#inicio`, textos, banner e dois links | Implementado |
| Indicadores | Quatro valores fixos em `.secao-estatisticas` | Implementado como conteúdo estático |
| Galeria de produtos | `section#produtos`, três imagens e três vídeos | Implementada como galeria; não é um catálogo completo |
| Carrossel | Navegação, destaque central, temporização e controle de vídeos em `hero.js` | Implementado no código |
| Tecnologia | Link para `#tecnologia`, sem elemento com esse ID | Destino ainda ausente |
| Serviços | Previsto no PDF e mencionado no README | Sem seção atual |
| Sobre | Links para `#sobre`, sem seção correspondente | Previsto |
| Contato | Links para `#contato`, sem seção correspondente | Previsto |
| Login/conteúdo exclusivo | Mencionado no README; “Entrar” aponta para `#contato` | Sem interface de login ou autenticação atual |
| Rodapé | Citado na responsabilidade de estilo global no PDF | Ausente no HTML atual |

O README apresenta um escopo mais amplo que o código. Suas menções a contato e login não comprovam que essas funcionalidades já existem.

## 4. Inventário e estrutura real

A estrutura de aplicação encontrada é:

```text
team-project-front/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── style.css
    │   └── hero.css
    ├── js/
    │   ├── main.js
    │   └── hero.js
    └── img/
        ├── banner-robo.jpg
        ├── carousel/
        │   ├── img1.jpg
        │   ├── img2.jpg
        │   ├── img3.jpg
        │   ├── video1.mp4
        │   ├── video2.mp4
        │   └── video3.mp4
        └── icons/
            ├── folha-logo.png
            ├── icone-folha.svg
            ├── icone-nome.svg
            ├── logo.png
            ├── logo.svg
            └── nome-logo.png
```

Há uma página HTML, dois estilos CSS, dois scripts JavaScript, um README, quatro imagens JPG, quatro PNG, três SVG e três vídeos MP4. Não foram encontrados arquivos JSON, manifesto de dependências, arquivos locais de fontes ou configuração de build na estrutura da aplicação. Os recursos SVG não foram analisados como implementação de interface; apenas inventariados.

O ZIP também inclui metadados de versionamento, que não integram os recursos carregados pela página. Seu conteúdo histórico não foi usado para atribuir funcionalidades à versão atual.

## 5. Responsabilidade dos arquivos

| Arquivo | Responsabilidade e relações |
| --- | --- |
| `index.html` | Entrada da aplicação; define cabeçalho, hero, estatísticas, galeria e referências aos estilos e scripts |
| `assets/css/style.css` | Reset, variáveis de cores, fontes externas, fundo global, navegação, menu mobile e foco visível |
| `assets/css/hero.css` | Hero, banner, botões, estatísticas, galeria, cartões e responsividade; inclui seletores sem uso no HTML atual |
| `assets/js/main.js` | Alterna o menu mobile, atualiza atributos acessíveis e fecha o menu após seleção de link |
| `assets/js/hero.js` | Gerencia o carrossel, cartão central, avanço automático, vídeos e interação do usuário |
| `assets/img/banner-robo.jpg` | Fundo de `.inicio-imagem`, referenciado por caminho relativo no CSS |
| `assets/img/carousel/*` | Conteúdo visual dos seis cartões, referenciado diretamente no HTML |
| `assets/img/icons/logo.png` | Logo usada no cabeçalho |
| Demais recursos de `icons/` | Disponíveis no pacote; sem referência nos HTML, CSS e JS analisados |
| `README.md` | Contexto institucional, tecnologias declaradas, integrantes e link do protótipo |

Apesar do nome `hero.js`, seu conteúdo controla a galeria. `hero.css` também ultrapassa a responsabilidade exclusiva do hero. Essa relação deve ser conhecida antes de manter ou separar as seções.

## 6. Estrutura HTML e navegação

`index.html` declara `lang="pt-BR"`, UTF-8 e viewport adaptável. Carrega Font Awesome, depois `style.css` e `hero.css`. Os scripts `main.js` e `hero.js` utilizam `defer`.

### Cabeçalho

O `header` contém `.cabecalho-conteudo` e `nav` com rótulo “Navegação principal”. A marca é um link para `#inicio` com imagem local. `.links-navegacao`, também identificada pelo ID `links-navegacao`, agrupa os links de seções.

`.botao-menu` é um botão com `aria-controls`, `aria-expanded` e rótulo acessível atualizado pelo JavaScript. `.botao-entrar` é um link comum para `#contato`; não envia credenciais nem abre login.

### Hero e indicadores

`section#inicio.inicio` contém uma imagem decorativa por CSS, marcada com `aria-hidden="true"`, o título principal em três spans, descrição e links de ação. “Ver Produtos” aponta para a galeria existente; “Sobre a Empresa” aponta para destino ainda ausente.

As estatísticas estão em uma **seção separada do hero**, com rótulo “Nossos números”. Os valores são literais no HTML: 99.97% de disponibilidade, menos de 2ms de latência, 340+ projetos e 28 países. São conteúdo demonstrativo de um laboratório fictício; não provêm de medições, consultas ou cálculos identificados.

### Galeria

`section#produtos.secao-galeria` tem título e descrição, `.carrossel`, `.carrossel-lista` e seis `.carrossel-cartao`. Os três vídeos usam `muted`, `playsinline` e `preload="metadata"`; não há atributo `controls`. Dois botões com ícones acionam a navegação anterior/próxima.

Não há formulários, campos de entrada, tabelas, telas de cadastro ou login. O HTML abre `main`, mas não contém fechamento explícito `</main>` antes do fim de `body`; o documento registra esse ponto sem corrigir o arquivo.

### Destinos de links

| Fragmento | Elemento existente |
| --- | --- |
| `#inicio` | Hero |
| `#produtos` | Galeria |
| `#tecnologia` | Ausente |
| `#sobre` | Ausente |
| `#contato` | Ausente |

Não há páginas secundárias ou roteador. A navegação disponível usa fragmentos da mesma página.

## 7. Organização visual e CSS

### Estilos globais

`style.css` define as variáveis `--fundo` (#041F2A), `--fundo-escuro` (#04141C), `--verde` (#00C2A8), `--verde-claro` (#00E5C8), `--texto` (#E6FFFB) e `--texto-suave` (#A4BCBE). Um reset remove margens e paddings e aplica `box-sizing: border-box`.

O body usa Inter, fundo escuro e grade desenhada com gradientes de 40px. O HTML ativa rolagem suave e compensação de 85px para links internos. O cabeçalho é `sticky`, fica no topo e usa Flexbox para distribuir marca, links e botões. Links e botões têm estados hover; `:focus-visible` oferece contorno para foco de teclado.

### Hero e demais blocos

`hero.css` usa Flexbox no hero, com altura mínima de 650px. A fotografia ocupa inicialmente 57% da largura, posicionada à direita; uma máscara em gradiente mistura a imagem ao fundo. Um pseudoelemento desenha outra grade, de 60px, sem interceptar cliques.

O conteúdo textual fica acima do fundo com `z-index: 1`. O título usa Space Grotesk, `clamp()` para dimensionamento e spans em bloco para as três linhas. Os botões têm formato arredondado e podem quebrar linha.

As estatísticas usam Grid com quatro colunas. O carrossel usa uma lista Flexbox com rolagem horizontal e `scroll-snap`; o padding lateral permite centralizar cartões das extremidades. Cartões têm largura-base de 280px, mídia com 370px de altura e `object-fit: cover`. A classe `.foco` aumenta opacidade e escala e acrescenta brilho.

`.secao-informacoes`, `.etiqueta` e `.grade-informacoes` têm estilos, mas não possuem elementos correspondentes no HTML atual. Isso não comprova a existência de uma seção adicional.

### Responsividade

| Arquivo e limite | Efeito definido |
| --- | --- |
| `style.css`, até 950px | Mostra botão mobile, oculta links até aplicação de `.aberto` e reorganiza o nav |
| `style.css`, até 420px | Reduz logo e botão Entrar |
| `hero.css`, até 1050px | Ajusta altura do hero, largura/opacidade da imagem e largura do texto |
| `hero.css`, até 800px | Imagem ocupa toda a largura com menor opacidade; indicadores passam a duas colunas |
| `hero.css`, até 480px | Reduz título; oculta quebras de linha da descrição; botões ocupam a largura; cartões passam a 240px e mídia a 320px |

`prefers-reduced-motion: reduce` desativa a rolagem suave do HTML e reduz durações CSS. O JavaScript ainda solicita `behavior: 'smooth'` e mantém temporização automática; não verifica essa preferência.

## 8. JavaScript — menu

`main.js` seleciona `.botao-menu` e `.links-navegacao` em constantes. Ao clicar no botão, alterna `.aberto`, usa o resultado booleano para `aria-expanded` e troca o rótulo entre “Abrir menu” e “Fechar menu”.

Cada link de `.links-navegacao` recebe um listener de clique que remove `.aberto` e restaura os atributos do botão. Esse fechamento não verifica se o destino da âncora existe. Não há armazenamento do estado entre carregamentos.

O arquivo pressupõe a existência dos dois elementos; não há verificações de nulidade. A rolagem suave é configurada no CSS, não por uma função desse script.

## 9. JavaScript — carrossel

`hero.js` inicia no evento `DOMContentLoaded`, seleciona lista, cartões, vídeos, contêiner e botões. Mantém estado local no fechamento da função:

- `TEMPO_POR_IMAGEM = 3000`: intervalo de avanço para imagens e fallback de vídeo.
- `indiceAtual`: cartão mais próximo do centro.
- `indiceAtivo = -1`: último cartão cujo conteúdo foi ativado.
- `temporizadorTroca` e `temporizadorRolagem`: IDs dos timeouts.
- `usuarioEmCima`: sinaliza mouse sobre o carrossel ou toque em andamento.

### Funções principais

| Função | Entrada, processamento e resultado |
| --- | --- |
| `videoDoCartao(indice)` | Recebe índice e retorna o vídeo do cartão, ou `null` |
| `descobrirIndiceCentral()` | Compara o centro visível da lista com o centro de cada cartão via `getBoundingClientRect()`; retorna o índice de menor distância |
| `destacarCartaoCentral()` | Atualiza `indiceAtual` e alterna `.foco` para que apenas o cartão central seja destacado |
| `irParaCartao(indice)` | Normaliza índice por módulo para navegação circular; calcula offset e chama `lista.scrollTo()` |
| `irParaProximo()` / `irParaAnterior()` | Solicitam o cartão seguinte/anterior em relação a `indiceAtual` |
| `pararTroca()` | Cancela timeout de avanço e zera sua referência |
| `agendarTroca()` | Cancela agendamento anterior; não agenda se há interação ou aba oculta; espera vídeo em reprodução; nos demais casos agenda avanço em 3s |
| `aoMudarDeCartao()` | Pausa e reinicia vídeos fora do centro; reinicia e tenta reproduzir o vídeo central; agenda avanço quando aplicável |

### Eventos e condições

- `scroll`: recalcula destaque, cancela avanço e espera 150ms sem novo scroll para ativar o cartão ou reagendar.
- `click` nas setas: navega circularmente.
- `ended` de vídeo: avança se for o vídeo central e não houver interação indicada por `usuarioEmCima`.
- `mouseenter` e `touchstart`: interrompem a troca automática, mas não pausam diretamente o vídeo central.
- `mouseleave` e `touchend`: permitem reagendar a troca.
- `resize`: recalcula o destaque central; não chama diretamente a rotina de ativação de vídeo.
- `visibilitychange`: com aba oculta cancela troca e pausa vídeos; ao voltar reinicia a rotina do cartão atual.

Na inicialização, o script solicita o cartão zero, calcula o centro, grava o índice ativo e ativa o conteúdo. Se `video.play()` rejeitar a reprodução, o `catch` solicita novo agendamento, sem exibir mensagem de erro.

As funções dependem de cartões e controles presentes no DOM. Não há tratamento para galeria vazia ou seletores ausentes. O autoplay depende também das regras e do suporte de mídia do navegador.

## 10. Fluxo de uso e de dados

O usuário abre `index.html`, vê o cabeçalho e o hero e pode seguir o link Produtos para a galeria. Em telas menores, abre e fecha a navegação pelo botão. Na galeria, pode rolar a lista ou usar as setas; o script destaca o cartão central e controla o avanço e a reprodução.

Os dados do site são textos e caminhos de mídia fixos no HTML/CSS. O JavaScript lê o DOM, as dimensões visuais e os eventos do navegador; guarda índices e temporizadores apenas em memória; altera classes, atributos acessíveis, posição de rolagem e estado dos vídeos.

Não há entrada de dados de negócio, envio de formulário ou resultado calculado para o usuário. A única comunicação externa identificada é a carga de estilos, ícones e fontes. As mídias são requisitadas pelos próprios elementos HTML/CSS, sem chamadas de API pelo JavaScript.

## 11. Tecnologias e dependências

| Tecnologia | Evidência e utilização |
| --- | --- |
| HTML5 | Página, navegação, semântica e elementos de vídeo |
| CSS | Layout, Grid, Flexbox, gradientes, máscaras, media queries e estados visuais |
| JavaScript sem framework identificado | Eventos, DOM, temporizadores e reprodução de mídia |
| Font Awesome 6.5.2 | CSS do CDN cdnjs, referenciado no head; ícones de menu e setas |
| Google Fonts | Import CSS de Inter 400–700 e Space Grotesk 600/700/800 |
| Recursos locais | JPG, PNG, SVG e MP4 inventariados |

Não há evidência de React, TypeScript, Babel, npm, bundler ou bibliotecas JavaScript externas nesta versão. Figma é declarado como ferramenta de prototipação no README, não como dependência de execução.

As fontes e os ícones externos exigem acesso de rede para carregar. Não há instrução de instalação, build ou servidor no material analisado; a aplicação tem como ponto de entrada o HTML estático. Configuração efetiva de hospedagem não foi determinada.

## 12. Armazenamento e persistência

Não foram identificados usos de `localStorage`, `sessionStorage`, cookies por JavaScript, IndexedDB, arquivos JSON de dados, banco de dados ou chamadas HTTP de negócio. Índices, timers e estado do menu são temporários e reconstruídos quando a página é carregada.

Essa observação diz respeito ao código fornecido; não pretende descrever caches ou cookies eventualmente associados a serviços externos.

## 13. Arquitetura e relações entre componentes

A arquitetura identificada é uma página estática HTML + CSS + JavaScript executada no navegador. Não há camadas de API, backend ou banco de dados demonstradas.

| Origem | Dependência | Relação |
| --- | --- | --- |
| `index.html` | `style.css` | Aparência global e menu |
| `index.html` | `hero.css` | Hero, estatísticas e galeria |
| `index.html` | `main.js` | Interação do menu |
| `index.html` | `hero.js` | Interação da galeria |
| `hero.css` | Variáveis de `style.css` | Cores e estilos compartilhados |
| `hero.css` | `banner-robo.jpg` | Fundo visual do hero |
| `index.html` | Logo e seis mídias | Conteúdo local exibido |
| `index.html` | Font Awesome externo | Ícones |
| `style.css` | Google Fonts externo | Tipografia |
| `main.js` | Classes do HTML e `.aberto` no CSS | Estado de abertura do menu |
| `hero.js` | Classes da galeria e `.foco` no CSS | Seleção visual e comportamento do carrossel |

Os dois scripts não importam nem chamam funções um do outro. Sua integração ocorre pela página e pelos elementos que cada um controla.

## 14. Regras e funcionalidades comprovadas

Não há regras de negócio de cadastro, autenticação, compra, permissões ou envio de contato. As regras implementadas são de apresentação e interação:

1. O menu mobile aparece quando `.aberto` é aplicada e fecha ao escolher um link da navegação.
2. Apenas o cartão mais próximo do centro recebe `.foco`.
3. Navegação por setas retorna ao início após o último cartão e ao fim antes do primeiro.
4. Imagens usam avanço automático de 3s quando não há interação e a aba está visível.
5. Vídeo central em reprodução aguarda o evento de término para avançar.
6. Vídeos fora do centro são pausados e retornam ao início na ativação de outro cartão.
7. Interação por mouse/toque interrompe a troca automática, sem necessariamente interromper a reprodução.
8. Aba oculta cancela temporização e pausa vídeos; retorno reativa o conteúdo atual.

As funcionalidades estão localizadas nos arquivos descritos nas seções 8 e 9. A galeria não possui filtro, busca, detalhes de produto, cadastro, edição ou envio de dados identificados.

## 15. Divisão de trabalho e diferenças em relação ao planejamento

O PDF é uma fonte de planejamento, não um inventário do código concluído.

| Integrante | Responsabilidades descritas no PDF |
| --- | --- |
| Vanessa | Estrutura principal, fundo, carrossel, header/nav, hero, consistência visual e responsividade da própria parte |
| Lucas | Produtos, serviços, cards, imagens, descrições, botões, interações e responsividade da própria parte |
| Rebeca | Sobre, contato, formulário, validações, interações e responsividade da própria parte |

A divisão prevê integração no mesmo `index.html`, estilos/scripts separados por seção e branches individuais com Pull Requests. Não foi verificado se esse processo já está sendo seguido.

### Caminhos e IDs previstos versus encontrados

| Planejamento no PDF | Versão recebida |
| --- | --- |
| `css/formata.css` | `assets/css/style.css` realiza reset, configurações globais e cabeçalho; rodapé ausente |
| `css/hero.css`, `#hero` | `assets/css/hero.css`, `#inicio` |
| `js/main.js` com funções gerais e scroll suave | `assets/js/main.js` controla o menu; scroll suave está no CSS |
| `css/products.css`, `js/products.js` | Ausentes; galeria está em `index.html`, `hero.css` e `hero.js` |
| `css/services.css`, `#servicos` | Ausentes |
| `css/about.css`, `#sobre` | Ausentes |
| `css/contact.css`, `js/contact.js`, `#contato` | Ausentes |
| Diretórios `css/` e `js/` na raiz | Diretórios reais dentro de `assets/` |

Não é possível atribuir autoria de cada linha pelo PDF. Ele distribui tarefas futuras; o código mostra somente a organização atual.

## 16. Pontos para continuidade e manutenção

- `index.html` é o arquivo compartilhado de integração. Novas seções precisam respeitar os IDs escolhidos e as referências de navegação.
- As âncoras para Tecnologia, Sobre e Contato ainda não têm destinos; “Entrar” também usa esse destino ausente.
- A seção Produtos atual é uma galeria. A implementação planejada de produtos e serviços deve considerar essa estrutura já existente.
- Alterações em classes de menu exigem compatibilidade entre HTML, `style.css` e `main.js`.
- Alterações nas classes da galeria exigem compatibilidade entre HTML, `hero.css` e `hero.js`.
- `hero.js` depende da existência do carrossel e dos controles; reutilizá-lo em outra página sem esses elementos exige considerar essa dependência.
- Caminhos de imagem no CSS são relativos ao arquivo CSS; caminhos de mídia no HTML são relativos à página.
- Preservar rótulos acessíveis, estados de `aria-expanded`, foco visível e descrição das mídias ao evoluir a interface.
- As estatísticas são fixas e demonstrativas; não devem ser documentadas como dados reais ou medidos.
- Não há controles nativos visíveis nos vídeos; sua reprodução é gerenciada pelo script.
- O pacote inclui três MP4 com aproximadamente 20,8 MB, 37,4 MB e 65,2 MB, respectivamente. São recursos relevantes para carga e reprodução; `preload="metadata"` não constitui garantia de ausência de tráfego posterior.
- Verificar a situação do fechamento de `main` ao manter o HTML.
- A preferência por redução de movimento é tratada parcialmente em CSS; o autoplay e a rolagem JavaScript têm comportamento próprio.

Esses registros descrevem dependências e limites encontrados. Não foram feitas correções nem decisões de reorganização.

## 17. Limitações da análise

Não foi possível determinar ou confirmar:

- correspondência visual entre a implementação e o protótipo do Figma;
- comportamento efetivo em diferentes navegadores, dispositivos e tamanhos de tela;
- conteúdo audiovisual integral, origem e licença de cada recurso;
- ambiente e configuração de hospedagem;
- requisitos completos e critérios de avaliação da disciplina;
- design e regras das futuras seções de serviços, Sobre e Contato;
- campos, validações e fluxo da futura interface de login;
- implementação futura de conteúdo exclusivo;
- cumprimento do processo de branches e Pull Requests;
- fundamento dos números institucionais fictícios.

A ausência de implementações no pacote não prova que não exista trabalho separado de algum integrante. Este documento descreve exclusivamente a versão recebida.

## 18. Verificação final da documentação

| Critério do prompt | Resultado |
| --- | --- |
| Estrutura e arquivos relevantes identificados | Sim, para a aplicação atual; histórico de versionamento fora do escopo funcional |
| Finalidade baseada em evidências | Sim, com distinção entre README e código |
| HTML, CSS e JavaScript analisados | Sim, integralmente nos cinco arquivos de implementação |
| Funcionalidades verificadas | Sim por leitura de código; sem execução no navegador |
| Relações entre arquivos e fluxo de dados descritos | Sim |
| Tecnologias, persistência e regras descritas | Sim, limitadas às evidências |
| Telas e arquitetura reais documentadas | Sim, uma página estática com seções |
| Planejamento separado da implementação | Sim |
| Limitações e informações não determinadas registradas | Sim |
| Código mantido sem alterações | Sim |

## 19. Visão consolidada

O LYTOS é um projeto acadêmico de site institucional fictício em desenvolvimento. A versão analisada apresenta uma página inicial com cabeçalho responsivo, hero de robótica, indicadores estáticos e galeria de três imagens e três vídeos. HTML organiza o conteúdo, CSS define a aparência e JavaScript controla menu e carrossel. Não há persistência, backend, formulário de contato ou autenticação implementados.

A continuidade depende principalmente de integrar as seções previstas ao `index.html`, manter os vínculos de classes e caminhos utilizados pelos estilos/scripts e conciliar a estrutura atual com a divisão de trabalho da equipe. O escopo declarado no README deve ser entendido à luz desse estágio parcial.

🔗 **Protótipo no Figma:** [team-project-front](https://www.figma.com/proto/6BGdLDPYBNgc6SP4Z2R1MJ/team-project-front?node-id=24-32&t=E9TgJJanpYyXoamk-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

## 👥 Equipe

Projeto desenvolvido em grupo por alunos da faculdade:

- [Lucas Fares Corrêa Auad Pereira](https://www.linkedin.com/in/lucas-fares-c/?isSelfProfile=false)
- [Vanessa Thamiris Machado de Oliveira](https://www.linkedin.com/in/vanessa-thamiris-machado-de-oliveira/?isSelfProfile=true)
- [Rebeca Midena de Matos](https://www.linkedin.com/in/rebeca-midena/?isSelfProfile=false)
