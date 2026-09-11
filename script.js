// Interatividade do site FIA digital
// 1) menu do celular  2) perguntas frequentes  3) carrossel de depoimentos

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 0. Hero entrance — timeline GSAP (orquestração completa) ---------- */
  // Home (.hero) + Quem Somos (.qs-hero) + Cursos (.cursos-hero) + Contato (.contato-hero)
  // Mesma curva (--ease-out → power3.out), só transform/opacity/--reveal, por último dots→dash
  let heroTimeline = null;
  let heroEntranceDuration = 0;

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
    const cleanupPreload = () => document.documentElement.classList.remove('js-hero-preload');

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
      if (bannerDotsCursos) bannerDotsCursos.style.setProperty('--reveal', '100%');
      if (bannerContentCursos) { bannerContentCursos.style.opacity = '1'; bannerContentCursos.style.transform = 'none'; }
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
        if (bannerDotsCursos) window.gsap.set(bannerDotsCursos, { willChange: 'opacity' });
        if (bannerContentCursos) window.gsap.set(bannerContentCursos, { willChange: 'transform, opacity' });

        const tl = window.gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            cleanupPreload();
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
            if (heroMediaEl) window.gsap.set(heroMediaEl, { clearProps: 'willChange' });
            if (dashCursos.length) window.gsap.set(dashCursos, { clearProps: 'willChange' });
            if (bannerDotsCursos) window.gsap.set(bannerDotsCursos, { clearProps: 'willChange' });
            if (bannerContentCursos) window.gsap.set(bannerContentCursos, { clearProps: 'willChange' });
            if (dotsEl) dotsEl.classList.add('is-revealed');
            if (bannerDotsCursos) bannerDotsCursos.classList.add('is-revealed');
          }
        });

        heroTimeline = tl;
        heroEntranceDuration = 1.6;

        // 1) Home: fundo/carrossel
        if (isHome && heroMediaEl) {
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
          if (!isHiddenByCSS) tl.to(dotsEl, { '--reveal': '100%', duration: 0.90, ease: 'power2.inOut' }, 0.95);
          else dotsEl.classList.add('is-revealed');
        }

        // 6) Dash-lines — só em Cursos, revelação por scaleX (sem layout)
        if (isCursos && dashCursos.length) {
          const visibleDashes = Array.from(dashCursos).filter((el) => window.getComputedStyle(el).display !== 'none');
          if (visibleDashes.length) tl.to(visibleDashes, { scaleX: 1, duration: 0.65, stagger: 0.12, ease: 'power3.out' }, 1.10);
        }

        // 7) Course-banner — ÚLTIMO da timeline (evita ficar visível antes da hero)
        if (isCursos && (bannerDotsCursos || bannerContentCursos)) {
          if (bannerDotsCursos) {
            const hiddenDots = window.getComputedStyle(bannerDotsCursos).display === 'none';
            if (!hiddenDots) tl.to(bannerDotsCursos, { '--reveal': '100%', duration: 0.90, ease: 'power2.inOut' }, 1.85);
            else bannerDotsCursos.classList.add('is-revealed');
          }
          if (bannerContentCursos) {
            tl.to(bannerContentCursos, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, 1.95);
          }
        }

        heroEntranceDuration = tl.duration();
        window.setTimeout(cleanupPreload, 3200);
      } catch (e) {
        cleanupPreload();
        if (dotsEl) dotsEl.classList.add('is-revealed');
      }
    }
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
  const dragHintRails = document.querySelectorAll('[data-drag-scroll]');
  const reduceMotionDragHint = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (dragHintRails.length && !reduceMotionDragHint) {
    const isDesktopPointer = () =>
      window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 1000;

    const hint = document.createElement('div');
    hint.className = 'drag-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML =
      '<span class="drag-hint__arrow drag-hint__arrow--left"><svg viewBox="0 0 8 12" aria-hidden="true"><rect x="4" y="0" width="4" height="4" fill="currentColor"/><rect x="0" y="4" width="4" height="4" fill="currentColor"/><rect x="4" y="8" width="4" height="4" fill="currentColor"/></svg></span>' +
      '<span class="drag-hint__text">Arraste</span>' +
      '<span class="drag-hint__arrow drag-hint__arrow--right"><svg viewBox="0 0 8 12" aria-hidden="true"><rect x="0" y="0" width="4" height="4" fill="currentColor"/><rect x="4" y="4" width="4" height="4" fill="currentColor"/><rect x="0" y="8" width="4" height="4" fill="currentColor"/></svg></span>';
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
      if (lastFocused) lastFocused.focus();
    };

    const openLightbox = (button) => {
      const videoId = button.dataset.youtube;
      lastFocused = button;
      lightbox.hidden = false;

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

      // Se a entrada do hero ainda está rodando, espera ela terminar para não
      // competir com o wipe/zoom inicial (evita dois transforms ao mesmo tempo)
      if (heroTimeline && heroEntranceDuration > 0) {
        window.setTimeout(startCarousel, Math.ceil(heroEntranceDuration * 1000) + 120);
      } else {
        startCarousel();
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
});
