# Plano: Pré-loader animado da Home (para implementação futura)

> **Status:** tentativa implementada e depois **revertida a pedido do usuário** em 11/09/2026 —
> a animação "não funcionou como previsto" na prática. Este arquivo documenta o plano original, o
> que foi corrigido durante a primeira tentativa, e o que ficou sem resposta — para quem for
> implementar de novo não repetir o mesmo caminho às cegas.
>
> **Antes de recomeçar:** converse com o usuário sobre o que especificamente não funcionou da
> vez passada (visual? tempo de duração? travou? não apareceu?). Os dois bugs abaixo foram
> corrigidos durante o teste, mas o usuário reportou o problema depois dessas correções — ou seja,
> pode haver um terceiro problema ainda não diagnosticado, ou pode ser algo de gosto/expectativa
> (velocidade, geometria da grade, etc.) e não um bug técnico.

## Contexto

O usuário criou, em outro projeto (`/Users/felipealmeida/Desktop/Coding/fia-hero-test/`), um
protótipo de alta fidelidade de uma animação de abertura (pré-loader) para a home: uma grade de
pontos verdes que se abre como uma "janela" e revela a foto de fundo real do hero por trás, com o
cabeçalho, o título e os botões entrando em seguida. O protótipo tinha duas técnicas concorrentes
(v1: o ponto cresce literalmente de tamanho; v2: o ponto funciona como uma janela de recorte
`clip-path`). O usuário escolheu:

1. Portar a **versão 2** (clip-path), por ser mais leve para o navegador.
2. Usar **GSAP via CDN** em vez de reescrever tudo em CSS/JS puro — é gratuita (desde a aquisição
   pela Webflow, inclusive os plugins que antes exigiam assinatura "Club GreenSock"), carrega por
   link direto, sem instalação.
3. Tocar a animação **só na primeira visita da sessão do navegador** (via `sessionStorage`), não
   em todo carregamento.

O protótipo não usa nenhum asset binário que precise ser copiado — foto, ícones e o motivo de
pontos decorativo já existem nativamente neste projeto (o `.dots`/`.dots--hero` já é CSS puro,
superior ao SVG do protótipo); só a **técnica** (JS/CSS) precisa ser portada. O hero atual
(`index.html`) já tem um carrossel de 3 fotos rodado por `script.js`, e o `.hero__media` (que
envolve esse carrossel) já é a `div` full-bleed perfeita para ser o alvo do `clip-path` — não
precisa duplicar nada.

## Arquitetura recomendada

Dois arquivos novos, isolados: **`preloader.css`** e **`preloader.js`**, carregados só pelo
`index.html` (não em `styles.css`/`script.js` compartilhados) — é uma feature só da home, com uma
dependência externa nova (GSAP) que mais nenhuma página usa.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/CustomEase.min.js"></script>
<script src="preloader.js"></script>
```
Confirmar a versão estável atual em jsdelivr.com/package/npm/gsap no momento da implementação —
pinar numa versão explícita **3.13.0 ou mais recente** (nunca `@latest`, nunca anterior a 3.13,
que é quando os plugins como `CustomEase`/`SplitText` passaram a ser gratuitos e resolvíveis via
CDN público).

### 1. `index.html`

**No `<head>`, depois do link para `styles.css`:** um link para `preloader.css` + um script inline
que decide, antes da página pintar qualquer coisa, se a animação deve tocar:

```html
<link rel="stylesheet" href="preloader.css">
<script>
(function () {
  var played  = sessionStorage.getItem('fiaPreloaderPlayed') === '1';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow  = window.innerWidth < 900; // grade de pontos não cabe bem em telas estreitas
  if (!played && !reduced && !narrow) {
    document.documentElement.classList.add('is-loading');
    window.setTimeout(function () {
      // Trava de segurança: se preloader.js nunca rodou (CDN bloqueado, erro),
      // a home não pode ficar travada escondida. 4s é folgado o bastante.
      if (!window.__fiaPreloaderStarted) {
        document.documentElement.classList.remove('is-loading');
        var el = document.getElementById('preloader');
        if (el) el.remove();
        document.dispatchEvent(new Event('fia:hero-ready'));
      }
    }, 4000);
  }
})();
</script>
```

**Primeiro filho do `<body>`, antes de `<header id="site-header">`:**
```html
<div class="preloader" id="preloader" aria-hidden="true">
  <div class="preloader__grid" id="preloader-grid"></div>
  <p class="preloader__percent" id="preloader-percent">0%</p>
</div>
```
Sem marcação por ponto aqui — os pontos são criados pelo `preloader.js`, calculados a partir do
tamanho real da tela. Nenhuma mudança na marcação do `<header>` ou do `<section class="hero">` —
todo elemento que a animação toca já existe: `.site-header .brand`, `.site-header .site-nav`,
`.site-header .site-header__cta`, `.hero__media` (alvo do clip-path), `.hero h1 span` (4 linhas
manuais), `.hero__aside`, `.hero__actions`, `.dots--hero`.

**Fim do `<body>`, depois do `<script src="script.js"></script>` existente:**
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/CustomEase.min.js"></script>
<script src="preloader.js"></script>
```
`script.js` precisa vir *antes* dessas tags (ver bug #2 abaixo sobre por que a ordem sozinha não
é suficiente).

### 2. `preloader.css` (novo arquivo)

```css
#preloader {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 30; /* acima do .site-header (20) */
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
html.is-loading #preloader { display: flex; }

.preloader__grid { position: absolute; }

.loader-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 0; /* convenção do site: nenhum canto arredondado */
  opacity: 0;
}

.preloader__percent {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  font-family: var(--font);
  font-weight: 400;
  font-size: 72px;
  line-height: 1.2;
  color: var(--white); /* não --deep: o fundo aqui é --ink (quase preto) */
  font-variant-numeric: tabular-nums;
}

html.is-loading,
html.is-loading body {
  overflow: hidden;
}

html.is-loading .hero {
  /* Garante que o hero cubra a tela inteira durante o loader, mesmo nos
     breakpoints onde ele normalmente é mais baixo (min-height 640/800px). */
  min-height: 100vh;
}

html.is-loading .hero__media { background-color: var(--lime); }
html.is-loading .hero__media img { opacity: 0; }

html.is-loading .site-header .brand,
html.is-loading .site-header .site-nav,
html.is-loading .site-header .site-header__cta {
  opacity: 0;
  transform: translateY(-10px);
}

html.is-loading .hero h1 span {
  opacity: 0;
  transform: translateY(20px);
}

html.is-loading .hero__aside,
html.is-loading .hero__actions,
html.is-loading .dots--hero {
  opacity: 0;
}
```

### 3. `preloader.js` (novo arquivo)

Script clássico (sem módulos), usa os globais `gsap`/`CustomEase`.

```js
(function () {
  window.__fiaPreloaderStarted = true;

  var html = document.documentElement;
  var preloader = document.getElementById('preloader');

  function finish() {
    html.classList.remove('is-loading');
    html.style.overflow = '';
    document.body.style.overflow = '';
    if (preloader) preloader.remove();
    document.dispatchEvent(new Event('fia:hero-ready'));
  }

  var shouldPlay = html.classList.contains('is-loading');
  if (!shouldPlay || typeof gsap === 'undefined' || typeof CustomEase === 'undefined') {
    finish();
    return;
  }

  gsap.registerPlugin(CustomEase);
  CustomEase.create('fiaRevealIn', '0.55, 0, 0.8, 0.45');
  CustomEase.create('fiaOutStrong', '0.23, 1, 0.32, 1');

  window.scrollTo(0, 0);

  var COLS = 15, ROWS = 7;
  var NOTCH_COLS = 3, NOTCH_ROWS = 2;
  var DOT_SIZE = 16;
  var CENTER_COL = Math.floor(COLS / 2);
  var CENTER_ROW = Math.floor(ROWS / 2);

  var PITCH = Math.max(40, Math.min(
    93,
    Math.floor((window.innerWidth * 0.8) / (COLS - 1)),
    Math.floor((window.innerHeight * 0.55) / (ROWS - 1))
  ));

  var GRID_W = (COLS - 1) * PITCH + DOT_SIZE;
  var GRID_H = (ROWS - 1) * PITCH + DOT_SIZE;

  var grid = document.getElementById('preloader-grid');
  var gridLeft = (window.innerWidth - GRID_W) / 2;
  var gridTop  = (window.innerHeight - GRID_H) / 2;
  grid.style.width = GRID_W + 'px';
  grid.style.height = GRID_H + 'px';
  grid.style.left = gridLeft + 'px';
  grid.style.top = gridTop + 'px';

  var LIME = [0xc2, 0xfa, 0x75];
  var AQUA = [0x02, 0xab, 0x95]; // var(--aqua) — substitui o teal avulso #08e7c7 do protótipo
  var THRESHOLD = 0.567336;

  function colorForColumn(col) {
    var t = col / (COLS - 1);
    if (t <= THRESHOLD) return 'rgb(' + LIME.join(',') + ')';
    var lt = (t - THRESHOLD) / (1 - THRESHOLD);
    var r = Math.round(LIME[0] + (AQUA[0] - LIME[0]) * lt);
    var g = Math.round(LIME[1] + (AQUA[1] - LIME[1]) * lt);
    var b = Math.round(LIME[2] + (AQUA[2] - LIME[2]) * lt);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  var dots = [];
  var centerDot = null;
  for (var row = 0; row < ROWS; row++) {
    for (var col = 0; col < COLS; col++) {
      if (row >= ROWS - NOTCH_ROWS && col < NOTCH_COLS) continue;
      var el = document.createElement('div');
      el.className = 'loader-dot';
      el.style.left = (col * PITCH) + 'px';
      el.style.top = (row * PITCH) + 'px';
      el.style.backgroundColor = colorForColumn(col);
      grid.appendChild(el);
      var dot = { el: el, col: col, row: row };
      dots.push(dot);
      if (col === CENTER_COL && row === CENTER_ROW) centerDot = dot;
    }
  }

  var percentEl = document.getElementById('preloader-percent');
  var heroMedia = document.querySelector('.hero__media');
  var heroImgs = heroMedia.querySelectorAll('img');

  var tl = gsap.timeline({ onComplete: function () {
    sessionStorage.setItem('fiaPreloaderPlayed', '1');
    finish();
  }});

  // Etapa 1 — grade aparece, coluna por coluna, da direita pra esquerda.
  var maxCol = COLS - 1;
  var colStaggerStep = 0.1, dotFadeDuration = 0.7;
  dots.forEach(function (d) {
    tl.to(d.el, { opacity: 1, duration: dotFadeDuration, ease: 'power2.out' }, (maxCol - d.col) * colStaggerStep);
  });
  var gridRevealEnd = maxCol * colStaggerStep + dotFadeDuration; // 2.10s

  var counter = { value: 0 };
  tl.to(counter, {
    value: 100,
    duration: gridRevealEnd + 0.1,
    ease: 'power3.out',
    onUpdate: function () { percentEl.textContent = Math.round(counter.value) + '%'; }
  }, 0);

  // Etapa 2 — o ponto central "se torna" a foto do hero.
  var centerDotStart = gridRevealEnd;
  var initialInsetX = (window.innerWidth  - DOT_SIZE) / 2;
  var initialInsetY = (window.innerHeight - DOT_SIZE) / 2;
  gsap.set(heroMedia, {
    clipPath: 'inset(' + initialInsetY + 'px ' + initialInsetX + 'px ' + initialInsetY + 'px ' + initialInsetX + 'px)'
  });

  // *** VER "BUG #1" ABAIXO — esta linha é obrigatória, não estava no protótipo original ***
  tl.set(centerDot.el, { opacity: 0 }, centerDotStart);

  var crossfadeStart = centerDotStart + 0.3;
  tl.to(heroImgs, { opacity: 1, duration: 0.45, ease: 'sine.inOut' }, crossfadeStart);

  // Etapa 3 — os pontos ao redor somem numa onda radial, convergindo pro centro.
  var exitStart = centerDotStart + 0.35;
  var EXIT_SPAN = 0.6, EXIT_FADE = 0.4;
  var outer = dots.filter(function (d) { return d !== centerDot; })
    .map(function (d) { return { el: d.el, dist: Math.hypot(d.col - CENTER_COL, d.row - CENTER_ROW) }; });
  var maxDist = outer.reduce(function (m, d) { return Math.max(m, d.dist); }, 0);
  outer.forEach(function (d) {
    var delay = exitStart + (1 - d.dist / maxDist) * EXIT_SPAN;
    tl.to(d.el, { opacity: 0, duration: EXIT_FADE, ease: 'power2.in' }, delay);
  });
  var counterDist = Math.hypot(1 - CENTER_COL, 5.5 - CENTER_ROW);
  tl.to(percentEl, { opacity: 0, duration: EXIT_FADE, ease: 'power2.in' },
    exitStart + (1 - counterDist / maxDist) * EXIT_SPAN);

  // Etapa 4 — a janela (clip-path) se abre sobre o hero real.
  var revealStart = exitStart + EXIT_SPAN * 0.9;
  var REVEAL_DURATION = 1.35;
  var revealEnd = revealStart + REVEAL_DURATION;
  var proxy = { t: 0 };
  tl.to(proxy, {
    t: 1,
    duration: REVEAL_DURATION,
    ease: 'fiaRevealIn',
    onUpdate: function () {
      var remaining = 1 - proxy.t;
      var ix = ((window.innerWidth  - DOT_SIZE) / 2) * remaining;
      var iy = ((window.innerHeight - DOT_SIZE) / 2) * remaining;
      heroMedia.style.clipPath = 'inset(' + iy + 'px ' + ix + 'px ' + iy + 'px ' + ix + 'px)';
    }
  }, revealStart);

  // Etapa 5 — cascata: cabeçalho, título, subtexto, pontos decorativos.
  var anchor = revealEnd + 0.25;

  var navStart = anchor - 0.2;
  [
    '.site-header .brand',
    '.site-header .site-nav, .site-header .site-header__cta'
  ].forEach(function (selector, i) {
    var start = navStart + i * 0.08;
    tl.to(selector, { opacity: 1, duration: 0.35, ease: 'power1.out' }, start);
    tl.to(selector, { y: 0, duration: 0.55, ease: 'fiaOutStrong', clearProps: 'transform' }, start);
  });

  var headlineStart = anchor - 0.05;
  tl.to('.hero h1 span', {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'fiaOutStrong', clearProps: 'transform'
  }, headlineStart);

  tl.to('.hero__aside', { opacity: 1, duration: 0.65, ease: 'power2.out' }, anchor + 0.1);
  tl.to('.hero__actions', { opacity: 1, duration: 0.5, ease: 'power2.out' }, anchor + 0.1);
  tl.to('.dots--hero', { opacity: 1, duration: 0.6, ease: 'power2.out' }, anchor + 0.25);

  tl.set(heroMedia, { clearProps: 'clipPath' }, revealEnd);
  tl.set(heroImgs, { clearProps: 'opacity' }, revealEnd);
})();
```

### 4. `script.js` — atrasar o carrossel do hero até o handoff

O carrossel do hero (hoje uma seção dentro do `DOMContentLoaded` que começa sozinho) precisa virar
uma função nomeada, chamada só quando `fia:hero-ready` disparar:

```js
function initHeroCarousel() {
  const heroMedia = document.querySelector('.hero__media');
  if (!heroMedia) return;
  const slides = Array.from(heroMedia.querySelectorAll('.hero__slide'));
  if (slides.length <= 1) return;
  // ...corpo idêntico ao atual (WIPE_MS/HOLD_MS/applyLayers/scheduleWipe/duplo-rAF)...
}

// *** VER "BUG #2" ABAIXO — este addEventListener precisa ficar FORA do
// DOMContentLoaded, executado assim que script.js carrega. ***
document.addEventListener('fia:hero-ready', initHeroCarousel, { once: true });
```

### 5. `SITE.md`

Adicionar (não reescrever) uma entrada datada no início da seção "Histórico de mudanças" (as
entradas mais recentes ficam no topo), no mesmo estilo das existentes, explicando em linguagem
simples: aparece só na primeira visita da sessão, pula em tela estreita/reduzir-movimento, tem
trava de segurança contra CDN quebrado.

---

## Os dois bugs encontrados e corrigidos na primeira tentativa

Ambos foram corrigidos no código acima (já incorporados), mas registro aqui o *porquê*, porque
são fáceis de reintroduzir sem essa explicação.

### Bug #1 — o ponto central da grade nunca desaparecia

O `#preloader` (a grade de pontos) tem `z-index: 30`, acima de tudo no `.hero`. O protótipo original
tinha um elemento de foto **separado**, posicionado por cima do ponto central — nele, o "ponto"
nunca precisava sumir porque a foto já cobria ele visualmente. Aqui, em vez de duplicar elementos,
o `clip-path` é aplicado direto no `.hero__media` **já existente**, que fica **atrás** da camada do
pré-loader (z-index mais baixo). Resultado: o ponto central da grade continuava visível, "grudado"
por cima da foto crescendo, para sempre — porque nada nunca escondia ele.

**Correção:** esconder esse ponto central explicitamente (`tl.set(centerDot.el, {opacity:0},
centerDotStart)`) no exato instante em que o recorte do clip-path é fixado — nesse momento o fundo
do `.hero__media` ainda é a cor lima (`html.is-loading .hero__media { background-color: var(--lime)
}`), igual ao ponto, então a troca é imperceptível.

### Bug #2 — o carrossel de fotos do hero não iniciava depois do pré-loader

`preloader.js` dispara `document.dispatchEvent(new Event('fia:hero-ready'))` para avisar
`script.js` que pode iniciar o carrossel. O registro desse listener (`document.addEventListener
('fia:hero-ready', initHeroCarousel, {once:true})`) estava **dentro** do callback do
`DOMContentLoaded` de `script.js`. Quando a animação é **pulada** (sessão já viu, reduzir-movimento,
tela estreita), `preloader.js` dispara o evento **de forma síncrona, durante o carregamento inicial
do HTML** — ou seja, **antes** do evento `DOMContentLoaded` do próprio navegador acontecer. Como
`script.js` só registra o listener depois que o `DOMContentLoaded` dispara, o evento
`fia:hero-ready` é emitido para o vazio (nenhum listener existe ainda) e o carrossel nunca inicia.

Verificado na prática: em tela estreita (celular), a home carregava com o carrossel de fundo
completamente parado (sem nunca aplicar as classes `hero__slide--current`/`--next`), enquanto tudo
o resto (cabeçalho, título, botões) aparecia normalmente.

**Correção:** mover o `document.addEventListener('fia:hero-ready', initHeroCarousel, {once:true})`
para **fora** do `DOMContentLoaded`, executado assim que `script.js` roda (ele só registra um
listener, não toca a página, então é seguro rodar imediatamente — os elementos do hero já existem
no HTML nesse ponto, já que `script.js` fica no fim do `<body>`). Isso garante que o listener já
existe antes de qualquer possível disparo do evento, seja no caminho "pular" (síncrono, cedo) ou no
caminho completo (~5,5s depois via `tl.onComplete`).

Confirmado por teste manual: depois da correção, forçando o caminho "pular" (viewport < 900px), o
carrossel iniciou corretamente (`hero__slide--current`/`--next` aplicados) e nenhum `#preloader`
ficou para trás no DOM.

---

## O que NÃO foi possível confirmar (e por quê)

A ferramenta automatizada de screenshot deste ambiente (headless) parece **suspender ou throttlar
muito pesadamente o `requestAnimationFrame`** quando a aba não está em primeiro plano ativo — o que
é exatamente como o GSAP funciona por baixo dos panos. Na prática, isso significa que, testando por
aqui, a animação completa (~5,5s) parecia "congelada" por dezenas de segundos reais e só avançava
aos trancos quando alguma interação (clique) acontecia. Isso é uma limitação do ambiente de teste
automatizado, não necessariamente do código — mas **também significa que a sequência completa
nunca foi validada rodando em velocidade real, do início ao fim, num navegador de verdade**.

**Para a próxima tentativa:** depois de implementar, testar a sequência completa abrindo a home
numa aba de navegador de verdade (não só pela pré-visualização automatizada), com o DevTools aberto
para observar os ~5,5 segundos em tempo real e comparar a sensação de velocidade/timing com o
protótipo original em `/Users/felipealmeida/Desktop/Coding/fia-hero-test/`.

## Riscos / decisões que ainda precisam de validação ao vivo

- **Geometria da grade (espaçamento/colunas/linhas)** é um ponto de partida, não um valor
  calibrado — precisa de um olhar ao vivo no navegador para ajustar a densidade visual.
- **O limite de 900px para pular em telas estreitas** é uma escolha pragmática, não deduzida de
  nada específico.
- **Título: 4 linhas manuais existentes**, em vez de dividir por palavra (SplitText) — mais
  simples, mas entrada visualmente "mais em blocos" que o protótipo original.
- **Confirmar a versão exata do GSAP disponível no CDN** no momento da implementação.
- **Scroll lock em iOS Safari**: `overflow:hidden` nem sempre impede totalmente o "rubber-band
  scroll" nesse navegador.

## Verificação (quando reimplementar)

1. Primeira visita, sessão nova — animação completa toca do início ao fim, sem "pulos" de layout.
2. Recarregar a mesma aba — pré-loader pulado, hero e carrossel prontos na hora.
3. `prefers-reduced-motion` ativado — pré-loader nunca aparece.
4. Tela abaixo de 900px — pré-loader pulado, home renderiza normal, **carrossel do hero inicia**
   (checar isso especificamente — foi o bug #2 acima).
5. Depois da animação (ou no caminho "pular"), confirmar que o carrossel de fotos do hero segue
   trocando de imagem no tempo certo, com zoom e wipe iguais a antes dessa mudança.
6. Bloquear o CDN do GSAP de propósito — confirmar que a trava de segurança de 4s evita tela
   travada.
7. Testar a sequência completa **num navegador de verdade, em primeiro plano**, não só pela
   pré-visualização automatizada (ver seção acima).
