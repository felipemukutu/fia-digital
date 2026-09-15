// Interatividade do site FIA digital
// 1) menu do celular  2) perguntas frequentes  3) carrossel de depoimentos

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 0a. Rolagem suave (Lenis) ----------
     Deixa a rolagem com um deslize curto em vez do "pulo" seco do mouse.
     Para mudar a intensidade, mexa no `duration` abaixo: menor = mais
     direto, maior = mais deslizante. No celular fica de fora de propósito
     (o padrão do Lenis é não tocar no toque): a rolagem nativa do sistema
     já é boa e qualquer coisa por cima dela só atrapalha.
     Quem quiser desligar: basta tirar o <script src="vendor/lenis.min.js">
     das páginas — o resto do site continua funcionando igual. */
  const lenis =
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof window.Lenis !== 'undefined'
      ? new window.Lenis({
          duration: 1.05,
          easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5,
          // faz os links âncora (#faq, #formulario, #fale-conosco) deslizarem
          anchors: true,
          autoRaf: true,
          // carrosséis que rolam de lado continuam com a rolagem nativa deles
          prevent: (node) =>
            node.hasAttribute('data-drag-scroll') || node.hasAttribute('data-lenis-prevent'),
        })
      : null;

  // Usados sempre que a página precisa ficar parada (animação de abertura da
  // Home, vídeo em tela cheia). Seguros de chamar mesmo sem o Lenis ligado.
  const travarRolagem = () => { if (lenis) lenis.stop(); };
  const soltarRolagem = () => { if (lenis) lenis.start(); };

  /* ---------- 0. Hero entrance — timeline GSAP (orquestração completa) ---------- */
  // Home (.hero) + Quem Somos (.qs-hero) + Cursos (.cursos-hero) + Contato (.contato-hero)
  // Mesma curva (--ease-out → power3.out), só transform/opacity/--reveal, por último dots→dash
  let heroTimeline = null;
  let onHeroEntranceComplete = () => {};

  function runHeroEntrance(opts) {
  const skipMediaReveal = !!(opts && opts.skipMediaReveal);
  const heroRoot =
    document.querySelector('.hero') ||
    document.querySelector('.qs-hero') ||
    document.querySelector('.cursos-hero') ||
    document.querySelector('.contato-hero');

  if (heroRoot) {
    const prefersReducedHero = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.SplitText !== 'undefined';
    const headerEl = document.getElementById('site-header');
    const h1 = heroRoot.querySelector('h1');
    // .js-preloader-active normalmente já saiu junto com o fim do preloader;
    // tirar de novo aqui é só garantia (por exemplo se a entrada da hero
    // rodar por um caminho que não passou pelo preloader).
    const cleanupPreload = () => {
      document.documentElement.classList.remove('js-hero-preload');
      document.documentElement.classList.remove('js-preloader-active');
      soltarRolagem();
    };

    // Mapeia elementos por tipo de hero
    const isHome = heroRoot.classList.contains('hero');
    const isQS = heroRoot.classList.contains('qs-hero');
    const isCursos = heroRoot.classList.contains('cursos-hero');
    const isContato = heroRoot.classList.contains('contato-hero');

    const heroMediaEl = isHome ? heroRoot.querySelector('.hero__media') : null;
    const asideHome = isHome ? heroRoot.querySelector('.hero__aside') : null;
    const actionsHome = isHome ? heroRoot.querySelector('.hero__actions') : null;

    const eyebrowQS = isQS ? heroRoot.querySelector('.eyebrow') : null;
    const dotsQS = isQS ? heroRoot.querySelector('.dots--qs-hero') : null;

    const eyebrowCursos = isCursos ? heroRoot.querySelector('.eyebrow') : null;
    const asideCursos = isCursos ? heroRoot.querySelector('.cursos-hero__aside') : null;
    const dashCursos = isCursos ? heroRoot.querySelectorAll('.dash-line--hero-a, .dash-line--hero-b') : [];
    const courseBannerCursos = isCursos ? document.querySelector('.course-banner') : null;
    const bannerDotsCursos = isCursos ? document.querySelector('.dots--course-banner') : null;
    const bannerContentCursos = isCursos ? document.querySelector('.course-banner__content') : null;

    const eyebrowContato = isContato ? heroRoot.querySelector('.eyebrow') : null;
    const textContato = isContato ? heroRoot.querySelector('.contato-hero__text') : null;
    const formContato = isContato ? heroRoot.querySelector('.form-embed') : null;
    const dotsContato = isContato ? heroRoot.querySelector('.dots--contato') : null;

    const dotsHome = isHome ? heroRoot.querySelector('.dots--hero') : null;
    const dotsEl = dotsHome || dotsQS || dotsContato || null;

    if (prefersReducedHero || !hasGSAP || !h1) {
      cleanupPreload();
      if (dotsEl) dotsEl.classList.add('is-revealed');
      if (isCursos && dashCursos.length) dashCursos.forEach((el) => { el.style.transform = 'none'; });
      if (courseBannerCursos) { courseBannerCursos.style.opacity = '1'; courseBannerCursos.style.transform = 'none'; }
      if (bannerDotsCursos) bannerDotsCursos.style.setProperty('--reveal', '100%');
      if (bannerContentCursos) { bannerContentCursos.style.opacity = '1'; bannerContentCursos.style.transform = 'none'; }
      onHeroEntranceComplete();
    } else {
      try {
        if (window.SplitText) window.gsap.registerPlugin(window.SplitText);

        const split = window.SplitText.create
          ? window.SplitText.create(h1, { type: 'words', wordsClass: 'word' })
          : new window.SplitText(h1, { type: 'words', wordsClass: 'word' });
        const words = split.words || [];
        words.forEach((word) => {
          if (!word.parentElement.classList.contains('word-wrap')) {
            const wrap = document.createElement('span');
            wrap.className = 'word-wrap';
            wrap.style.overflow = 'hidden';
            wrap.style.display = 'inline-block';
            wrap.style.verticalAlign = 'bottom';
            word.parentNode.insertBefore(wrap, word);
            wrap.appendChild(word);
          }
        });

        // will-change só durante a timeline
        if (headerEl) window.gsap.set(headerEl, { willChange: 'transform, opacity' });
        if (asideHome) window.gsap.set(asideHome, { willChange: 'transform, opacity' });
        if (actionsHome) window.gsap.set(actionsHome, { willChange: 'transform, opacity' });
        if (eyebrowQS) window.gsap.set(eyebrowQS, { willChange: 'transform, opacity' });
        if (eyebrowCursos) window.gsap.set(eyebrowCursos, { willChange: 'transform, opacity' });
        if (asideCursos) window.gsap.set(asideCursos, { willChange: 'transform, opacity' });
        if (eyebrowContato) window.gsap.set(eyebrowContato, { willChange: 'transform, opacity' });
        if (textContato) window.gsap.set(textContato, { willChange: 'transform, opacity' });
        if (formContato) window.gsap.set(formContato, { willChange: 'transform, opacity' });
        window.gsap.set(words, { willChange: 'transform' });
        if (heroMediaEl) window.gsap.set(heroMediaEl, { willChange: 'transform, opacity' });
        if (dashCursos.length) window.gsap.set(dashCursos, { willChange: 'transform' });
        if (courseBannerCursos) window.gsap.set(courseBannerCursos, { willChange: 'transform, opacity' });
        if (bannerDotsCursos) window.gsap.set(bannerDotsCursos, { willChange: 'opacity' });
        if (bannerContentCursos) window.gsap.set(bannerContentCursos, { willChange: 'transform, opacity' });

        const tl = window.gsap.timeline({
          paused: true,
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            cleanupPreload();
            if (dotsEl) dotsEl.classList.add('is-revealed');
            if (bannerDotsCursos) bannerDotsCursos.classList.add('is-revealed');
            onHeroEntranceComplete();

            // Soltar o will-change devolve ~15 elementos para a pintura
            // normal, e cada um desses é uma camada acelerada que o
            // navegador desmonta na hora. Fazer isso no MESMO quadro em que
            // o cleanupPreload() acabou de tirar a classe .js-hero-preload
            // (que sozinha levanta umas 25 regras de CSS da página inteira)
            // juntava recálculo de layout e desmonte de camadas num quadro
            // só — um tranco bem visível no fim da animação. Um quadro de
            // distância já separa as duas coisas.
            window.requestAnimationFrame(() => {
              if (headerEl) window.gsap.set(headerEl, { clearProps: 'willChange' });
              if (asideHome) window.gsap.set(asideHome, { clearProps: 'willChange' });
              if (actionsHome) window.gsap.set(actionsHome, { clearProps: 'willChange' });
              if (eyebrowQS) window.gsap.set(eyebrowQS, { clearProps: 'willChange' });
              if (eyebrowCursos) window.gsap.set(eyebrowCursos, { clearProps: 'willChange' });
              if (asideCursos) window.gsap.set(asideCursos, { clearProps: 'willChange' });
              if (eyebrowContato) window.gsap.set(eyebrowContato, { clearProps: 'willChange' });
              if (textContato) window.gsap.set(textContato, { clearProps: 'willChange' });
              if (formContato) window.gsap.set(formContato, { clearProps: 'willChange' });
              window.gsap.set(words, { clearProps: 'willChange' });
              // heroMediaEl fica de fora de propósito: 120ms depois o
              // carrossel começa um zoom de 9s na foto e precisa da camada
              // de volta. Desmontar agora para remontar logo em seguida é
              // trabalho jogado fora — e era mais um tranco no mesmo ponto.
              if (dashCursos.length) window.gsap.set(dashCursos, { clearProps: 'willChange' });
              if (courseBannerCursos) window.gsap.set(courseBannerCursos, { clearProps: 'willChange' });
              if (bannerDotsCursos) window.gsap.set(bannerDotsCursos, { clearProps: 'willChange' });
              if (bannerContentCursos) window.gsap.set(bannerContentCursos, { clearProps: 'willChange' });
            });
          }
        });

        heroTimeline = tl;

        // 1) Home: fundo/carrossel — pulado quando o preloader já revelou o
        // hero__media (clip-path) antes de chamar essa timeline, senão ele
        // "pisca" (esconde de novo em opacity:0 pra depois reaparecer).
        if (isHome && heroMediaEl && !skipMediaReveal) {
          tl.fromTo(heroMediaEl, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, 0);
          const firstSlideImg = heroMediaEl.querySelector('.hero__slide img');
          if (firstSlideImg) tl.fromTo(firstSlideImg, { scale: 1.04 }, { scale: 1, duration: 1.05, ease: 'power2.out', clearProps: 'transform' }, 0);
        } else {
          tl.set({}, {}, 0);
        }

        // 2) Header sempre
        if (headerEl) tl.to(headerEl, { opacity: 1, y: 0, duration: 0.56, ease: 'power3.out' }, 0.30);

        // 2b) Eyebrow (QS / Cursos / Contato) — antes do H1
        const eyebrowEl = eyebrowQS || eyebrowCursos || eyebrowContato;
        if (eyebrowEl) tl.to(eyebrowEl, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, 0.36);

        // 3) H1 — SplitText palavra por palavra
        tl.fromTo(words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.62, stagger: 0.038, ease: 'power3.out' }, 0.42);

        // 4) Conteúdo específico por página
        if (isHome && asideHome) tl.to(asideHome, { opacity: 1, y: 0, duration: 0.50, ease: 'power3.out' }, 0.55);
        if (isHome && actionsHome) tl.to(actionsHome, { opacity: 1, y: 0, duration: 0.48, ease: 'power3.out' }, 0.68);
        if (isCursos && asideCursos) tl.to(asideCursos, { opacity: 1, y: 0, duration: 0.50, ease: 'power3.out' }, 0.55);
        if (isContato && textContato) tl.to(textContato, { opacity: 1, y: 0, duration: 0.50, ease: 'power3.out' }, 0.55);
        if (isContato && formContato) tl.to(formContato, { opacity: 1, y: 0, duration: 0.50, ease: 'power3.out' }, 0.68);

        // 5) Dots — penúltimo (antes só dos dash-lines)
        if (dotsEl) {
          const isHiddenByCSS = window.getComputedStyle(dotsEl).display === 'none';
          // O onStart é o que faz a varredura APARECER. A malha tem
          // [data-reveal], e essa regra deixa o elemento em opacity 0 até
          // alguém somar .is-revealed — que antes só entrava no fim da
          // timeline. Resultado: a varredura inteira rodava invisível e a
          // malha surgia pronta de uma vez, no mesmo instante do resto do
          // desmonte. Acendendo aqui, ela varre de verdade na tela.
          if (!isHiddenByCSS) tl.to(dotsEl, {
            '--reveal': '100%',
            duration: 0.90,
            ease: 'power2.inOut',
            onStart: () => dotsEl.classList.add('is-revealed')
          }, 0.95);
          else dotsEl.classList.add('is-revealed');
        }

        // 6) Dash-lines — só em Cursos, revelação por scaleX (sem layout)
        if (isCursos && dashCursos.length) {
          const visibleDashes = Array.from(dashCursos).filter((el) => window.getComputedStyle(el).display !== 'none');
          if (visibleDashes.length) tl.to(visibleDashes, { scaleX: 1, duration: 0.65, stagger: 0.12, ease: 'power3.out' }, 1.10);
        }

        // 7) Course-banner — a seção inteira (foto + conteúdo) só começa a
        // aparecer quando a hero (linhas tracejadas) já terminou. Usa um label
        // preso ao fim real da timeline em vez de um tempo fixo, porque um
        // valor "chutado" não acompanha o stagger das dash-lines e pode acabar
        // começando antes da hero terminar de fato.
        if (isCursos && (courseBannerCursos || bannerDotsCursos || bannerContentCursos)) {
          tl.addLabel('heroDone');
          if (courseBannerCursos) {
            tl.to(courseBannerCursos, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 'heroDone+=0.05');
          }
          if (bannerDotsCursos) {
            const hiddenDots = window.getComputedStyle(bannerDotsCursos).display === 'none';
            if (!hiddenDots) tl.to(bannerDotsCursos, {
              '--reveal': '100%',
              duration: 0.90,
              ease: 'power2.inOut',
              onStart: () => bannerDotsCursos.classList.add('is-revealed')
            }, 'heroDone+=0.20');
            else bannerDotsCursos.classList.add('is-revealed');
          }
          if (bannerContentCursos) {
            tl.to(bannerContentCursos, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, 'heroDone+=0.30');
          }
        }

        window.setTimeout(cleanupPreload, 3600);
      } catch (e) {
        cleanupPreload();
        if (dotsEl) dotsEl.classList.add('is-revealed');
        onHeroEntranceComplete();
      }
    }
  }
  }

  /* ---------- 0b. Preloader de primeira visita (Home) ----------
     Só roda quando o gate no <head> (index.html) deixou .js-preloader-active
     no <html> — ou seja, nunca nas outras 3 páginas, e nunca de novo pro
     mesmo visitante nesta sessão (ver sessionStorage em index.html). A
     malha reaproveita o .dots existente (só espelha a direção da
     varredura); o "crescimento da foto" anima o clip-path do próprio
     .hero__media real — sem duplicar imagem e sem GSAP Flip (ver plano). */
  function runPreloader(onDone) {
    const html = document.documentElement;
    const preloaderEl = document.querySelector('.preloader');
    const dotsEl = preloaderEl && preloaderEl.querySelector('.dots--preloader');
    const pctEl = preloaderEl && preloaderEl.querySelector('.preloader__pct');
    const heroMediaEl = document.querySelector('.hero__media');
    const firstSlideImg = heroMediaEl && heroMediaEl.querySelector('.hero__slide img');

    // skip() bota o site no estado de sempre (sem preloader), então pode
    // soltar .js-preloader-active na hora. Já quando a animação REALMENTE
    // roda, quem solta essa classe é o cleanupPreload() lá da entrada da
    // hero (só quando ela também já tiver terminado) — ver comentário
    // dentro do tl.to(heroMediaEl,...) mais abaixo.
    const skip = () => {
      html.classList.remove('js-preloader-active');
      soltarRolagem();
      if (preloaderEl) preloaderEl.remove();
      onDone(false);
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasGSAP = typeof window.gsap !== 'undefined';

    if (!preloaderEl || !dotsEl || !pctEl || !heroMediaEl || !firstSlideImg || prefersReduced || !hasGSAP) {
      skip();
      return;
    }

    try {
      const stageEl = preloaderEl.querySelector('.preloader__stage');
      const pct = { val: 0 };
      const setPct = () => { pctEl.textContent = Math.round(pct.val) + '%'; };

      // Onde está, na tela, o quadradinho mais central da malha. Precisa ser
      // calculado (e não chutado como "meio do hero"): a malha é centrada na
      // caixa dela, que tem altura própria e fica centrada na janela, enquanto
      // o hero começa no topo da página — os dois centros não coincidem. Na
      // horizontal a malha ainda é ancorada pela DIREITA (ver mask-position no
      // styles.css), então as colunas caem onde o passo de 77px deixar.
      const centerCell = () => {
        const s = stageEl.getBoundingClientRect();
        const cs = window.getComputedStyle(dotsEl);
        const sq = parseFloat(cs.getPropertyValue('--sq')) || 12;
        const px = parseFloat(cs.getPropertyValue('--pitch-x')) || 77;
        const py = parseFloat(cs.getPropertyValue('--pitch-y')) || 77;
        // Coluna k tem a borda direita em (direita da caixa - k * passo);
        // linha m começa no topo da caixa. Arredondar acha a mais central.
        const k = Math.round((s.width / 2 - sq / 2) / px);
        const m = Math.round((s.height / 2 - sq / 2) / py);
        return {
          cx: s.right - k * px - sq / 2,
          cy: s.top + m * py + sq / 2,
          size: sq
        };
      };

      // Geometria medida uma única vez, quando a fase 2 começa (layout já
      // assentado, e sem ficar medindo a cada quadro da animação).
      let geo = null;
      const getGeo = () => {
        if (geo) return geo;
        const c = centerCell();
        const h = heroMediaEl.getBoundingClientRect();
        geo = {
          cx: c.cx, cy: c.cy, cell: c.size,
          left: h.left, top: h.top, right: h.right, bottom: h.bottom,
          w: h.width, h: h.height
        };
        // Lado do quadrado que, partindo do centro do quadradinho, cobre o
        // hero inteiro — é o alvo final do crescimento.
        geo.maxSide = 2 * Math.max(
          geo.cx - geo.left, geo.right - geo.cx,
          geo.cy - geo.top, geo.bottom - geo.cy
        );
        return geo;
      };

      // O recorte é sempre um QUADRADO centrado no quadradinho da malha, que
      // vai sendo aparado pelas bordas do hero conforme cresce. É isso que
      // mantém a sensação de "quadradinho que vira o fundo" em qualquer tela:
      // interpolando os quatro lados em % (como antes), a janela assumia a
      // proporção do hero quase de imediato — no celular, onde o hero é bem
      // mais alto que largo, isso virava uma tira vertical esticada.
      const box = { side: 0 };
      const applySide = () => {
        const g = getGeo();
        const half = box.side / 2;
        const pc = (v) => Math.max(0, v * 100).toFixed(3) + '%';
        heroMediaEl.style.clipPath = 'inset(' +
          pc((g.cy - half - g.top) / g.h) + ' ' +
          pc((g.right - (g.cx + half)) / g.w) + ' ' +
          pc((g.bottom - (g.cy + half)) / g.h) + ' ' +
          pc((g.cx - half - g.left) / g.w) + ')';
      };

      const tl = window.gsap.timeline({
        onComplete: () => {
          // Trava a foto visível por estilo inline ANTES de soltar a classe:
          // sem isso, no instante em que .js-preloader-active sai, volta a
          // valer a regra que esconde o .hero__media (a do caminho sem
          // preloader) e a foto pisca escura até a entrada da hero terminar.
          window.gsap.set(heroMediaEl, { opacity: 1 });
          // Tirar a classe já é o quadro pesado: a página sai de "uma tela de
          // altura, travada" para os ~10.000px roláveis inteiros, e isso é um
          // recálculo de layout do documento todo. Soltar o Lenis e arrancar
          // o elemento fixo do preloader em cima disso empilhava tudo num
          // quadro só. Vão para o quadro seguinte — a foto já cobre a tela
          // inteira aqui, então esse quadro extra de preloader não aparece.
          html.classList.remove('js-preloader-active');
          window.requestAnimationFrame(() => {
            soltarRolagem();
            if (preloaderEl.isConnected) preloaderEl.remove();
          });
        }
      });

      // Fase 1 (0→1.7s): malha varre direita→esquerda + contador 0→90.
      tl.to(dotsEl, { '--reveal': '100%', duration: 1.7, ease: 'power2.inOut' }, 0);
      tl.to(pct, { val: 90, duration: 1.7, ease: 'power2.inOut', onUpdate: setPct }, 0);

      // Só avança pra fase 2 quando a hero-bg.jpg (fetchpriority=high) já
      // carregou de verdade — evita crescer a janela sobre uma imagem que
      // ainda não chegou.
      tl.addPause('imgReady', () => {
        const ready = firstSlideImg.complete && firstSlideImg.naturalWidth > 0;
        if (ready) { tl.play(); return; }
        const resume = () => tl.play();
        firstSlideImg.addEventListener('load', resume, { once: true });
        firstSlideImg.addEventListener('error', resume, { once: true });
      });

      // Fase 2, em dois tempos — os dois animam o LADO do quadrado (não os
      // quatro lados do recorte), e o applySide converte isso em clip-path:
      //   a) o quadradinho central "acende": de nada até o tamanho exato de
      //      um quadradinho da malha, no lugar exato dele;
      //   b) daí ele cresce até cobrir a tela, passando por cima da malha do
      //      centro pra fora (não precisa apagar a malha à parte).
      const POP = 0.45;   // entrada do quadradinho
      const GROW = 1.15;  // crescimento até a tela inteira

      tl.to(box, {
        side: () => getGeo().cell,
        duration: POP,
        ease: 'power2.out',
        onUpdate: applySide
      }, 'imgReady');

      // Curva: expo.inOut — arranca bem devagar, acelera forte no meio e
      // assenta no fim.
      tl.to(box, {
        side: () => getGeo().maxSide,
        duration: GROW,
        ease: 'expo.inOut',
        onUpdate: applySide,
        // No fim tira o recorte de vez: o hero é mais alto que a janela, e
        // deixar o inset fixo cortaria a parte de baixo da foto ao rolar.
        onComplete: () => { heroMediaEl.style.clipPath = 'none'; }
      }, 'imgReady+=' + POP);

      tl.to(pct, { val: 100, duration: 0.7, ease: 'power2.out', onUpdate: setPct }, 'imgReady');
      tl.to(pctEl, { opacity: 0, duration: 0.35 }, 'imgReady+=' + (POP + 0.55));

      // A entrada da hero (menu, título, textos, botões) começa um tiquinho
      // ANTES da foto terminar de crescer, para as duas emendarem sem
      // degrau. Só o disparo é antecipado: a limpeza (tirar a classe e o
      // preloader do DOM) continua no onComplete, no fim de tudo — senão o
      // fundo branco sairia no meio do crescimento e piscaria escuro.
      tl.call(() => onDone(true), null, 'imgReady+=' + (POP + GROW - 0.25));
    } catch (e) {
      skip();
    }
  }

  const preloaderEl = document.querySelector('.preloader');
  const preloaderShouldRun = !!preloaderEl && document.documentElement.classList.contains('js-preloader-active');

  // Porta de entrada única da animação da hero. A trava garante que ela toca
  // UMA vez por carregamento de página: se algum caminho chamar de novo (um
  // segundo disparo do preloader, um retorno tardio do carregamento da foto),
  // a segunda chamada é ignorada em vez de remontar a timeline e repetir a
  // entrada inteira do zero, como se a página tivesse recarregado.
  let heroEntranceStarted = false;
  const startHeroEntrance = (skipMediaReveal) => {
    if (heroEntranceStarted) return;
    heroEntranceStarted = true;
    runHeroEntrance({ skipMediaReveal: skipMediaReveal });
    if (heroTimeline) heroTimeline.play();
  };

  if (preloaderShouldRun) {
    // A trava de rolagem do preloader é feita no CSS (html.js-preloader-active
    // { overflow: hidden }), e o Lenis precisa ser avisado na mesma hora —
    // senão ele continuaria empurrando a página por baixo da animação. Quem
    // solta de volta é o soltarRolagem() lá dentro do runPreloader.
    travarRolagem();

    // Só monta a timeline de entrada (header/h1/textos/botões) depois que o
    // preloader termina — se montasse antes, o próprio gsap.timeline já
    // aplicaria o estado "de" (heroMediaEl escondido) na hora da criação,
    // mesmo pausado, e a foto que o preloader acabou de revelar piscaria.
    // mediaRevealed diz se foi o clip-path do preloader que já deixou a foto
    // visível (true) ou se ele nem chegou a rodar de verdade (false, ex.:
    // faltou GSAP) — nesse segundo caso a hero precisa fazer o fade normal.
    runPreloader((mediaRevealed) => startHeroEntrance(mediaRevealed));
  } else {
    startHeroEntrance(false);
  }

  /* ---------- 1. Menu do celular ---------- */
  const header = document.getElementById('site-header');
  const toggle = header && header.querySelector('.nav-toggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    header.querySelectorAll('.site-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. Perguntas frequentes (abre uma por vez, com transição) ---------- */
  const faqButtons = document.querySelectorAll('.faq-item__q');
  const reduceMotionFaq = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const openAnswer = (answer) => {
    if (!answer) return;
    answer.hidden = false;

    if (reduceMotionFaq) {
      answer.classList.add('is-open');
      return;
    }

    // Dois requestAnimationFrame garantem que o navegador pinte o estado
    // fechado (recém-visível) antes de pedir a transição para aberto —
    // senão ela não roda, porque não existe um "antes" pra partir.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => answer.classList.add('is-open'));
    });
  };

  const closeAnswer = (answer) => {
    if (!answer) return;
    answer.classList.remove('is-open');

    if (reduceMotionFaq) {
      answer.hidden = true;
      return;
    }

    const onTransitionEnd = (event) => {
      if (event.target !== answer || event.propertyName !== 'grid-template-rows') return;
      answer.hidden = true;
      answer.removeEventListener('transitionend', onTransitionEnd);
    };
    answer.addEventListener('transitionend', onTransitionEnd);
  };

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      faqButtons.forEach((other) => {
        if (other === button) return;
        other.setAttribute('aria-expanded', 'false');
        closeAnswer(other.nextElementSibling);
      });

      button.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) {
        closeAnswer(answer);
      } else {
        openAnswer(answer);
      }
    });
  });

  /* ---------- 3. Carrossel de depoimentos ---------- */
  const viewport = document.querySelector('[data-quote-viewport]');

  if (viewport) {
    const items = Array.from(viewport.querySelectorAll('.quote__item'));
    const prev = document.querySelector('[data-quote-prev]');
    const next = document.querySelector('[data-quote-next]');
    let current = items.findIndex((item) => item.hasAttribute('data-active'));
    if (current < 0) current = 0;
    let isSwitching = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LEAVE_MS = 220; // duração do fade de saída (.quote__item.is-leaving)
    const STAGGER_MS = 740; // maior atraso do stagger (author, 240ms) + duração da entrada (500ms)

    // Usa temporizadores em vez de esperar o evento "animationend": em algumas
    // situações (aba em segundo plano, "reduzir movimento" no sistema) esse
    // evento nunca dispara, o que travaria o carrossel para sempre.
    const show = (index) => {
      const nextIndex = (index + items.length) % items.length;
      if (nextIndex === current || isSwitching) return;

      const outgoing = items[current];
      const incoming = items[nextIndex];

      const startIncoming = () => {
        outgoing.removeAttribute('data-active');
        outgoing.classList.remove('is-leaving');

        incoming.setAttribute('data-active', '');
        current = nextIndex;

        if (reduceMotion) {
          isSwitching = false;
          return;
        }

        incoming.classList.add('is-entering');
        window.setTimeout(() => {
          incoming.classList.remove('is-entering');
          isSwitching = false;
        }, STAGGER_MS);
      };

      if (reduceMotion) {
        startIncoming();
        return;
      }

      isSwitching = true;
      outgoing.classList.add('is-leaving');
      window.setTimeout(startIncoming, LEAVE_MS);
    };

    if (prev) prev.addEventListener('click', () => show(current - 1));
    if (next) next.addEventListener('click', () => show(current + 1));
  }

  /* ---------- 4. Carrosséis que rolam de lado (diretoria) ---------- */
  document.querySelectorAll('[data-rail-prev], [data-rail-next]').forEach((button) => {
    const isNext = button.hasAttribute('data-rail-next');
    const railId = button.getAttribute(isNext ? 'data-rail-next' : 'data-rail-prev');
    const rail = document.getElementById(railId);
    if (!rail) return;

    button.addEventListener('click', () => {
      const card = rail.firstElementChild;
      const gap = parseFloat(getComputedStyle(rail).columnGap) || 20;
      const step = card ? card.getBoundingClientRect().width + gap : rail.clientWidth;
      rail.scrollBy({ left: isNext ? step : -step, behavior: 'smooth' });
    });
  });

  /* ---------- 4b. Arrastar com o mouse para rolar (ex.: missão/visão/valores) ---------- */
  document.querySelectorAll('[data-drag-scroll]').forEach((rail) => {
    let isDown = false;
    let dragged = false;
    let startX = 0;
    let startScroll = 0;

    rail.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse') return;
      // sem nada pra rolar (ex.: filtros no desktop), o arraste nem começa —
      // assim um clique com o mouse tremendo continua valendo como clique
      if (rail.scrollWidth <= rail.clientWidth) return;
      isDown = true;
      dragged = false;
      startX = event.clientX;
      startScroll = rail.scrollLeft;
      rail.setPointerCapture(event.pointerId);
      rail.classList.add('is-dragging');
    });

    rail.addEventListener('pointermove', (event) => {
      if (!isDown) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 3) dragged = true;
      rail.scrollLeft = startScroll - delta;
    });

    const stopDrag = () => {
      isDown = false;
      rail.classList.remove('is-dragging');
    };

    rail.addEventListener('pointerup', stopDrag);
    rail.addEventListener('pointercancel', stopDrag);
    rail.addEventListener('pointerleave', stopDrag);

    // impede que o arraste vire um clique acidental em links dentro do rail
    rail.addEventListener('click', (event) => {
      if (dragged) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);
  });

  /* ---------- 4c. Dica "Arraste" acompanhando o cursor nos carrosséis ---------- */
  // data-drag-hint="off" mantém o arraste, mas sem a etiqueta seguindo o cursor
  // (é o caso dos filtros de curso, que já parecem botões clicáveis).
  const dragHintRails = document.querySelectorAll('[data-drag-scroll]:not([data-drag-hint="off"])');
  const reduceMotionDragHint = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (dragHintRails.length && !reduceMotionDragHint) {
    const isDesktopPointer = () =>
      window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 1000;

    const hint = document.createElement('div');
    hint.className = 'drag-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML =
      '<span class="drag-hint__arrow drag-hint__arrow--left"><svg class="ico-chevron" viewBox="-0.5 -0.5 7 11" aria-hidden="true"><path fill="currentColor" d="M2.414 1L1 2.414L-0.414 1L1 -0.414Z M4.414 3L3 4.414L1.586 3L3 1.586Z M6.414 5L5 6.414L3.586 5L5 3.586Z M4.414 7L3 8.414L1.586 7L3 5.586Z M2.414 9L1 10.414L-0.414 9L1 7.586Z"/></svg></span>' +
      '<span class="drag-hint__text">Arraste</span>' +
      '<span class="drag-hint__arrow drag-hint__arrow--right"><svg class="ico-chevron" viewBox="-0.5 -0.5 7 11" aria-hidden="true"><path fill="currentColor" d="M2.414 1L1 2.414L-0.414 1L1 -0.414Z M4.414 3L3 4.414L1.586 3L3 1.586Z M6.414 5L5 6.414L3.586 5L5 3.586Z M4.414 7L3 8.414L1.586 7L3 5.586Z M2.414 9L1 10.414L-0.414 9L1 7.586Z"/></svg></span>';
    document.body.appendChild(hint);

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const scale = { current: 0, target: 0 };
    let rafId = null;
    let hovering = false;

    const POS_EASE = 0.16;
    const SCALE_EASE = 0.22;

    const applyTransform = () => {
      hint.style.transform =
        `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${(0.85 + scale.current * 0.15).toFixed(3)})`;
      hint.style.opacity = scale.current.toFixed(3);
    };

    const render = () => {
      pos.x += (target.x - pos.x) * POS_EASE;
      pos.y += (target.y - pos.y) * POS_EASE;
      scale.current += (scale.target - scale.current) * SCALE_EASE;
      applyTransform();

      const settled =
        Math.abs(target.x - pos.x) < .3 &&
        Math.abs(target.y - pos.y) < .3 &&
        Math.abs(scale.target - scale.current) < .01;

      if (settled && scale.target === 0) {
        rafId = null;
        return;
      }
      rafId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (rafId === null) rafId = requestAnimationFrame(render);
    };

    dragHintRails.forEach((rail) => {
      rail.addEventListener('pointerenter', (event) => {
        if (event.pointerType !== 'mouse' || !isDesktopPointer()) return;
        hovering = true;
        pos.x = target.x = event.clientX;
        pos.y = target.y = event.clientY;
        scale.target = 1;
        applyTransform();
        startLoop();
      });

      rail.addEventListener('pointermove', (event) => {
        if (event.pointerType !== 'mouse' || !hovering) return;
        target.x = event.clientX;
        target.y = event.clientY;
        // some sobre links (ex.: LinkedIn da diretoria) pra não tampar o cursor de "mãozinha"
        if (!rail.classList.contains('is-dragging')) {
          scale.target = event.target.closest('a') ? 0 : 1;
        }
        startLoop();
      });

      rail.addEventListener('pointerdown', (event) => {
        if (event.pointerType !== 'mouse' || !hovering) return;
        scale.target = 0;
        startLoop();
      });

      rail.addEventListener('pointerup', (event) => {
        if (event.pointerType !== 'mouse' || !hovering) return;
        scale.target = 1;
        startLoop();
      });

      rail.addEventListener('pointerleave', () => {
        hovering = false;
        scale.target = 0;
        startLoop();
      });
    });
  }

  /* ---------- 4d. Altura padronizada dos blocos de "Diferenciais" no tablet/celular ---------- */
  const benefitsGrid = document.querySelector('.benefits__grid');

  if (benefitsGrid) {
    const tiles = Array.from(benefitsGrid.querySelectorAll('.tile'));

    const equalizeBenefitsTiles = () => {
      const stacked = window.matchMedia('(max-width: 1000px)').matches;

      tiles.forEach((tile) => { tile.style.minHeight = ''; });
      if (!stacked) return;

      const tallest = Math.max(...tiles.map((tile) => tile.getBoundingClientRect().height));
      tiles.forEach((tile) => { tile.style.minHeight = `${tallest}px`; });
    };

    equalizeBenefitsTiles();
    window.addEventListener('resize', equalizeBenefitsTiles);
    window.addEventListener('load', equalizeBenefitsTiles);
    if (document.fonts) document.fonts.ready.then(equalizeBenefitsTiles);
  }

  /* ---------- 5. Filtro de modalidade no catálogo de cursos ---------- */
  const catalog = document.querySelector('[data-catalog]');
  const filterButtons = document.querySelectorAll('[data-filter]');

  if (catalog && filterButtons.length) {
    const cards = Array.from(catalog.querySelectorAll('[data-cat]'));
    const empty = document.querySelector('[data-catalog-empty]');

    const apply = (active) => {
      let visible = 0;
      cards.forEach((card) => {
        const show = !active || card.dataset.cat === active;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (empty) empty.hidden = visible > 0;
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const wasOn = button.getAttribute('aria-pressed') === 'true';
        filterButtons.forEach((other) => other.setAttribute('aria-pressed', 'false'));
        if (!wasOn) button.setAttribute('aria-pressed', 'true');
        apply(wasOn ? null : button.dataset.filter);
      });
    });
  }

  /* ---------- 6. Formulário de contato ----------
     Enquanto o formulário do HubSpot não estiver no lugar, o envio não sai
     do navegador: a gente só avisa a pessoa em vez de recarregar a página. */
  const contactForm = document.querySelector('[data-contact-form]');

  if (contactForm) {
    const note = contactForm.querySelector('[data-contact-note]');

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!note) return;

      if (!contactForm.checkValidity()) {
        note.textContent = 'Preencha nome, e-mail, celular e curso de interesse para continuar.';
        note.hidden = false;
        contactForm.reportValidity();
        return;
      }

      note.textContent = 'Este formulário é o do layout e ainda não está conectado ao HubSpot, então a mensagem não foi enviada.';
      note.hidden = false;
    });
  }

  /* ---------- 7. Lightbox de vídeo (molduras .video-frame) ---------- */
  const lightbox = document.querySelector('[data-lightbox]');
  const videoButtons = document.querySelectorAll('.video-frame');

  if (lightbox && videoButtons.length) {
    const iframe = lightbox.querySelector('[data-lightbox-iframe]');
    const note = lightbox.querySelector('[data-lightbox-note]');
    let lastFocused = null;

    const closeLightbox = () => {
      lightbox.hidden = true;
      iframe.src = '';
      soltarRolagem();
      if (lastFocused) lastFocused.focus();
    };

    const openLightbox = (button) => {
      const videoId = button.dataset.youtube;
      lastFocused = button;
      lightbox.hidden = false;
      // com o vídeo ocupando a tela inteira, a página atrás fica parada
      travarRolagem();

      if (videoId) {
        iframe.hidden = false;
        note.hidden = true;
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      } else {
        iframe.hidden = true;
        note.hidden = false;
      }

      lightbox.querySelector('.lightbox__close').focus();
    };

    videoButtons.forEach((button) => {
      button.addEventListener('click', () => openLightbox(button));
    });

    lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => {
      el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  }

  /* ---------- 8. Fundo rotativo do hero (10s visível com zoom + wipe escurecendo) ---------- */
  const heroMedia = document.querySelector('.hero__media');

  if (heroMedia) {
    const slides = Array.from(heroMedia.querySelectorAll('.hero__slide'));

    if (slides.length > 1) {
      const WIPE_MS = 1200; // precisa bater com a transition de .hero__slide--current.hero__slide--wipe no styles.css
      const HOLD_MS = 8800; // tempo em que a foto fica parada, 100% visível, antes de começar a sair
      const ZOOM_START = WIPE_MS * 0.8; // o zoom da próxima foto começa quando ela estiver 80% visível (durante o wipe)
      const ZOOM_MS = HOLD_MS + (WIPE_MS - ZOOM_START); // precisa bater com a transition de .hero__slide--zoom img no styles.css
      let currentIndex = 0;

      const applyLayers = () => {
        slides.forEach((slide, i) => {
          slide.classList.remove('hero__slide--current', 'hero__slide--next', 'hero__slide--wipe');
          if (i === currentIndex) {
            slide.classList.add('hero__slide--current');
          } else if (i === (currentIndex + 1) % slides.length) {
            slide.classList.add('hero__slide--next');
          } else {
            slide.classList.remove('hero__slide--zoom'); // some de vez: reseta o zoom pra próxima vez que ela entrar
          }
        });
      };

      const scheduleWipe = () => {
        window.setTimeout(() => {
          slides[currentIndex].classList.add('hero__slide--wipe');
          const upcomingIndex = (currentIndex + 1) % slides.length;

          window.setTimeout(() => {
            slides[upcomingIndex].classList.add('hero__slide--zoom');
          }, ZOOM_START);

          window.setTimeout(() => {
            currentIndex = upcomingIndex;
            applyLayers();
            scheduleWipe();
          }, WIPE_MS);
        }, HOLD_MS);
      };

      // Aplica as camadas imediatamente (antes do fade-in do hero) para que
      // hero-bg fique no topo e hero-bg-3 não apareça primeiro no empilhamento.
      applyLayers();

      const startCarousel = () => {
        // Dois requestAnimationFrame seguidos garantem que o navegador já pintou a
        // primeira foto na escala normal antes de pedir o zoom — senão a transição
        // não roda, porque não existe um "antes" visível pra ela partir.
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            slides[currentIndex].classList.add('hero__slide--zoom');
          });
        });
        scheduleWipe();
      };

      // Espera a entrada do hero terminar de verdade (não um tempo calculado
      // a partir do carregamento da página) para não competir com o
      // wipe/zoom inicial — importante porque, na primeira visita com
      // preloader, a timeline de entrada só começa a tocar bem depois do
      // carregamento, então um tempo fixo chutaria errado.
      onHeroEntranceComplete = () => window.setTimeout(startCarousel, 120);
    }
  }

  /* ---------- 8.1 Carrossel de fotos do slider "Quem somos" (mesmo efeito do hero, ciclo de 7s) ---------- */
  const qsSliderMedia = document.querySelector('.qs-slider__media');

  if (qsSliderMedia) {
    const qsSlides = Array.from(qsSliderMedia.querySelectorAll('.qs-slider__slide'));

    if (qsSlides.length > 1) {
      const QS_WIPE_MS = 1200; // precisa bater com a transition de .qs-slider__slide--current.qs-slider__slide--wipe no styles.css
      const QS_HOLD_MS = 5800; // 5.8s parada + 1.2s de wipe = ciclo de 7s por foto
      const QS_ZOOM_START = QS_WIPE_MS * 0.8;
      const QS_ZOOM_MS = QS_HOLD_MS + (QS_WIPE_MS - QS_ZOOM_START); // precisa bater com a transition de .qs-slider__slide--zoom img no styles.css
      let qsCurrentIndex = 0;

      const qsApplyLayers = () => {
        qsSlides.forEach((slide, i) => {
          slide.classList.remove('qs-slider__slide--current', 'qs-slider__slide--next', 'qs-slider__slide--wipe');
          if (i === qsCurrentIndex) {
            slide.classList.add('qs-slider__slide--current');
          } else if (i === (qsCurrentIndex + 1) % qsSlides.length) {
            slide.classList.add('qs-slider__slide--next');
          } else {
            slide.classList.remove('qs-slider__slide--zoom');
          }
        });
      };

      qsApplyLayers();

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const qsScheduleWipe = () => {
          window.setTimeout(() => {
            qsSlides[qsCurrentIndex].classList.add('qs-slider__slide--wipe');
            const qsUpcomingIndex = (qsCurrentIndex + 1) % qsSlides.length;

            window.setTimeout(() => {
              qsSlides[qsUpcomingIndex].classList.add('qs-slider__slide--zoom');
            }, QS_ZOOM_START);

            window.setTimeout(() => {
              qsCurrentIndex = qsUpcomingIndex;
              qsApplyLayers();
              qsScheduleWipe();
            }, QS_WIPE_MS);
          }, QS_HOLD_MS);
        };

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            qsSlides[qsCurrentIndex].classList.add('qs-slider__slide--zoom');
          });
        });
        qsScheduleWipe();
      }
    }
  }

  /* ---------- 9. Números que contam até o valor final (cartões de estatística) ---------- */
  const countEls = document.querySelectorAll('[data-count-to]');

  if (countEls.length) {
    const reduceMotionCount = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotionCount || !('IntersectionObserver' in window)) {
      countEls.forEach((el) => { el.textContent = el.dataset.countTo; });
    } else {
      const COUNT_MS = 1400;
      const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

      const animateCount = (el) => {
        const target = parseInt(el.dataset.countTo, 10);
        const start = performance.now();

        const step = (now) => {
          const progress = Math.min((now - start) / COUNT_MS, 1);
          el.textContent = Math.round(target * easeOutExpo(progress));
          if (progress < 1) window.requestAnimationFrame(step);
        };

        window.requestAnimationFrame(step);
      };

      const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCount(entry.target);
          observer.unobserve(entry.target);
        });
      }, { threshold: .4 });

      countEls.forEach((el) => countObserver.observe(el));
    }
  }

  /* ---------- 10. Revelar ao rolar (grades e trilhos em cascata) ---------- */
  const revealGroups = document.querySelectorAll('[data-reveal-group]');

  if (revealGroups.length) {
    const reduceMotionReveal = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotionReveal || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((item) => item.classList.add('is-revealed'));
    } else {
      const STAGGER_STEP_MS = 60;

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Heroes com timeline própria (GSAP) — não deixa o observer
          // revelar dots/dash antes da hora (entram por último na timeline)
          const inHeroWithTimeline = entry.target.closest('.hero, .qs-hero, .cursos-hero, .contato-hero');
          if (inHeroWithTimeline) {
            const isControlled = (el) => el.matches('.dots--hero, .dots--qs-hero, .dots--contato, .dash-line--hero-a, .dash-line--hero-b');
            if (isControlled(entry.target)) { observer.unobserve(entry.target); return; }
            const nonControlled = Array.from(entry.target.querySelectorAll('[data-reveal]')).filter((el) => !isControlled(el));
            nonControlled.forEach((item, index) => {
              item.style.transitionDelay = `${index * STAGGER_STEP_MS}ms`;
              item.classList.add('is-revealed');
            });
            observer.unobserve(entry.target);
            return;
          }

          const items = Array.from(entry.target.querySelectorAll('[data-reveal]'));
          items.forEach((item, index) => {
            item.style.transitionDelay = `${index * STAGGER_STEP_MS}ms`;
            item.classList.add('is-revealed');
          });

          observer.unobserve(entry.target);
        });
      }, { threshold: .2 });

      revealGroups.forEach((group) => revealObserver.observe(group));
    }
  }

  /* ---------- 10b. Seção seguinte só entra quando o topo encosta no meio da tela ----------
     Quem Somos (.qs-intro) usa [data-reveal-half] — mantém dots+content separados.
     Cursos (.course-banner) agora entra como último passo da timeline da hero (evita ficar visível antes da hero). */
  (() => {
    const halfGroups = document.querySelectorAll('[data-reveal-half]');
    if (!halfGroups.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      halfGroups.forEach((g) => g.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed')));
      return;
    }

    const HALF_STAGGER = 60;
    const reveal = (group) => {
      if (!group || group.dataset.halfRevealed) return;
      const items = group.querySelectorAll('[data-reveal]');
      // fallback: se por algum motivo não achar filhos, revela o próprio grupo
      if (!items.length) group.classList.add('is-revealed');
      items.forEach((el, i) => {
        el.style.transitionDelay = `${i * HALF_STAGGER}ms`;
        el.classList.add('is-revealed');
      });
      group.dataset.halfRevealed = 'true';
    };

    const isAtHalf = (el) => el.getBoundingClientRect().top <= window.innerHeight * 0.5;

    // Observer principal: raiz = viewport recortada para só a metade superior.
    // Quando o topo cruza 50%, o elemento entra em "top half" e dispara.
    let halfObserver = null;
    if ('IntersectionObserver' in window) {
      halfObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      }, { root: null, rootMargin: '0px 0px -50% 0px', threshold: 0 });
      halfGroups.forEach((g) => halfObserver.observe(g));
    }

    // Garantia via scroll/resize/load — cobre casos onde observer não dispara (ex: já intersectando)
    const checkAll = () => {
      halfGroups.forEach((g) => { if (!g.dataset.halfRevealed && isAtHalf(g)) reveal(g); });
      if ([...halfGroups].every((g) => g.dataset.halfRevealed)) {
        window.removeEventListener('scroll', checkAll);
        window.removeEventListener('resize', checkAll);
        if (halfObserver) halfGroups.forEach((g) => halfObserver.unobserve(g));
      }
    };

    window.addEventListener('scroll', checkAll, { passive: true });
    window.addEventListener('resize', checkAll);
    window.addEventListener('load', checkAll);
    requestAnimationFrame(() => requestAnimationFrame(checkAll));
    // após hero (1.6s) + margem, garante que Cursos não perca o gatilho por corrida de layout
    setTimeout(checkAll, 800);
    setTimeout(checkAll, 1600);
    // última garantia: se ainda não revelou em 3s, força (evita ficar invisível para sempre)
    setTimeout(() => halfGroups.forEach((g) => reveal(g)), 3000);
  })();

  /* ---------- 11. Títulos de banner com entrada palavra por palavra (mesmo efeito do H1 do hero) ---------- */
  const splitRevealEls = document.querySelectorAll('[data-split-reveal]');

  if (splitRevealEls.length) {
    const reduceMotionSplit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasGSAPSplit = typeof window.gsap !== 'undefined' && typeof window.SplitText !== 'undefined';

    if (reduceMotionSplit || !hasGSAPSplit || !('IntersectionObserver' in window)) {
      splitRevealEls.forEach((el) => el.classList.add('is-revealed'));
    } else {
      if (window.SplitText) window.gsap.registerPlugin(window.SplitText);

      const revealBannerWords = (el) => {
        el.classList.add('is-revealed');

        try {
          const split = window.SplitText.create
            ? window.SplitText.create(el, { type: 'words', wordsClass: 'word' })
            : new window.SplitText(el, { type: 'words', wordsClass: 'word' });
          const words = split.words || [];

          words.forEach((word) => {
            if (!word.parentElement.classList.contains('word-wrap')) {
              const wrap = document.createElement('span');
              wrap.className = 'word-wrap';
              wrap.style.overflow = 'hidden';
              wrap.style.display = 'inline-block';
              wrap.style.verticalAlign = 'bottom';
              word.parentNode.insertBefore(wrap, word);
              wrap.appendChild(word);
            }
          });

          window.gsap.fromTo(words, { yPercent: 110, opacity: 0 }, {
            yPercent: 0,
            opacity: 1,
            duration: 0.62,
            stagger: 0.038,
            ease: 'power3.out',
            onComplete: () => window.gsap.set(words, { clearProps: 'all' }),
          });
        } catch (e) {
          // se o SplitText falhar por algum motivo, o texto já ficou visível acima
        }
      };

      const splitRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealBannerWords(entry.target);
          observer.unobserve(entry.target);
        });
      }, { threshold: .3 });

      splitRevealEls.forEach((el) => splitRevealObserver.observe(el));
    }
  }
});
