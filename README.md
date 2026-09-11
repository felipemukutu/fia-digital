# FIA digital

> A profundidade do conhecimento encontra a autonomia do digital.

Site institucional da **FIA digital** — braço de ensino a distância da FIA Business School (graduação tecnológica, pós-graduação e MBA). Construído a partir do design do Figma com 4 páginas: Home, Quem Somos, Cursos e Contato.

**Repositório:** `git@github.com:felipemukutu/fia-digital.git` · **Stack:** HTML/CSS/JS puro — sem frameworks, sem build, sem dependências.

---

## Preview

Abra `index.html` direto no navegador ou use um servidor estático:

```bash
# Python
python3 -m http.server 8000
# Node (npx)
npx serve .
```

Depois acesse `http://localhost:8000`.

> No Ship Studio o preview já roda automaticamente — basta clicar em **Refresh**.

---

## Páginas

| Página | Arquivo | Rota |
|---|---|---|
| **Home** | `index.html` | `/` |
| **Quem Somos** | `quem-somos.html` | `/quem-somos.html` |
| **Cursos** | `cursos.html` | `/cursos.html` |
| **Contato** | `contato.html` | `/contato.html` |

Todas compartilham o mesmo `site-header`, `site-footer`, `styles.css` e `script.js`.

### O que cada página tem

- **Home** — hero com carrossel de 3 imagens + animação GSAP, Sobre (+46 anos / +150 mil com contador), faixa de chamadas, grade de cursos, depoimentos com carrossel, FAQ e faixa de transição.
- **Quem Somos** — trajetória, história da FIA com vídeos em modal, marquee "Você no controle da jornada", Missão/Visão/Valores, diferenciais (bento grid), diretoria e vídeo institucional.
- **Cursos** — filtros por modalidade (Graduação / Pós / MBA), catálogo, corpo docente, selos (AMBA, EFMD, AACSB, MEC, QS Stars), mural de depoimentos e FAQ.
- **Contato** — formulário + faixas reutilizadas (marquee, FAQ, Saiba mais).

---

## Estrutura do projeto

```
index.html          # Home
quem-somos.html     # Quem Somos
cursos.html         # Catálogo de cursos
contato.html        # Formulário de contato
styles.css          # Todos os estilos (2112 linhas, CSS variables)
script.js           # Menu mobile, FAQ, carrosséis, filtros, animações GSAP
images/             # Fotos, logos e ícones (exportados do Figma)
vendor/             # gsap.min.js + SplitText.min.js
robots.txt          # Allow + Sitemap
sitemap.xml         # Mapa para buscadores (4 URLs)
SITE.md             # Documentação completa do site (brand, páginas, changelog)
CLAUDE.md           # Instruções para o agente no Ship Studio
```

---

## Design system

Definido em `:root` no topo do `styles.css`:

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#10110b` | fundo do hero / faixas escuras |
| `--aqua` | `#02ab95` | cor principal — botões, links, detalhes |
| `--deep` | `#084734` | títulos em fundo claro |
| `--text` | `#333333` | texto corrido |
| `--mint` | `#eff5f4` | fundo de seções claras |
| `--lime` | `#c2fa75` | hover de botões, aspas, detalhes |

- **Fonte:** `DM Sans` (Google Fonts, pesos 400 / 500 / 600) — `--font` única para tudo.
- **Títulos:** `font-weight: 400` + `clamp()` (ex: `clamp(34px, 3.9vw, 54px)`).
- **Cantos:** `border-radius: 0` em todo o site. Sem `box-shadow` — profundidade via blocos de cor e bordas `1px solid`.
- **Layout:** `--container: 1276px` + `--gutter` (82px → 48px → 24px) + `--edge` — todas as seções alinhadas na mesma coluna central.
- **Motivos decorativos:** `.dots` (malha de quadradinhos em CSS) e `.dash-line` (linha tracejada com degradê lime→aqua).
- **Botões:** `.btn` base + tamanhos `--sm / --md / --lg` e variantes `--aqua / --white / --stroke-*` — hover sempre para `--lime`.

---

## Funcionalidades (JS)

Tudo em `script.js` (sem dependências além do GSAP para o hero):

- Menu mobile (toggle + animação)
- FAQ accordion com altura animada
- Carrosséis com drag (mouse + touch), snap e navegação por setas — com dica "ARRASTE" seguindo o cursor no desktop
- Filtro de cursos por modalidade
- Contador animado nos big numbers
- Reveal em cascata ao rolar (`IntersectionObserver`)
- Hero da Home com timeline GSAP + SplitText (palavras do H1 entrando em stagger)
- Modais de vídeo (YouTube) em Quem Somos
- Respeito a `prefers-reduced-motion` em todas as animações

---

## SEO

- `title` e `meta description` otimizados nas 4 páginas (título 49–55 chars, descrição 136–153 chars)
- `canonical`, Open Graph, Twitter Cards, `theme-color` e favicon em todas as páginas
- `robots.txt` + `sitemap.xml` (trocar `https://www.fiadigital.com.br` pelo domínio final se necessário)
- `loading="lazy"` + `decoding="async"` + `width`/`height` em imagens abaixo da dobra (LCP continua `eager` com `fetchpriority="high"`)
- Links externos com `target="_blank" rel="noopener noreferrer"`
- JSON-LD, conversão para WebP e ajustes de heading ainda pendentes — ver `SITE.md` > Histórico

---

## Como personalizar

- **Cores:** edite as variáveis CSS em `styles.css` (`:root` no topo).
- **Textos:** edite direto nos `.html` (títulos, parágrafos, FAQ).
- **Cursos:** duplique um `.course-card` em `cursos.html` e ajuste `tags` / `h3` / `img`.
- **Depoimentos:** duplique um `.quote__item` (Home) ou `.testimonial-card` (Cursos).
- **Imagens do hero:** troque `images/hero-bg-2.png` e `images/hero-bg-3.png` mantendo o mesmo nome.
- **Vídeos:** troque os `data-yt` nos modais de Quem Somos pelos links reais do YouTube.
- **Nova página:** copie a estrutura de `contato.html` (head + header + footer), crie o conteúdo em `<main>` e adicione o link na nav de todos os `.html`.

Documentação completa e histórico de mudanças em [`SITE.md`](./SITE.md).

---

## Deploy

Site estático — sem build. Faça upload dos arquivos para qualquer hospedagem estática:

- **Vercel / Netlify / Cloudflare Pages** — aponte para a raiz do projeto
- **S3 + CloudFront / GitHub Pages** — basta servir os arquivos estáticos

Não esqueça de configurar o domínio final em `sitemap.xml`, `robots.txt` e nas tags `canonical` / `og:url`.

---

## Licença

Uso interno — FIA Business School / Mukutu.
