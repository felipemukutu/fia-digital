# FIA digital

> A profundidade do conhecimento encontra a autonomia do digital.

Site institucional da **FIA digital** — braço de ensino a distância da FIA, com
graduação tecnológica, pós-graduação e MBA. O site foi construído a partir do
design do Figma "FIA Digital" (quadros "01. Home", "02. Quem Somos",
"03. Cursos" e "04. Contato").

---

## Identidade da marca

**Personalidade:** séria e acadêmica, mas leve e moderna. Passa credibilidade
(46 anos de FIA) sem parecer pesada ou antiquada. Muito espaço em branco,
títulos grandes em peso normal (nunca "gritando" em negrito), fotos reais de
pessoas estudando.

**Cores** (definidas no começo do `styles.css`, no bloco `:root`):

| Nome no código | Cor | Onde aparece |
|---|---|---|
| `--ink` | `#10110b` preto esverdeado | fundo do topo do site |
| `--aqua` | `#02ab95` verde-água | cor principal: botões, etiquetas, detalhes |
| `--deep` | `#084734` verde escuro | títulos das seções |
| `--text` | `#333333` cinza escuro | textos corridos |
| `--mint` | `#eff5f4` verde bem clarinho | fundo das seções claras |
| `--lime` | `#c2fa75` verde-limão | aspas do depoimento e tracinhos decorativos |

**Fonte:** DM Sans (Google Fonts), nos pesos 400, 500, 600 e 700. É a mesma do
design original.

**Elementos decorativos da marca:** dois padrões que aparecem várias vezes.

- **Malha de quadradinhos** (classe `dots`) — grade de quadrados verdes que
  desaparece de um lado para o outro. Feita só com CSS, sem imagem.
- **Tracinhos com degradê** (classe `dash-line`) — linhas horizontais
  interrompidas, do limão ao verde-água. Também são só CSS.

---

## Páginas

- **Página inicial** (`index.html`) — a página principal. Na primeira vez que
  alguém visita o site (uma vez por sessão do navegador), uma animação de
  carregamento aparece antes de tudo — veja o "Histórico de mudanças" — e
  depois dela vêm estas faixas de cima para baixo:
  1. **Topo** — logo, links "Quem Somos" e "Cursos", botão "Entre em contato".
     No celular ele vira um menu que abre e fecha.
  2. **Abertura (hero)** — foto de fundo escurecida (agora um carrossel de 3
     fotos, trocando a cada 10 segundos), título grande, texto de boas-vindas
     e dois botões grandes ("Conhecer cursos EAD" e "Falar com consultor").
  3. **Sobre** — título em verde escuro, dois parágrafos e dois cartões com os
     números da instituição (+46 anos, +150 mil).
  4. **Faixa de chamadas** — foto larga com dois botões no canto de baixo.
  5. **Cursos** — título da seção, dois cartões de curso (foto + etiquetas +
     nome + "Matricule-se") e o botão "Conheça nossos cursos".
  6. **Depoimentos** — metade foto, metade fundo verde-água, com um depoimento
     por vez e setas para trocar. Já existem **3 depoimentos** cadastrados.
  7. **Dúvidas frequentes** — três perguntas que abrem e fecham ao clicar.
  8. **Faixa de transição** — foto larga de um grupo estudando, com os
     quadradinhos verdes nas laterais.
  9. **Rodapé** — logo, frase da marca, redes sociais, atalhos para
     Graduação / Pós-graduação / MBA, dados do e-MEC, portarias do MEC,
     links da FIA e a linha de direitos reservados.

- **Quem Somos** (`quem-somos.html`) — a página institucional, também vinda do
  Figma ("02. Quem Somos"), com estas faixas:
  1. **Topo claro** — mesma barra de navegação, mas em fundo branco com texto
     verde escuro (é o que o design pede nesta página).
  2. **Abertura** — "A herança da excelência no ritmo da sua rotina", em texto
     bem grande, sobre a malha de quadradinhos.
  3. **Quem somos** — dois parágrafos, um carrossel automático de 3 fotos com
     o selo da marca fixo no meio (troca sozinho a cada 7 segundos, mesmo
     efeito do carrossel da abertura da Home) e os dois cartões de números
     (+46 anos, +150 mil) na versão larga.
  4. **Nossa trajetória** — foto do escritório em tela cheia com a frase em
     branco por cima.
  5. **A FIA** — a história da escola ao lado de um vídeo que toca sozinho
     (sem som) e, ao ser clicado, abre a janela com o vídeo "Por que existimos
     | Manifesto FIA Business School" do YouTube.
  6. **Faixa deslizante** — "Você no controle da jornada" repetido, andando
     sozinho da direita para a esquerda, com fotinhas entre as frases.
  7. **Missão, visão e valores** — três cartões brancos em um carrossel que
     rola de lado.
  8. **Diferenciais FIA digital** — mosaico com o logo, dois textos, o botão
     "Conheça cursos FIA" e uma foto.
  9. **Saiba mais** — foto em tela cheia com a frase da marca e o botão.
  10. **Diretoria executiva** — quatro cartões com foto, nome, cargo e link do
      LinkedIn, com as setas para passar.
  11. **Vídeo institucional** — logo grande, dois parágrafos e a segunda
      moldura de vídeo.
  12. **Rodapé** — igual ao da página inicial.

- **Cursos** (`cursos.html`) — o catálogo, vindo do quadro "03. Cursos":
  1. **Topo claro e abertura** — "A formação que o mercado respeita, no formato
     que você controla".
  2. **Faixa "Pós-Graduação & MBAs"** — foto em tela cheia com o texto por cima.
  3. **Catálogo** — os três filtros de modalidade (Graduação, Pós-graduação e
     MBA) e a grade com os **18 cursos reais** da FIA digital (4 MBAs e 14
     Pós-graduações — ainda não há nenhum curso de Graduação cadastrado, então
     esse filtro mostra a mensagem "Ainda não temos cursos nesta modalidade").
     Os filtros **funcionam**: clicar em um deles mostra só os cursos daquela
     modalidade e clicar de novo volta a mostrar todos.
  4. **Faixa de imagem** — foto larga com os quadradinhos verdes na lateral.
  5. **Corpo docente** — cartão verde de apresentação e quatro professores em
     um carrossel que rola de lado.
  6. **Empresas parceiras** — os selos e acreditações da FIA Business School.
  7. **Mural de depoimentos** — quatro depoimentos espalhados pela tela (no
     celular eles viram uma lista).
  8. **Dúvidas frequentes** — as mesmas três perguntas da página inicial, aqui
     com as cores trocadas (fundo claro, caixas brancas).
  9. **Saiba mais** — a mesma faixa de chamada da página Quem Somos.
  10. **Rodapé** — igual ao das outras páginas.

- **Contato** (`contato.html`) — vinda do quadro "04. Contato". É a página mais
  curta do site e quase tudo nela já existia:
  1. **Abertura com o formulário** — "Estamos prontos para acelerar o seu
     futuro", o texto de apoio e o formulário à direita. **A única parte nova
     do site nesta página.**
  2. **Faixa deslizante** — a mesma da Quem Somos.
  3. **Dúvidas frequentes** — a mesma da Cursos.
  4. **Saiba mais** — a mesma faixa de chamada das outras páginas.
  5. **Rodapé** — igual ao das outras páginas.

  Todos os botões e links de "Entre em contato" do site (topo, rodapé, FAQ,
  "Falar com consultor" e "Matricule-se") agora levam para esta página.

- **Página não encontrada** (`404.html`) — aparece quando alguém acessa um
  endereço que não existe no site. Fundo escuro igual ao da abertura da Home,
  com o número "404" em verde-limão, uma frase curta, e dois botões: "Voltar
  para a Home" e "Ver os cursos". Usa o mesmo menu e o mesmo rodapé das outras
  páginas. **Importante:** esse arquivo só é servido automaticamente para
  endereços quebrados se o serviço onde o site está hospedado reconhecer a
  convenção `404.html` (Netlify, GitHub Pages e a maioria dos serviços
  modernos reconhecem sozinhos; confirme com quem cuida da hospedagem se não
  tiver certeza).

---

## Arquivos do projeto

```
index.html        Página inicial
quem-somos.html   Página "Quem Somos"
cursos.html       Página "Cursos"
contato.html      Página "Contato"
404.html          Página de "endereço não encontrado"
favicon.ico       Ícone do site para navegadores antigos (reserva do SVG)
robots.txt        Controle de rastreamento para buscadores
sitemap.xml       Mapa do site para o Google
styles.css        Todos os estilos do site
script.js         Menu do celular, perguntas, carrosséis e filtro de cursos
vendor/           Bibliotecas prontas de terceiros (animação e rolagem suave)
images/           Todas as imagens, logos e ícones
SITE.md           Este documento
```

As três bibliotecas dentro de `vendor/` ficam guardadas no próprio projeto, e
não vêm de um servidor de fora — assim o site nunca depende de um site
terceiro estar no ar para funcionar:

| Arquivo | Para que serve |
|---|---|
| `gsap.min.js` | Motor das animações (abertura da Home, entradas das seções) |
| `SplitText.min.js` | Quebra os títulos em palavras, para entrarem uma a uma |
| `lenis.min.js` | Rolagem suave da página |

### Peças que se repetem entre as páginas

Estas peças têm **um único lugar** no `styles.css`. Mexer nelas muda todas as
páginas de uma vez — é o que mantém o site consistente:

| Peça | Classe | Onde aparece |
|---|---|---|
| Barra de navegação | `site-header` (+ `--light` no fundo claro) | as três páginas |
| Rodapé | `site-footer` | as três páginas |
| Botões | `btn` + estilo (`--aqua`, `--white`, `--stroke-dark`…) | todas |
| Título de seção | `section-title` (+ `--center`) | todas |
| Cartão de curso | `course-card` (+ `--vertical`) | inicial e Cursos |
| Cartão de pessoa | `person-card` | Quem Somos e Cursos |
| Carrossel com setas | `people__head` + `rail-nav` | Quem Somos e Cursos |
| Dúvidas frequentes | `faq` (+ `--inverted`) | inicial e Cursos |
| Faixa "Saiba mais" | `cta-banner` | Quem Somos e Cursos |
| Malha de quadradinhos | `dots` (+ variações) | todas |
| Tracinhos com degradê | `dash-line` (+ variações) | todas |
| Faixa deslizante | `marquee` | Quem Somos e Contato |

As imagens vieram do Figma e foram reduzidas para carregar rápido:

| Arquivo | O que é |
|---|---|
| `hero-bg.jpg` | foto de fundo da abertura |
| `cta-bg.jpg` | foto da faixa de chamadas |
| `curso-1.jpg`, `curso-2.jpg` | fotos dos cartões de curso |
| `depoimento.jpg` | foto da seção de depoimentos |
| `depoimento-autor.png` | foto pequena do aluno no depoimento |
| `transition.jpg` | foto da faixa de transição |
| `e-mec.png`, `e-mec-qr.png` | selo e QR Code do e-MEC no rodapé |
| `logo-fia-digital-badge.svg` | logo antiga em quadrado verde-água, não é mais usada — o topo agora monta a mesma caixa com CSS e o arquivo `logo-fia-digital-mark-header.svg` (veja mais abaixo) |
| `logo-fia-digital-horizontal.svg` | logo deitada (usada no rodapé) |
| `mukutu.svg` | selo da agência no fim do rodapé |
| `apple-touch-icon.png` | ícone quadrado (180×180) usado quando alguém salva o site na tela inicial do celular |
| `og-share-card.jpg` | imagem de 1200×630 que aparece quando um link do site é compartilhado no WhatsApp, LinkedIn, Facebook etc. — feita com a cara da marca (fundo escuro, malha de pontinhos, logo e a frase "A profundidade do conhecimento encontra a autonomia do digital.") em vez de reaproveitar uma foto de conteúdo |

Da página Quem Somos (todos os arquivos começam com `qs-` ou `diretor-`):

| Arquivo | O que é |
|---|---|
| `qs-slider.jpg` | 1ª foto do carrossel "Quem somos" (selo da marca por cima) |
| `qs-slider-2.jpg` | 2ª foto do carrossel "Quem somos" |
| `qs-slider-3.jpg` | 3ª foto do carrossel "Quem somos" |
| `qs-trajetoria.jpg` | foto do escritório na faixa "Nossa trajetória" |
| `qs-video-poster.jpg` | primeiro quadro das duas molduras de vídeo (enquanto o vídeo carrega) |
| `fia-video.mp4` | vídeo que toca sozinho, sem som, nas duas molduras da Quem Somos |
| `qs-marquee-1..4.jpg` | as quatro fotinhas da faixa deslizante |
| `qs-diferenciais.jpg` | foto da seção de diferenciais |
| `qs-saiba-mais.jpg` | foto da faixa "Saiba mais" |
| `diretor-*.jpg` | os quatro retratos da diretoria |
| `ico-*.svg` | ícones exportados do Figma (selo, play, setas, LinkedIn, missão, visão, valores) |
| `logo-fia-digital-mark.svg` | só a marca (sem fundo), com o ícone pintado de verde-água — usada dentro do bloco verde-escuro dos "Diferenciais" (Quem Somos), onde esse verde-água contrasta com o fundo escuro |
| `logo-fia-digital-mark-header.svg` | a mesma marca, mas com o ícone pintado de verde-escuro em vez de verde-água — usada na caixinha verde-água do cabeçalho, nas quatro páginas. Precisou ser um arquivo separado porque a cor que funciona sobre fundo escuro (verde-água) fica invisível sobre fundo verde-água — e vice-versa |
| `logo-fia-digital-tile.svg` | logo em bloco verde escuro (versão antiga, não usada mais) |
| `logo-fia-digital-card.svg` | logo em bloco branco |

Da página Cursos:

| Arquivo | O que é |
|---|---|
| `cursos-banner.jpg` | foto da faixa "Pós-Graduação & MBAs" |
| `curso-3.jpg` | foto dos cartões de pós-graduação |
| `cursos-band.jpg` | foto da faixa entre as seções |
| `prof-*.jpg` | os quatro retratos do corpo docente |
| `selo-*.png` | selos AMBA, EFMD, AACSB, MEC e QS Stars |
| `aluno-1..4.jpg` | fotos dos alunos nos depoimentos |

---

## Histórico de mudanças

- **17/09/2026** — **Botão "Carregar mais cursos" ajustado para usar o mesmo
  estilo do site, e o aviso de "nenhum curso encontrado" ganhou um visual
  mais cuidado.**
  1. **Botão consistente** — o botão "Carregar mais cursos" tinha ficado
     diferente dos outros botões do site porque faltava dizer o *tamanho*
     dele (o sistema de botões da FIA digital sempre combina um tamanho —
     pequeno, médio ou grande — com uma cor). Sem essa informação, o botão
     usava um estilo "cru", sem a altura e o respaço interno padrão. Corrigido
     usando o tamanho médio, a mesma combinação já usada nos botões
     "Graduação / Pós-graduação / MBA" do rodapé.
  2. **Aviso de "nenhum curso encontrado" redesenhado** — antes era só uma
     linha de texto solta. Agora é um cartão branco com borda verde-água (o
     mesmo estilo dos cartões de números "+46 anos" da página inicial),
     espaçamento interno generoso, um ícone de lupa, o texto centralizado e
     um link "Limpar filtros" abaixo — que tira o filtro ativo e volta a
     mostrar todos os cursos, sem precisar clicar de novo no filtro que
     estava ligado.
  - Arquivos: `cursos.html` (classe de tamanho no botão e nova marcação do
    aviso vazio), `styles.css` (visual do cartão de aviso vazio e o conserto
    para o botão "Limpar filtros" não herdar a aparência padrão do
    navegador), `script.js` (o botão "Limpar filtros" agora reaproveita a
    mesma função que os filtros já usavam para limpar a seleção).

- **17/09/2026** — **Foto nos 6 cursos que estavam sem imagem, conserto do
  filtro de modalidade e botão "Carregar mais cursos" na página Cursos.**
  1. **Fotos nos 6 cursos sem imagem** — os últimos 6 cursos da grade (Gestão
     de Projetos, Gestão de RH, Liderança e Gestão de Pessoas, Marketing,
     Mental Health e Tecnologias Emergentes) apareciam com um bloco
     verde-água no lugar da foto. A pedido do usuário, agora eles também têm
     uma das 3 fotos genéricas do site (as mesmas reaproveitadas nos outros
     12 cursos).
  2. **Consertado o filtro que não filtrava** — clicar em "Graduação",
     "Pós-graduação" ou "MBA" não escondia os outros cursos. A causa: o
     cartão de curso (`.course-card`) já tinha uma regra de estilo própria
     dizendo "sempre apareça" (`display: flex`), e essa regra ganhava do
     comando `hidden` do navegador — então o card continuava visível mesmo
     "escondido". O mesmo problema (e o mesmo conserto) já tinha acontecido
     antes com a janela de vídeo (`.lightbox`) — bastou ensinar o CSS que,
     quando o card está com `hidden`, ele deve mesmo sumir da tela.
  3. **Botão "Carregar mais cursos"** — a grade agora mostra só os 9
     primeiros cursos (do filtro que estiver ativo) e, embaixo, centralizado,
     aparece o botão "Carregar mais cursos". Cada clique mostra mais 9 e o
     botão desaparece sozinho quando não sobra mais nenhum para carregar. Os
     filtros de modalidade continuam funcionando junto: trocar de filtro
     volta a mostrar só os 9 primeiros daquela modalidade.
  - Arquivos: `cursos.html` (fotos novas nos 6 cursos e o botão "Carregar
    mais cursos"), `styles.css` (regra que corrige o `hidden` dos cartões e
    o estilo do botão), `script.js` (lógica de filtro reescrita para
    funcionar junto com a paginação de 9 em 9).

- **17/09/2026** — **Lista real dos 18 cursos e vídeo institucional do
  YouTube ligados na página Cursos e Quem Somos.**
  1. **18 cursos reais** (página Cursos) — a grade de cursos, que antes
     repetia dois títulos de exemplo, agora tem os 18 cursos de verdade, a
     partir do print que o usuário enviou: 4 MBAs (Finanças, Negócios
     Internacionais, Cibersegurança e Proteção Digital, Tecnologia e
     Transformação Digital) e 14 Pós-graduações (Administração Estratégica,
     Certificado Operador de Mercado Financeiro, Cibersegurança, Consultoria
     Empresarial, Diversidade e Cultura Organizacional, Engenharia e
     Arquitetura de Software, ESG, Formação Executiva para C-Level, Gestão de
     Projetos, Gestão de Recursos Humanos, Liderança e Gestão Estratégica de
     Pessoas, Marketing Estratégia/Tecnologia/Advertising, Mental Health e
     Qualidade de Vida no Trabalho, e Tecnologias Emergentes). O filtro
     "Graduação" continua no lugar, mas mostra a mensagem "Ainda não temos
     cursos nesta modalidade" porque nenhum curso dessa modalidade foi
     enviado ainda.
     - Como ainda não recebemos uma foto para cada um dos 18 cursos, reaproveitei
       as 3 fotos genéricas que o site já tinha (`curso-1.jpg`, `curso-2.jpg`,
       `curso-3.jpg`), alternando entre elas nos 18 cursos (veja a entrada mais
       recente abaixo — os últimos 6 também ganharam uma dessas fotos a pedido
       do usuário). Assim que você tiver uma foto própria para cada curso, é só
       me avisar (ou trocar o `src` da tag `<img>` de cada cartão em
       `cursos.html`) que eu coloco no lugar certo.
  2. **Vídeo institucional real** (página Quem Somos) — as duas molduras de
     vídeo ("A FIA" e "Vídeo institucional") agora abrem o vídeo real do
     YouTube "Por que existimos | Manifesto FIA Business School", no lugar da
     mensagem de "vídeo ainda não conectado".
  - Arquivos: `cursos.html` (grade de cursos e o bloco de dados estruturados
    `Course` no `<head>`, um por curso), `quem-somos.html` (`data-youtube` das
    duas molduras de vídeo e o bloco de dados estruturados `VideoObject`).

- **17/09/2026** — **Adicionado Schema Markup (dados estruturados) nas quatro
  páginas** — um "rótulo" invisível no código que ajuda o Google a entender o
  que é cada parte do site. Não muda nada visualmente; o efeito é só na busca.
  1. **Organização** (`EducationalOrganization`) — nas quatro páginas: diz ao
     Google que a FIA digital é uma instituição de ensino, com nome, endereço
     do site, logo e descrição.
  2. **Site** (`WebSite`) — só na página inicial.
  3. **Perguntas frequentes** (`FAQPage`) — nas três páginas que têm a seção
     "Dúvidas frequentes" (inicial, Cursos e Contato), usando o texto que já
     existia. Pode fazer essas perguntas aparecerem expansíveis direto no
     resultado de busca do Google.
  4. **Caminho de navegação** (`BreadcrumbList`) — em Quem Somos, Cursos e
     Contato, mostrando ao Google o caminho "FIA digital > Cursos", por
     exemplo.
  5. **Pessoas** (`Person`) — os quatro nomes da Diretoria executiva (Quem
     Somos) e os quatro do Corpo docente (Cursos), com nome e cargo.
  - **Ficou de fora, por enquanto:** os cursos do catálogo (ainda são exemplos
    de texto, não a lista real — ver nota em `cursos.html:97-98`), o vídeo
    institucional (ainda sem o link definitivo do YouTube) e os links de
    Instagram, YouTube e LinkedIn de todo mundo — todos ainda apontam para
    endereços genéricos (`instagram.com/`, `linkedin.com/`, sem o perfil real)
    em vez do perfil verdadeiro da FIA digital ou de cada pessoa. Assim que
    esses links forem trocados pelos de verdade, vale completar o Schema com
    eles.
  - Arquivos: `index.html`, `quem-somos.html`, `cursos.html`, `contato.html`
    (bloco `<script type="application/ld+json">` no `<head>` de cada página).

- **17/09/2026** — **Criada a página 404, completado o ícone do site (favicon)
  e feita uma imagem própria para compartilhamento nas redes (Open Graph).**
  Conferência pedida pelo usuário em seis itens técnicos de SEO: título e
  descrição de cada página e o `robots.txt` já existiam e estavam bons, sem
  necessidade de mexer. Faltavam ou estavam incompletos os outros três:
  1. **Página 404 nova** (`404.html`) — ver a descrição em "Páginas" acima.
  2. **Favicon completo** — o site já tinha o ícone em SVG
     (`images/logo-fia-digital-mark-header.svg`), mas sem um arquivo `.ico`
     de reserva (para navegadores antigos que não entendem SVG) nem um ícone
     para quando o site é salvo na tela inicial do celular. Criei os dois a
     partir do logo em quadrado verde-água já usado no site
     (`images/logo-fia-digital-badge.svg`): `favicon.ico` (na raiz do
     projeto) e `images/apple-touch-icon.png`, e adicionei as duas tags no
     `<head>` das cinco páginas (as quatro existentes + a nova 404).
  3. **Imagem de Open Graph própria da marca** — antes, cada página usava uma
     foto de conteúdo já usada no site (a foto da abertura, do escritório
     etc.) como imagem de compartilhamento. Criei uma imagem única de
     1200×630 (`images/og-share-card.jpg`) desenhada especificamente para
     esse fim — fundo escuro da marca, malha de pontinhos, o logo e a frase
     "A profundidade do conhecimento encontra a autonomia do digital." — e
     troquei o `og:image`/`twitter:image` das quatro páginas + da 404 para
     apontar para ela.
  - **Se a logo ou as cores da marca mudarem no futuro**, essas três peças
    (favicon, apple-touch-icon e a imagem de compartilhamento) precisam ser
    refeitas à mão — não são geradas automaticamente a partir do
    `styles.css`. É só pedir para o assistente para elas serem atualizadas.
  - Arquivos: `404.html` (novo), `favicon.ico` (novo),
    `images/apple-touch-icon.png` (novo), `images/og-share-card.jpg` (novo),
    `styles.css` (nova seção "Página 404": `.error-hero`, `.dots--error` e
    afins), e as tags de favicon/`og:image`/`twitter:image` atualizadas em
    `index.html`, `quem-somos.html`, `cursos.html` e `contato.html`.

- **17/09/2026** — **Página 404 refeita em fundo claro, a pedido do usuário
  (a primeira versão era em fundo escuro).** Antes de mexer direto no código,
  desenhei 4 variações de layout num quadro à parte para o usuário escolher
  — a escolhida foi a "Mint quiet": mesma composição centralizada de antes,
  só que em fundo `--mint` (verde bem claro) em vez de `--ink` (escuro), e
  com o número "404" em verde-água (`--aqua`) e o título em verde escuro
  (`--deep`) no lugar do branco.
  - **Botões menores** — trocados de `btn--lg` (88px de altura) para
    `btn--md` (70px), reaproveitando a variante de tamanho que já existe no
    site em vez de criar uma nova.
  - **Malha de pontinhos recentralizada** — a pedido do usuário, para não
    disputar espaço com o menu. Antes ela ficava colada perto do topo da
    seção (`top: 96px`), perto o bastante do cabeçalho para "brigar" com
    ele visualmente; agora ela fica centralizada na altura da seção inteira
    (`top: 50%` com `transform: translateY(-50%)`), então nunca mais chega
    perto do menu, em qualquer altura de tela.
  - **Cabeçalho da 404 passou para a versão clara** (`site-header--light`,
    a mesma usada em Quem Somos/Cursos/Contato) — necessário porque o texto
    branco do cabeçalho escuro ficava ilegível sobre o novo fundo claro. O
    botão "Entre em contato" do cabeçalho também trocou de
    `btn--stroke-white` para `btn--stroke-dark-soft`, a variante certa para
    fundo claro.
  - Arquivos: `styles.css` (`.error-hero`, `.dots--error`, `.error-hero__code`
    e `.error-hero h1`/`.error-hero__text`), `404.html` (classes dos botões
    e do cabeçalho).

- **14/09/2026** — **Consertado o "refresh" no fim da animação de abertura da
  Home.** Na primeira visita, assim que a contagem de 0% a 100% terminava e a
  foto acabava de crescer, a página inteira dava um apagão e se remontava — a
  impressão era de que o site tinha recarregado sozinho.

  Não era recarregamento: era o navegador tendo que **redesenhar a página toda
  de uma vez só**. A animação de abertura entregava o bastão derrubando tudo no
  mesmo instante — a abertura deixava de ser uma camada própria, as três travas
  de rolagem soltavam juntas, a tela branca do preloader era arrancada do HTML e,
  logo depois, quinze elementos perdiam a aceleração de vídeo ao mesmo tempo.
  Tudo isso num único quadro, com fotos de tela cheia por cima. O conserto foi
  espalhar essas etapas em quadros diferentes e deixar a ordem das camadas fixa,
  em vez de trocá-la no meio da animação.

  De quebra, a **malha de quadradinhos da abertura agora varre de verdade na
  tela**. Ela estava invisível durante a própria varredura e só acendia no fim,
  já pronta — o que também contribuía para a sensação de "recarregou". Vale para
  a Home, Quem Somos, Contato e o banner de Cursos.

  Também entraram duas limpezas: as duas fotos do carrossel da abertura saíram
  de PNG para JPEG (cerca de 540 KB a menos para baixar e abrir), e os dois links
  de ícone do navegador que apontavam para arquivos inexistentes (`favicon.ico` e
  `apple-touch-icon.png`) foram removidos das quatro páginas — davam erro 404 em
  toda visita. O ícone continua funcionando pelo logo em SVG.
  - Arquivos: `styles.css` (camada fixa do `.hero` e do `.site-header`, e as
    malhas conduzidas pela animação não repetem mais o efeito do CSS),
    `script.js` (as etapas do fim da animação agora acontecem em quadros
    separados; a malha acende junto com a varredura), `index.html` (fotos em
    JPEG) e as quatro páginas (links de ícone quebrados removidos).
  - Imagens: `images/hero-bg-2.png` e `images/hero-bg-3.png` viraram
    `images/hero-bg-2.jpg` e `images/hero-bg-3.jpg`.

- **14/09/2026** — **O link "Entre em contato conosco" do rodapé ficou maior.**
  Aquele link no fim do rodapé passou de 16px para 20px, ficando mais fácil de
  ver. Como o rodapé é o mesmo em todas as páginas, a mudança vale para o site
  inteiro.
  - Arquivos: `styles.css` (regra `.footer-contact`).

- **14/09/2026** — **A etiqueta "Arraste" sumiu de cima dos filtros de curso.**
  Na página **Cursos**, ao passar o mouse pela faixa dos botões de filtro
  (Graduação / Pós-graduação / MBA), aparecia a etiqueta "Arraste" seguindo o
  cursor — a mesma usada nos carrosséis. Como ali os botões já parecem
  clicáveis, a etiqueta atrapalhava mais do que ajudava. Ela foi removida
  **apenas dessa faixa**: o arraste com o mouse, o deslizar lateral e o clique
  nos filtros continuam funcionando exatamente como antes, e a etiqueta segue
  normal nos carrosséis de Missão/Visão/Valores, Diretoria executiva e Corpo
  docente.
  - Arquivos: `cursos.html` (a faixa de filtros ganhou a marca
    `data-drag-hint="off"`) e `script.js` (a etiqueta agora ignora qualquer
    elemento com essa marca).

- **14/09/2026** — **Os nomes nos cards de professores e diretores voltaram a
  quebrar naturalmente.** Antes havia uma regra que apertava o nome numa coluna
  estreita só para forçar a quebra em duas linhas. O efeito colateral aparecia no
  carrossel do **Corpo docente** (página Cursos) e na **Diretoria executiva**
  (página Quem Somos): nomes muito longos chegavam a três linhas, o bloco branco
  de texto crescia num card e não no outro, e a parte visível da foto ficava
  diferente em cada um. Agora o nome usa a largura do card e quebra só quando
  precisa, e o bloco branco tem a mesma altura em todos os cards — foto e área de
  conteúdo ficam alinhadas na fileira inteira. O nome também passou a reservar
  um espaço à direita para não passar por baixo do ícone do LinkedIn.

- **14/09/2026** — **A rolagem do site inteiro ficou mais suave.** Antes, girar a
  rodinha do mouse dava um "pulo" seco de uns poucos centímetros por vez. Agora
  a página desliza até onde você parou, com um movimento curto e contínuo — a
  mesma sensação de sites de estúdio e de agência. Isso vale para as quatro
  páginas, e os links que levam a um ponto da própria página (o "FAQ" no rodapé
  da Home, o "Entre em contato conosco" da Contato) também deslizam em vez de
  saltar. Detalhes de cuidado: **no celular nada mudou** — lá continua a rolagem
  nativa do aparelho, que é melhor do que qualquer coisa colocada por cima; os
  **carrosséis que rolam para o lado** (missão/visão/valores, diretoria, corpo
  docente, filtros de cursos) continuam se comportando como antes; a **animação
  de abertura da Home** trava a página enquanto roda e devolve a rolagem no fim,
  como já fazia; **quem tem "reduzir movimento" ligado** no sistema continua com
  a rolagem normal, sem efeito nenhum. O **vídeo em tela cheia** ganhou uma
  melhoria de brinde: com ele aberto, a página atrás agora fica parada (antes
  ela rolava por baixo). A biblioteca usada é o Lenis, guardada no projeto em
  `vendor/lenis.min.js`.

- **14/09/2026** — **Na página Cursos, os botões de filtro agora deslizam para o
  lado no celular.** Em telas de até 590 px de largura, "Graduação",
  "Pós-graduação" e "MBA" quebravam em mais de uma linha e ocupavam bastante
  espaço. Agora eles ficam sempre numa única faixa, e a pessoa arrasta essa faixa
  para o lado (como um carrossel) para alcançar o último filtro — com o dedo no
  celular ou segurando o botão do mouse e arrastando no computador, sem barra de
  rolagem aparecendo na tela. Enquanto arrasta, o cursor vira uma "mãozinha
  fechada" e o clique não é confundido com a seleção de um filtro. A faixa vai até a borda da tela, então o filtro
  seguinte aparece "cortado" na lateral, deixando claro que tem mais coisa para
  o lado. Acima de 590 px nada mudou.

- **14/09/2026** — **Na página Contato, o link "Entre em contato conosco" do FAQ
  agora leva ao formulário da própria página.** Antes ele apontava para a página
  de Contato — ou seja, recarregava a página em que a pessoa já estava. Agora ele
  rola suavemente até o bloco do formulário, no topo da página, com um respiro de
  90 px para o conteúdo não ficar colado na borda de cima.

- **14/09/2026** — **A coluna da esquerda do FAQ agora acompanha a rolagem.**
  Nas perguntas frequentes (Home e Contato), o título "Perguntas frequentes" e o
  bloco de contato ficavam parados no topo e sumiam da tela quando a pessoa
  descia para ler as respostas. Agora essa coluna "gruda" a 100 px do topo e
  desce junto até o fim da lista de perguntas — então, por mais perguntas que
  existam, o contato continua sempre à vista. No celular, onde as duas colunas
  viram uma só, nada mudou.

- **14/09/2026** — **As aspas dos depoimentos (página Cursos) viraram desenho e
  ganharam contorno branco.** Antes eram o caractere de aspas digitado como
  texto. Agora usam o desenho vetorial do Figma (`images/ico-aspas.svg`): a
  duas barrinhas verde-limão inclinadas com uma borda branca em volta. Ficaram
  um pouco maiores (64 × 47 px no computador, 53 × 39 px no celular) e continuam
  posicionadas em cima da linha da esquerda do cartão — o contorno branco
  "apaga" um pedacinho dessa linha, dando a impressão de um respiro na moldura
  do depoimento.

- **14/09/2026** — **Os cartões de curso ficaram clicáveis por inteiro.** Na
  página inicial e na página Cursos, antes só o "Matricule-se" levava para a
  página de Contato; agora dá para clicar em qualquer ponto do cartão — a foto,
  as tags, o título ou o espaço em branco. O cursor vira uma mãozinha em cima
  do cartão todo e, ao passar o mouse, o "Matricule-se" escurece junto com a
  borda verde e o zoom da foto que já existiam. Por baixo dos panos continua
  existindo **um único link** por cartão (bom para o Google e para leitores de
  tela); ele só foi esticado por cima do cartão inteiro. Nada mudou no texto
  nem no visual dos cartões.

- **14/09/2026** — **Os nomes dos diretores (seção "Diretoria executiva da
  FIA", na página Quem Somos) agora aparecem sempre em duas linhas.** A caixa
  do nome ficou mais estreita (195px), o que faz até os nomes curtos quebrarem
  sozinhos — "Roberto Sbragia" virou "Roberto / Sbragia". Como todos os nomes
  ocupam duas linhas, o cargo logo abaixo começa na mesma altura em todos os
  cartões. Se um nome novo for muito comprido e passar de duas linhas, basta
  aumentar um pouco esse valor em `styles.css` (`.person-card__body h3`).

- **14/09/2026** — **As duas molduras de vídeo da página Quem Somos agora
  mostram o vídeo tocando sozinho, no lugar da imagem parada.** O arquivo
  usado é `images/fia-video.mp4`. Ele começa automaticamente, fica em
  repetição, **sem som**, e continua funcionando como antes: ao clicar na
  moldura (ou no botão de play), abre a janela de vídeo por cima da página.
  A imagem antiga (`qs-video-poster.jpg`) continua sendo usada como primeiro
  quadro, enquanto o vídeo carrega.
  - Por cima do vídeo há um **véu escuro** (um filtro levemente escuro), para o
    botão de play ficar bem legível independente da cena que estiver passando.
  - **Ao passar o mouse na moldura**, o quadrado do play se preenche de
    verde-água, a setinha fica branca e a palavra **PLAY** aparece à esquerda
    dela, com o quadrado se alargando suavemente. Tudo isso com transição
    suave (começa e termina devagar).

- **14/09/2026** — **Nova animação de carregamento na página inicial, só na
  primeira vez que alguém visita o site (baseada numa sequência de quadros
  que o cliente desenhou no Figma).** Antes de a abertura (hero) aparecer,
  a pessoa vê por alguns segundos a mesma malha de quadradinhos verdes que já
  existe no site, "acendendo" da direita para a esquerda dentro de uma caixa
  do tamanho do container central do site, com uma porcentagem de 0% a 100%
  no canto inferior esquerdo. Perto do fim, no centro exato dessa malha
  aparece uma pequena janela com a própria foto de fundo da abertura, que
  cresce até cobrir a tela toda — nesse momento a malha já foi coberta por
  ela — e só então o menu, o título, os textos e os botões da abertura entram
  do jeito que já entravam antes (nada mudou nessa parte).
  - Aparece **uma vez por sessão do navegador**: se a pessoa fechar a aba/o
    navegador e voltar depois, vê a animação de novo; navegando entre as
    páginas do site na mesma visita, ela não se repete. Nunca aparece nas
    páginas Quem Somos, Cursos ou Contato.
  - Respeita o ajuste "reduzir movimento" do sistema (quem usa essa
    preferência não vê a animação, a página já aparece pronta) e, se o GSAP
    não carregar por qualquer motivo, o site cai direto no comportamento de
    sempre, sem travar nem mostrar uma tela em branco.
  - Não usa nenhuma biblioteca nova — reaproveita o GSAP que o site já
    carrega e a técnica de "clip-path" (recorte) que o próprio carrossel da
    abertura já usa para trocar de foto.
  - A porcentagem usa o mesmo tamanho e peso de letra do título grande da
    abertura (H1), em verde escuro, no canto inferior esquerdo da caixa.
  - Dois detalhes importantes de manutenção (foram os dois bugs da primeira
    versão, então vale não repetir):
    1. Essa malha do pré-loader é a única do site que **não** usa o atributo
       `data-reveal`. Aquele atributo traz junto uma regra que deixa o
       elemento invisível até o site somar a classe `is-revealed` — e aqui
       quem comanda a revelação é a animação do pré-loader. Se alguém
       adicionar `data-reveal` nessa malha, ela some da tela inteira.
    2. O crescimento da foto **não** anima os quatro lados do recorte
       separadamente: anima o *lado de um quadrado* e o script converte isso
       em recorte a cada quadro. Parece detalhe, mas é o que mantém a janela
       quadrada durante todo o percurso. Animando os quatro lados, ela assume
       a proporção da abertura quase de imediato — no computador passa
       despercebido (a abertura é larga), mas no celular, onde ela é bem mais
       alta que larga, virava uma tira vertical esticada.
    3. A posição do quadradinho é **medida**, não fixa: o script descobre
       onde está o quadradinho mais central da malha (lendo o tamanho e o
       passo direto do CSS) e recorta exatamente ali. Um valor fixo não
       funciona porque a malha e a abertura têm centros diferentes, e a malha
       ainda é alinhada pela borda direita.
  - Arquivos: `index.html` (marcação nova logo no início do `<body>`, e o
    script no `<head>` que decide se mostra ou não), `styles.css` (regras
    `.preloader`, `.preloader__stage`, `.preloader__pct`,
    `.dots--preloader`), `script.js` (nova função `runPreloader`, e a
    entrada da abertura foi reorganizada numa função `runHeroEntrance` para
    poder rodar só depois que essa animação termina, quando ela acontece).

- **14/09/2026** — **Malha de pontinhos da seção "Sobre" não invade mais
  atrás do título.** A faixa da direita (que cobre a largura toda da seção,
  por baixo de tudo) ficava com um pouco de opacidade bem na região onde o
  título fica por cima — dava pra notar quadradinhos "vazando" entre as
  linhas do texto. Deixei essa região praticamente invisível (quase 0% de
  opacidade) até passar do título; só depois disso a malha volta a subir
  normalmente até ficar sólida na borda direita.
  - Arquivo: `styles.css`, variável `--fade` de `.dots--about`.

- **14/09/2026** — **Ajustes finos na malha de pontinhos da seção "Sobre"
  (Home): quadradinhos maiores do lado direito e cor sólida do lado
  esquerdo.**
  1. Os quadradinhos da faixa da direita (a mais visível, perto da borda da
     página) ficaram um pouco maiores, só nessa faixa — as outras malhas do
     site continuam do tamanho de sempre.
  2. A faixa da esquerda (a nova, ao lado do título) deixou de usar o
     degradê limão-verde-água e passou a usar uma única cor sólida
     (`#c7faba`), como pediu o usuário.
  - Arquivo: `styles.css`, regras `.dots--about` (variável `--sq`) e
    `.dots--about-left` (variável `--dot-grad`).

- **14/09/2026** — **Cor do degradê dos quadradinhos ajustada para bater com
  o Figma.** O primeiro tom (limão) começava totalmente transparente, o que
  deixava a cor de cada quadradinho meio "lavada" perto do início da malha.
  Conferi o painel de cores do Figma e os dois tons devem ser sólidos (sem
  transparência): limão (`#c2fa75`) a partir de 4% do degradê, e verde-água
  (`#08e7c7`) até o final (100%). Como esse degradê é compartilhado por toda
  malha de pontinhos do site (abertura, "Sobre", faixa de transição, Cursos,
  Contato etc.), o ajuste vale para todas de uma vez.
  - Arquivo: `styles.css`, variável `--grad-dots`.

- **14/09/2026** — **Malha de pontinhos da seção "Sobre" (Home) ganhou uma
  faixa também do lado esquerdo do título, só no computador.** Conferi o
  arquivo do Figma e a malha de quadradinhos dessa seção não era só a faixa
  da direita que já existia — tinha uma segunda faixa, menor, do lado
  esquerdo do título, com o esmaecimento invertido (mais visível na borda
  esquerda da página, sumindo conforme se aproxima do título). Adicionei essa
  faixa que faltava, com a mesma técnica das outras malhas do site.
  - Isso só aparece em telas de computador (acima de 1200px de largura),
    porque é só nesse tamanho que a seção "Sobre" tem aquele recuo extra de
    109px à esquerda (ver changelog de 10/09/2026) que abre espaço pra essa
    faixa existir. No tablet e no celular continua igual a antes.
  - Arquivos: `index.html` (nova `<div class="dots dots--about-left">`,
    dentro da seção "Sobre") e `styles.css` (nova regra `.dots--about-left`).

- **14/09/2026** — **Ajustes na página Quem Somos: espaço acima do título de
  abertura e recuo do texto "Quem somos".**
  1. **Espaço antes do título** — na faixa de abertura (a área branca com os
     quadradinhos, antes de "A herança da excelência..."), o espaço entre o
     menu e o título estava bem maior do que na página Cursos. Reduzimos a
     altura mínima dessa faixa para que o espaço fique igual ao da Cursos.
     - Arquivo: `styles.css`, regra `.qs-hero` (`min-height` de `650px` para
       `530px`).
  2. **Recuo do texto "Quem somos"** — o parágrafo ao lado do carrossel de
     fotos (logo abaixo do título) agora começa com o mesmo recuo à esquerda
     que o texto da seção "Sobre" tem na página inicial, em vez de ficar
     colado na margem da página.
     - Arquivo: `styles.css`, nova regra `.qs-intro__row .prose-block`
       (`margin-left: 109px`, removido em telas de laptop e menores, a partir
       de 1280px de largura, para não espremer o texto contra a foto).

- **14/09/2026** — **Quadradinhos verdes agora ficam colados na borda direita,
  sem cortar nem sobrar vão, em três faixas: abertura da Home, "Sobre" (Home) e
  abertura da Quem Somos.** Nessas três faixas, a malha de quadradinhos tem
  largura flexível (acompanha o tamanho da tela) e é desenhada para ficar bem
  visível do lado direito, esmaecendo para o lado esquerdo. Dois problemas
  foram corrigidos em sequência, os dois pela mesma causa raiz — a "grade" de
  quadradinhos sempre começava a se desenhar a partir da esquerda da caixa:
  1. Em certas larguras de tela, o quadradinho bem na borda direita (o mais
     visível de todos) ficava **cortado ao meio**.
  2. Ao corrigir isso ancorando a grade pela direita, sobrou um **vão vazio**
     antes da borda (cada quadradinho ocupa só uma cantinho da sua célula da
     grade, então ancorar pela célula inteira deixava ~65-80px de espaço em
     branco até a borda, em vez do quadrado ficar "grudado" nela).
  Agora a grade é ancorada exatamente pelo próprio quadradinho (não pela
  célula), então ele sempre termina rente à borda direita, sem vão e sem
  corte, em qualquer largura de tela. Se algum quadrado for cortado, é um dos
  da esquerda, onde a malha já está quase invisível pelo esmaecimento.
  - Arquivo: `styles.css`, regras `.dots--hero`, `.dots--about` e
    `.dots--qs-hero` (propriedade `mask-position:
    calc(100% + var(--pitch-x) - var(--sq)) top`).

- **14/09/2026** — **Etiqueta "Arraste" do carrossel (Quem Somos, Missão/Visão/
  Valores): respiro menor, some sobre links e setas iguais às dos botões do
  site.** Três ajustes na etiqueta que segue o cursor ao passar o mouse pelo
  carrossel. Como é um único elemento reaproveitado nos três carrosséis que se
  arrastam com o mouse, os três ajustes também valem para "Diretoria
  executiva" (Quem Somos) e "Corpo docente" (Cursos).
  1. **Respiro reduzido** — o espaço em branco ao redor do texto e das setas
     diminuiu.
  2. **Some sobre links** — ao passar o mouse por cima de um link dentro do
     carrossel (como o ícone do LinkedIn nos cartões da diretoria), a
     etiqueta desaparece, pra não tampar o cursor de "mãozinha" nem atrapalhar
     o clique; volta a aparecer assim que o cursor sai do link mas continua
     sobre o carrossel.
  3. **Setas trocadas duas vezes** — primeiro pela mesma seta fina dos botões
     de "anterior/próximo" (Diretoria/Corpo docente); depois, a pedido,
     trocadas de novo pelo ícone "pixelado" (feito de pequenos losangos) que
     já é a seta padrão de todos os outros botões do site (o mesmo de "Entre
     em contato", por exemplo) — agora as três setas do site usam
     exatamente o mesmo desenho, só a da esquerda espelhada.
  - Arquivos: `styles.css` (regra `.drag-hint`, respiro reduzido de `15px
    24px` para `9px 18px`, e `.drag-hint__arrow--left svg` espelhando o
    ícone para a seta da esquerda), `script.js` (ícone das setas e a checagem
    de link dentro da etiqueta, seção "Dica Arraste").

- **14/09/2026** — **Espaço vazio indevido nas perguntas fechadas do FAQ no
  celular.** Em telas menores que 768px, cada pergunta do FAQ (seção "Dúvidas
  frequentes") deixava um espaço em branco embaixo mesmo fechada, sem a
  resposta aparecer. O respiro (padding) da resposta estava sendo aplicado na
  caixa de fora do item, que não encolhe a zero quando fechado, em vez de no
  texto de dentro, que é o que realmente fica escondido. Agora o respiro está
  no texto, igual já era feito nas telas maiores — a resposta só ocupa espaço
  quando a pergunta é clicada e aberta.
  - Arquivo: `styles.css` (regra `.faq-item__a` dentro do bloco para telas
    até 760px, trocada para `.faq-item__a p`).

- **14/09/2026** — **Linhas decorativas da seção "Depoimentos" (Home) não cruzam
  mais por cima do texto no celular.** Essas duas linhas com degradê, uma
  acima de "Depoimentos de alunos" e outra abaixo de "Histórias de impacto
  real", estavam posicionadas em relação ao tamanho inteiro da foto. Em
  telas pequenas a foto encolhe de um jeito que o texto não acompanha na
  mesma proporção, e a linha de baixo acabava caindo bem em cima do título.
  Agora as duas linhas fazem parte do mesmo bloco do texto — ficam sempre
  coladas acima e abaixo dele, alinhadas pela esquerda, com um puxão sutil
  para fora (efeito do Figma) — então acompanham o texto em qualquer
  tamanho de tela e nunca mais passam por cima dele.
  - Arquivos: `index.html` (linhas das duas `span.dash-line` movidas para
    dentro de `div.testimonials__caption`), `styles.css` (regras
    `.dash-line--quote-1` e `.dash-line--quote-2`).

- **14/09/2026** — **Setas do carrossel de depoimentos reposicionadas no
  celular.** Abaixo de 760px de largura, as setas para trocar de depoimento
  ("Depoimentos de alunos", página inicial) ficavam coladas no canto direito
  da faixa verde-água, meio soltas. Agora elas ficam alinhadas à esquerda,
  logo abaixo do nome do autor do depoimento — e com um espaço maior acima
  delas, para não parecerem coladas no texto. Também igualei o respiro
  abaixo das setas ao respiro que já existia no topo da faixa (antes a faixa
  reservava um espaço extra grande embaixo, pensado para as setas coladas no
  rodapé; como elas não estão mais lá, esse espaço sobrava vazio).
  - Arquivo: `styles.css` (bloco `@media (max-width: 760px)`, regras
    `.testimonials__panel` e `.quote__nav`).

- **14/09/2026** — **Tracinho decorativo dos cartões de curso (Home) agora
  cruza por cima da foto e da área branca do cartão, em vez de sumir na
  metade.** Nos dois cartões da seção "Cursos" da página inicial, esse
  tracinho com degradê foi desenhado para começar em cima da foto e
  atravessar até a parte branca do cartão — mas a foto tinha um recorte
  (`overflow: hidden`) que também cortava o tracinho, escondendo boa parte
  dele. Agora só a foto é recortada (para o zoom do hover continuar contido
  certinho); o tracinho ficou livre para aparecer inteiro, por cima de tudo,
  exatamente na mesma posição de antes. Não mexe nos cartões da página
  Cursos, que não têm esse tracinho.
  - Arquivos: `index.html:163-166,191-194`, `styles.css:703-730,1263`.
  - **Ajuste seguinte:** abaixo de 768px de largura (celular), esse mesmo
    tracinho passou a ficar **escondido**. Nessa largura o cartão empilha
    (foto em cima, texto embaixo) e o tracinho, pensado para cruzar da foto
    para o texto lado a lado, perde o sentido separando os dois blocos
    empilhados. Arquivo: `styles.css:737-741` (novo bloco), `styles.css:1264`
    (removida a reposição que só valia nesse tamanho de tela).

- **12/09/2026** — **Dois títulos de banner ganharam a mesma entrada "palavra
  por palavra" do título grande da abertura.** São eles: a frase da faixa
  "Nossa trajetória" (foto do escritório, Quem Somos) e o título da faixa
  "Saiba mais" (que se repete em Quem Somos, Cursos e Contato, já que é uma
  peça compartilhada — por isso a mudança apareceu nas três páginas de uma
  vez, para não ficar inconsistente). Antes esses dois textos só apareciam
  prontos; agora, ao rolar a página até eles pela primeira vez, cada palavra
  sobe de baixo para cima em sequência rápida — o mesmo efeito que já existia
  só no título grande da abertura de cada página, reaproveitando a mesma
  técnica (GSAP SplitText) e a mesma velocidade/curva. Continua respeitando o
  ajuste "reduzir movimento" do sistema e funcionando normalmente sem
  JavaScript (o texto já aparece pronto nesses casos).
  - Arquivos: `quem-somos.html:116,258`, `cursos.html:499`, `contato.html:203`
    (atributo `data-split-reveal` nos dois parágrafos), `script.js` (nova
    seção 11) e `styles.css` (perto do bloco "Revelar ao rolar").

- **12/09/2026** — **Foto da seção "Quem somos" virou um carrossel automático
  de 3 fotos, igual ao efeito da abertura da Home.** Antes era uma única foto
  fixa; conferi o arquivo do Figma e o componente realmente tinha 3 fotos
  desenhadas para essa faixa — só a primeira estava sendo usada. Agora as 3
  trocam sozinhas a cada 7 segundos, com o mesmo efeito da Home (a foto atual
  escurece e "abre" de um lado para o outro revelando a próxima, que já entra
  com um leve zoom contínuo). O selo branco com a marca continua fixo,
  sempre por cima das fotos, sem se mover. As duas fotos novas
  (`qs-slider-2.jpg`, `qs-slider-3.jpg`) vieram recortadas do próprio Figma,
  do mesmo jeito que a primeira.

- **11/09/2026** — **SEO lote 3 — performance de imagens e limpeza de links do rodapé (`loading="lazy"`, `width`/`height`, `href="#"`).**
  - **`loading="lazy"` + `decoding="async"`** em 79 imagens abaixo da dobra (15 em `index.html`, 36 em `quem-somos.html`, 26 em `cursos.html`, 13 em `contato.html`). As imagens LCP (`hero-bg.jpg` em `index.html:43` e `cursos-banner.jpg` em `cursos.html:56`) continuam `eager` com `fetchpriority="high"` para não atrasar o primeiro paint. Logos do cabeçalho/rodapé continuam `eager`.
  - **`width`/`height`** adicionados em todas as imagens que não tinham (era 8 em Home, 18 em Quem Somos, 13 em Cursos, 9 em Contato — agora 0 faltantes), usando as dimensões reais de cada arquivo (ex.: `hero-bg.jpg 1920×1024`, `curso-1.jpg 700×559`, `prof-carlos-furlanetti.jpg 526×700`, `qs-marquee-*.jpg 256×320/320×256`). Corrige CLS (layout shift) no Lighthouse.
  - **`href="#"` removidos do rodapé:** os 7 placeholders por página (`Blog FIA`, `Biblioteca`, `Ouvidoria`, `Código de conduta`, `Portal da transparência`, `Políticas de Privacidade/Cookies` em `index.html:415`) viraram `<span class="footer-links__disabled" aria-disabled="true">` / `<span class="footer-policies__disabled">` com estilo `opacity .45` em `styles.css:1079`. `FAQ` (`href="#faq"`) foi mantido. Resultado: `href="#"` de 28 → 0 no site, sem links quebrados para o Google rastrear.
  - Arquivos: `index.html:43,113,143,207,322`, `quem-somos.html:61,87,128,218,261,328`, `cursos.html:56,84,245,275,341,366,473`, `contato.html:102,178`, `styles.css:1079`.

- **11/09/2026** — **Auditoria e correções de SEO — lote 1 e 2 (canonical, OG/Twitter, titles/descriptions, robots/sitemap, links externos).**
  - **Títulos e descrições otimizados** nas 4 páginas para ficarem dentro do limite ideal (título 50-60 caracteres, descrição 120-155) e incluírem palavras-chave de EAD e MEC:
    - `index.html` — título `55` caracteres `FIA digital — Pós-graduação, MBA e Graduação EAD online` (antes 51, sem EAD) e descrição `136` caracteres com `nota máxima no MEC` (antes 152).
    - `quem-somos.html` — título `50` caracteres `Quem Somos — FIA digital | FIA Business School EAD` (antes 24, muito curto) e descrição `153` com `46 anos` + `nota máxima no MEC`.
    - `cursos.html` — título `54` caracteres `Cursos EAD — FIA digital | Graduação, Pós e MBA Online` (antes 20) e descrição `136` (antes 123) — agora menciona `nota máxima no MEC`.
    - `contato.html` — título `49` caracteres `Contato — FIA digital | Fale com um consultor EAD` (antes 21) e descrição `149` (antes 116) com `cursos EAD` e `atendimento para empresas`.
  - **Canonical + Open Graph + Twitter Cards + theme-color + favicon** em todas as páginas: `index.html:8`, `quem-somos.html:8`, `cursos.html:8`, `contato.html:8`. Cada página agora tem `rel="canonical"` apontando para `https://www.fiadigital.com.br/...`, `og:type/locale/site_name/url/title/description/image` (imagem 1200×630) e `twitter:card/title/description/image`. `theme-color #02ab95` e `favicon.ico` + `logo-fia-digital-mark-header.svg` + `apple-touch-icon.png`.
  - **Links externos com segurança:** Instagram/LinkedIn/YouTube e os LinkedIns da diretoria/docentes (`index.html:341`, `quem-somos.html:348`, `cursos.html:282`) agora têm `target="_blank" rel="noopener noreferrer"`.
  - **Arquivos de rastreamento criados:** `robots.txt` (Allow + Sitemap) e `sitemap.xml` com as 4 URLs, `priority` 1.0 para Home e 0.9 para Cursos. Troque `https://www.fiadigital.com.br` pelo domínio final quando ele for definido.
  - **O que ainda ficou pendente da auditoria** (próximos lotes): JSON-LD (Organization/Course/FAQPage), `loading="lazy"` nas imagens, `width`/`height` faltantes, `href="#"` no rodapé, conversão dos PNGs de 1 MB para WebP e heading `h1→h3` em Cursos.

- **11/09/2026** — **Animação de entrada do hero da Home (GSAP timeline completa).** O hero agora tem uma entrada orquestrada em uma única `gsap.timeline`, seguindo as diretrizes `animate` + `apple-design`: só `transform`/`opacity`, curva `--ease-out: cubic-bezier(0.23,1,0.32,1)` (`power3.out` no GSAP), durações curtas e `prefers-reduced-motion` respeitado.
  1. **Carrossel primeiro** — `hero__media` faz `opacity 0→1 + y 6→0 (0.65s)` e a primeira imagem dá um leve `scale 1.04→1 (1.05s)` antes do zoom contínuo começar.
  2. **Header** — desliza de cima para baixo suave `y -22→0 + opacity (0.56s)`, começando em 0.30s (sobreposto ao fade do fundo).
  3. **H1 com SplitText** — cada palavra sobe de baixo para cima `yPercent 110→0 + opacity`, `stagger 0.038s` bem rápido, `duration 0.62s` por palavra, começando em 0.42s. Usa `GSAP SplitText` (agora 100% free, carregado via `cdn.jsdelivr.net/npm/gsap@3.12.5/dist/SplitText.min.js` antes do `script.js`); cada palavra é envolvida em `.word-wrap` com `overflow:hidden` para o clip. Sem JS ou sem GSAP o H1 já aparece pronto (fallback).
  4. **Conteúdo** — `hero__kicker` (0.55s) e `hero__text` (0.62s) sobem `y 14→0 + opacity 0→1 (0.50s)` quase juntos, mas com leve delay após o header.
  5. **Botões** — dois `.btn` de `hero__actions` sobem `y 12→0 + opacity` com `stagger 0.07s` entre eles, começando em 0.68s.
  6. **Dots por último** — `dots--hero` faz a varredura `--reveal 0%→100% (0.90s)` apenas em 0.95s, no final de tudo (antes entrava junto com o fundo). O `IntersectionObserver` do `data-reveal-group` foi ajustado para não revelar os dots do hero prematuramente — a timeline é quem adiciona `is-revealed` no `onComplete`.
  - O carrossel rotativo (wipe a cada 10s) agora espera a entrada terminar (`heroEntranceDuration + 120ms`) antes de iniciar o `HOLD_MS/WIPE_MS`, evitando dois transforms simultâneos no primeiro frame.
  - `will-change` é ligado só durante a timeline e limpo no `onComplete`; sem JS a classe `js-hero-preload` (injetada síncrona no `<head>`) nunca entra, então nada fica escondido. Com `prefers-reduced-motion` a entrada vira só `opacity` sem `translateY`/`stagger`.
  - Arquivos: `index.html:11` injeta `js-hero-preload` e `index.html:420-421` carregam `gsap.min.js` + `SplitText.min.js`; `styles.css:44` cria `--ease-out` e `styles.css:266-285` define os estados `js-hero-preload` e `.word-wrap`; `script.js:8-142` cria a timeline.

- **11/09/2026** — **Dica "Arraste" acompanhando o cursor nos três carrosséis
  que se arrastam com o mouse** (Missão/visão/valores e Diretoria executiva em
  Quem Somos, Corpo docente em Cursos). Ao passar o mouse por cima de qualquer
  um desses carrosséis, no computador, aparece uma pequena etiqueta branca com
  borda fina verde-água, setas verdes "pixeladas" (os mesmos blocos quadrados
  usados na seta dos botões do site) dos dois lados e a palavra "ARRASTE" em
  cinza no meio, seguindo o cursor com um leve atraso suave (como se ela
  "corresse atrás" do ponteiro em vez de grudar nele) e um fade elegante ao
  aparecer e sumir da tela. Só existe um elemento desses por página,
  reaproveitado nos carrosséis dela.
  - Aparece só no computador, com mouse de verdade — some sozinho em
    tablets/celulares e em qualquer tela sensível ao toque, mesmo que a
    largura da janela seja grande (checa isso de duas formas ao mesmo tempo,
    então mesmo se uma delas falhar a outra ainda protege).
  - De quebra, o carrossel da **Diretoria executiva** (Quem Somos) passou a
    poder ser **arrastado com o mouse**, igual aos outros dois — antes só
    respondia ao gesto do trackpad/scroll, então a nova dica de "arraste"
    ficaria enganosa nele se o arraste de verdade não funcionasse.
  - Respeita o ajuste "reduzir movimento" do sistema: quem usa essa
    preferência não vê a dica.

- **11/09/2026** — **Malha de pontinhos agora aparece suavemente ao rolar a
  página, em vez de já nascer pronta.** Em todas as faixas que têm a malha de
  quadradinhos verdes (abertura, "Sobre", faixa de transição, "Pós-Graduação &
  MBAs", faixa de imagem, mural de depoimentos, "Diferenciais" e outras), a
  malha agora some com um fade suave (opacity) e, ao mesmo tempo, os
  quadradinhos "acendem" em sequência da esquerda para a direita — uma
  varredura que dá a sensação de que eles vão aparecendo um a um, em vez de
  surgir tudo de uma vez. O efeito dispara sozinho na primeira vez que cada
  faixa entra na tela, reaproveitando o mesmo sistema de "revelar ao rolar"
  já usado nos cartões do site, e respeita o ajuste "reduzir movimento" do
  sistema (quem usa essa preferência já vê a malha pronta, sem animação).

- **11/09/2026** — **Texto da faixa "Pós-Graduação & MBAs" (Cursos) corrigido no
  tablet e no celular.** Nessas larguras, o título e o texto dessa faixa
  escura estavam "subindo" para o topo da foto, em vez de ficarem colados
  embaixo como no computador — e aí caíam numa parte mais clara da foto,
  prejudicando a leitura do texto branco. A causa: no computador, a malha de
  pontinhos decorativa (que já é escondida no tablet e no celular desde um
  ajuste anterior) também servia, sem querer, para "empurrar" o texto para
  baixo dentro da faixa; ao sumir, o texto perdia esse empurrão e voltava para
  cima. Agora o texto é sempre colado na base da faixa, em qualquer tamanho de
  tela, igual ao computador.

- **11/09/2026** — **Dois ajustes no logo do cabeçalho e na cascata dos cards
  de curso**, depois da mudança de animações abaixo:
  1. **Logo do topo estava ilegível.** Ao separar o fundo do desenho da marca
     (mudança descrita logo abaixo), usei sem perceber o mesmo arquivo de
     ícone que já existia para o bloco "Diferenciais" — só que aquele ícone é
     pintado de verde-água, cor que funciona sobre o fundo verde-escuro do
     bloco "Diferenciais", mas fica **invisível** sobre a caixa verde-água do
     cabeçalho (verde-água em cima de verde-água). Criei um segundo arquivo
     (`logo-fia-digital-mark-header.svg`) com o ícone pintado de verde-escuro
     — a mesma combinação de cores do logo original — e o cabeçalho das
     quatro páginas passou a usar esse novo arquivo. O hover da caixa também
     mudou de verde-limão para um verde-água mais escuro (a mesma cor que já
     era usada no botão "Conheça cursos FIA"), porque o texto branco "digital"
     ficava difícil de ler em cima do verde-limão.
  2. **Cards de curso não entravam em cascata.** Ao adicionar o contorno que
     acende no hover, uma configuração nova acabou sobrescrevendo sem querer
     a configuração que fazia os cards de curso aparecerem suavemente — eles
     continuavam aparecendo, só que sem a transição suave (na hora, sem
     aviso). Corrigido: agora as duas coisas funcionam juntas.

- **11/09/2026** — **Instalada a caixa de ferramentas de animação e adicionadas
  animações de entrada e de hover nas quatro páginas** (a abertura/hero ficou
  de fora por enquanto — está sendo desenhada à parte).
  1. **Números que sobem contando.** Os cartões "+46 anos" e "+150 mil" (Home
     e Quem Somos) agora contam a partir de zero até o número final assim que
     a pessoa rola até eles, em vez de aparecerem prontos.
  2. **Cartões aparecendo em cascata ao rolar.** Nas grades de cursos (Home e
     Cursos), no mural de depoimentos (Cursos) e nos três carrosséis que
     rolam de lado (Missão/Visão/Valores, Diretoria e Corpo docente, ambos em
     Quem Somos e Cursos), os cartões agora surgem suavemente um pouco depois
     do outro na primeira vez que a pessoa rola até ali, em vez de aparecerem
     todos de uma vez.
  3. **Perguntas frequentes abrindo e fechando suavemente.** Antes a resposta
     aparecia e sumia na hora, sem transição; agora ela desliza suavemente ao
     abrir e fechar.
  4. **Hover novo nos cartões de curso.** Ao passar o mouse em qualquer
     cartão de curso (Home e Cursos), a borda dele acende em verde-água e a
     foto dá um leve zoom para dentro do próprio cartão, sem vazar para fora.
     Para isso funcionar direito, troquei a "borda grossa branca" que só
     servia para dar respiro à imagem por um espaçamento (padding) de
     verdade, com uma borda fina que fica invisível em repouso e só aparece
     no hover.
  5. **Pergunta do FAQ reage ao passar o mouse.** O texto da pergunta muda
     para verde-água ao passar o mouse — antes nada acontecia.
  6. **Logo do cabeçalho refeito, agora com hover.** O logo do topo (nas
     quatro páginas) era uma imagem única com o fundo verde-água "desenhado
     dentro" dela. Refiz do mesmo jeito que já era feito no bloco de
     "Diferenciais" (Quem Somos): uma caixa com a cor aplicada pelo site e só
     a marca dentro, separada. Visualmente ficou igual a antes, mas agora,
     ao passar o mouse, a caixa acende em verde-limão — o mesmo hover que já
     existe nos botões, no rodapé e no menu.
  - Todas essas animações são discretas, combinando com o tom sério e
    moderno da marca, e respeitam o ajuste "reduzir movimento" do sistema —
    quem usa essa preferência não vê nenhuma delas, o conteúdo já aparece
    pronto.

- **11/09/2026** — **Desfoque no fundo do botão "Falar com consultor" (Home).**
  Esse botão fica sobre a foto de fundo da abertura, com um fundo preto
  semitransparente. Agora esse fundo também desfoca a foto atrás dele (efeito
  "vidro fosco"), deixando o texto branco mais legível. O desfoque some ao
  passar o mouse, quando o botão fica com fundo sólido verde-limão.

- **11/09/2026** — **Hover mais suave no botão "Matricule-se" (Home e Cursos).**
  Antes, ao passar o mouse, só o texto mudava de cor (e na hora, sem
  transição) — a setinha ao lado ficava sempre verde-água, destoando do
  texto. Agora a mudança de cor é suave (com uma transição) e a seta muda de
  cor junto com o texto.

- **11/09/2026** — **Rodapé "sobrepõe" a última faixa antes dele, em Home,
  Cursos e Contato.** A última faixa antes do rodapé, quando é uma foto larga,
  agora fica parada na tela por um instante enquanto você continua rolando, e
  o rodapé desliza por cima dela, como uma cortina cobrindo a foto aos poucos
  — em vez de as duas simplesmente se sucederem uma atrás da outra.
  - **Home:** a faixa de transição (foto do grupo estudando).
  - **Cursos e Contato:** a faixa "Saiba mais" (foto com a frase e o botão),
    que nessas duas páginas é a última coisa antes do rodapé.
  - **Quem Somos não tem esse efeito.** Nessa página a última faixa antes do
    rodapé é "Vídeo institucional" (texto + vídeo, não uma foto), e a altura
    dela muda muito conforme o tamanho da tela (o texto quebra em mais ou
    menos linhas). Travar essa altura para o efeito funcionar arriscaria
    cortar o texto se ele crescer no futuro, então combinamos deixar essa
    página do jeito que já estava. A mesma faixa "Saiba mais" também aparece
    no meio da página Quem Somos (antes da Diretoria executiva) — lá ela
    continua normal também, já que o efeito só vale para quando ela é a
    última faixa da página.

- **11/09/2026** — **Foto de fundo da abertura (Home) agora roda entre 3
  imagens, com zoom suave e escurecida na troca.** A foto de fundo da
  abertura da página inicial não é mais fixa: agora ela alterna entre **3
  imagens em loop**, cada uma ficando visível por 10 segundos.
  - Cada foto começa a se aproximar bem devagar (um leve zoom, como se a
    câmera se aproximasse aos poucos) ainda durante a troca — quando ela já
    está 80% visível — e continua até o momento exato em que ela mesma está
    prestes a sair de cena. Começar um pouco antes de estar 100% visível
    evita a sensação de que o zoom "parou" durante a troca.
  - Na troca, a foto atual escurece levemente enquanto "abre" de um lado
    para o outro, revelando a próxima por trás (em vez de simplesmente
    sumir).
  - A primeira imagem que aparece ao carregar a página continua sendo a foto
    de sempre. As outras duas (`images/hero-bg-2.png` e
    `images/hero-bg-3.png`) são fotos de validação para testar o efeito — se
    quiser manter fotos diferentes na versão final, é só trocar esses dois
    arquivos na pasta `images/` (mesmo nome, mesmo lugar) que o carrossel
    passa a usá-las automaticamente. Veja o item correspondente em "Ainda
    falta fazer".

- **11/09/2026** — **Aspas do depoimento mais próximas do texto, e troca entre
  depoimentos mais suave.** Na seção "Histórias de impacto real" da página
  inicial:
  1. A aspa decorativa verde-limão que fica ao lado do depoimento estava um
     pouco afastada do texto — agora fica mais colada, no computador e no
     celular.
  2. Antes, ao clicar nas setas para trocar de depoimento, o texto anterior
     sumia na hora e o novo aparecia com um único efeito de aparecer por
     inteiro. Agora o depoimento atual desaparece suavemente primeiro, e o
     próximo aparece peça por peça, em sequência (a aspa, depois o nome do
     curso, depois o texto, depois a foto e o nome do aluno) — um efeito mais
     elegante conhecido como "stagger". Quem usa o ajuste "reduzir movimento"
     do sistema continua vendo a troca instantânea, sem animação.

- **11/09/2026** — **Pontinhos não invadem mais o formulário de Contato no
  notebook.** Na página Contato, a malha de pontinhos decorativa embaixo do
  texto de abertura tinha um tamanho fixo que, em telas de notebook (por volta
  de 1024px de largura), esticava até em cima do campo "Mensagem" do
  formulário. Agora, do notebook até o tablet (1280px de largura para baixo),
  os pontinhos somem antes de chegar perto do formulário — igual já acontece
  com outros enfeites decorativos do site nessas larguras. No computador
  (acima de 1280px) e no tablet/celular (onde o formulário já fica embaixo do
  texto) nada mudou.

- **11/09/2026** — **Nove ajustes finos (Início, Quem Somos e Cursos).**
  1. **Seta pixelada nos botões.** A setinha "›" que aparece em vários botões
     (como "Conheça nossos cursos" e "Entre em contato") agora é feita de
     pequenos blocos, no mesmo estilo "pixelado" da seta que já existia ao lado
     de "Matricule-se" — em vez de um traço liso.
  2. **Título e etiquetas mais próximos no cartão de curso da Página Inicial.**
     Nos dois cartões da seção "Cursos" da página inicial, o espaço entre as
     etiquetas (ex: "MBA") e o título do curso diminuiu, deixando os dois
     visualmente mais colados — igual já acontecia nos cartões da página
     Cursos.
  3. **Carrossel da diretoria "gruda" certo no celular.** Na página Quem
     Somos, no celular, cada cartão da diretoria agora ocupa a largura certa
     da tela e para exatamente alinhado com a margem a cada vez que se rola —
     antes ficava com pedaços cortados nos cantos.
  4. **Gradiente da malha de pontos corrigido na faixa de imagem.** Na página
     Cursos, a malha de pontinhos ao lado da foto entre o catálogo e o corpo
     docente não tinha o efeito de degradê (de forte para fraco) que as
     outras malhas do site já têm. Corrigido para usar a mesma combinação de
     cores das demais.
  5. **Corpo docente: arrastar com o mouse e "colar" no próximo professor.**
     O carrossel de professores agora pode ser arrastado com o mouse (igual
     ao de "Missão, Visão e Valores"), e cada rolagem para exatamente no
     começo do próximo cartão, em vez de parar em qualquer ponto.
  6. **Setas do corpo docente abaixo do carrossel, no tablet e no celular.**
     Nessas larguras, as setas de "anterior/próximo" agora aparecem depois
     dos cartões de professores, alinhadas à esquerda — antes ficavam entre o
     título e os cartões.
  7. **Mais espaço entre os depoimentos no tablet e no celular.** Os cartões
     de "Histórias de impacto real" ganharam mais respiro entre si nessas
     larguras.
  8. **Pontinhos do banner escondidos no tablet e no celular.** A malha de
     pontos sobre a foto escura do topo da página Cursos ("Pós-Graduação &
     MBAs") só aparece a partir do computador.
  9. **Foto da faixa entre seções preenchendo o espaço todo.** A foto que
     fica entre o catálogo e o corpo docente agora preenche 100% da faixa em
     qualquer tamanho de tela, sem cortar de forma estranha quando a tela é
     pequena.

- **10/09/2026** — **Espaço entre título e conteúdo padronizado nas seções de
  "título em cima, texto e imagem/vídeo embaixo".** Pedido para reduzir esse
  espaço na seção "A FIA" (Quem Somos) para 40px. Ao conferir, encontrei o
  mesmo formato de seção — um título, depois um respiro, depois uma linha com
  texto de um lado e uma foto/vídeo do outro — em mais dois lugares usando
  72px: a seção "Sobre" da página inicial e a seção "Vídeo institucional" (Quem
  Somos). Para as três ficarem com a mesma respiração, reduzi as três para
  40px. As seções "Diferenciais" e "Catálogo de cursos" também usavam 72px,
  mas o formato do conteúdo delas é diferente (título centralizado com uma
  grade de blocos embaixo, não texto ao lado de imagem), então mantive como
  estava.

- **10/09/2026** — **Respiro de segurança e botões lado a lado na abertura
  (Home), do notebook até o tablet.** Dois ajustes na seção de abertura
  (`.hero`), para telas de até 1024px de largura (notebook e tablet):
  1. **Espaço de segurança contra o menu.** No tablet (abaixo de 1000px), o
     respiro entre o menu e o título da abertura tinha sido reduzido para
     160px, menor que o do computador (200px) — mesmo o texto ficando mais
     alto nessa largura (ele empilha em vez de ficar ao lado da imagem). Isso
     deixava pouco espaço de sobra acima do título. Agora usa os mesmos 200px
     do computador, garantindo folga entre o menu e o título em qualquer
     largura até 1024px.
  2. **Botões "Conhecer cursos EAD" e "Falar com consultor" lado a lado por
     mais tempo.** Antes, os dois botões empilhavam (um embaixo do outro) já
     a partir de 1000px de largura. Agora eles continuam lado a lado do
     notebook até o tablet, só empilhando no celular (abaixo de 768px, junto
     com o resto do menu mobile). Para os dois caberem numa linha só nessa
     faixa mais estreita, o preenchimento interno dos botões foi reduzido um
     pouco (de 40px para 22px de cada lado).

- **10/09/2026** — **Menu do celular padronizado em todas as páginas.** O menu
  aberto no celular (abaixo de 768px) é uma peça só, compartilhada por todas as
  páginas. Ajustes feitos:
  - Na página inicial, o menu aberto tinha fundo escuro (cor `--ink`), diferente
    das outras páginas, que já abriam com fundo branco. Agora o fundo é sempre
    branco, com os links, o ícone do menu e o botão "Entre em contato" em verde
    escuro para manter a leitura — igual em todas as páginas.
  - O ícone de "sanduíche" (as três linhas do botão de menu) tinha a linha do
    meio mais fina que as outras, por causa de um arredondamento de pixel.
    Corrigido para as três terem a mesma espessura.
  - O traço que aparece embaixo do link ao passar o mouse, dentro do menu
    aberto, ocupava a largura toda da tela; agora acompanha só o texto do link.
  - O botão "Entre em contato" dentro do menu aberto do celular agora ocupa
    100% da largura do menu e fica mais próximo dos links "Quem Somos" e
    "Cursos".
  - Abrir o menu do celular tem uma animação suave: desliza vindo de cima e os
    itens (links e botão) aparecem em sequência.
  - Uma linha fina foi adicionada embaixo do menu aberto, separando-o do
    conteúdo da página. O menu do computador não foi alterado nesses ajustes.

- **10/09/2026** — **Dois ajustes finos no tablet e no celular (Quem Somos).**
  1. **Espaço entre o título da abertura e o conteúdo reduzido.** No tablet e
     no celular, o espaço vazio entre "A herança da excelência..." e o texto
     "Quem somos" logo abaixo estava grande demais. Diminuí o respiro de
     baixo da abertura e o de cima da seção seguinte, então agora o título
     fica mais perto do conteúdo nessas larguras. No computador nada mudou.
  2. **Cartões de Missão, Visão e Valores empilham no celular.** Só no
     celular, em vez de rolar/arrastar de lado, os três cartões agora ficam
     um embaixo do outro, ocupando a largura toda — mais fácil de ler numa
     tela pequena. No computador e no tablet continuam no carrossel que rola
     e pode ser arrastado com o mouse.

- **10/09/2026** — **Menu do celular: ícone, sublinhado, botão e animação.**
  Ajustes no menu que aparece nas telas pequenas (abaixo de 768px), usado em
  todas as páginas já que o cabeçalho é compartilhado. O menu do computador
  não foi alterado.
  - O ícone de "sanduíche" (as três linhas do botão de menu) tinha a linha do
    meio ficando mais fina que as outras, por causa de um arredondamento de
    pixel. Agora as três linhas têm a mesma espessura.
  - Quando o menu está aberto, o traço que aparece embaixo do link ao passar
    o mouse ocupava a largura toda da tela. Agora ele acompanha só o tamanho
    do texto do link.
  - O botão "Entre em contato", dentro do menu aberto do celular, estava um
    pouco afastado dos links "Quem Somos" e "Cursos". Aproximei o espaçamento
    e o botão agora ocupa 100% da largura do menu.
  - Abrir o menu do celular agora tem uma animação suave: o menu desliza vindo
    de cima e os itens (links e botão) aparecem em sequência, um pouco depois
    um do outro, em vez de aparecer tudo de uma vez.
  - Foi adicionada uma linha fina embaixo do menu aberto, separando visualmente
    o menu do conteúdo da página logo abaixo.

- **10/09/2026** — **Sete ajustes finos na página Quem Somos (abertura, seção
  "A FIA", vídeo institucional e diretoria).**
  1. **Malha de pontos da abertura some no tablet e no celular.** Antes ela
     ficava visível em qualquer tamanho de tela; agora só aparece a partir do
     computador — no tablet e no celular ela some, igual já acontecia na
     malha da página Contato.
  2. **Distância do menu até o título da abertura padronizada.** No tablet e
     no celular, essa distância agora é igual à das páginas Cursos e Contato
     (72px) — antes era mais apertada nessas larguras.
  3. **Gradiente da malha de pontos corrigido para bater com o Figma.** Cada
     quadradinho da malha (em qualquer seção do site) agora usa exatamente o
     gradiente do design — limão transparente até o verde-água intenso
     (`#08e7c7`), na diagonal certa. Antes, a maioria das malhas usava uma cor
     sólida (verde-água ou limão) em vez do gradiente, e a única que já tinha
     gradiente usava tons e ângulo diferentes do Figma. Agora todas as malhas
     do site (abertura, "Diferenciais", faixa de transição, Cursos, Contato
     etc.) usam o mesmo gradiente, então mexer nele de novo muda todas de uma
     vez.
  4. **Malha da abertura mais discreta atrás do título.** A parte da malha que
     fica embaixo do texto está mais transparente, pra não brigar com a
     leitura — só a parte mais à direita, longe do texto, continua com a
     malha mais visível.
  5. **Tracinhos do "Vídeo institucional" não invadem mais o texto no
     notebook.** Do notebook (1024px) para telas menores, esses dois
     tracinhos decorativos somem, porque nessas larguras o texto reflui e
     eles acabavam caindo em cima ou perto demais das palavras. Em telas
     maiores continuam aparecendo, do jeito que já era.
  6. **Ícones do LinkedIn da diretoria agora são SVG "de verdade".** Antes
     eram uma imagem (`<img>`) apontando pro arquivo SVG; agora o desenho do
     ícone está direto no código da página (igual aos ícones de rede social
     do rodapé), o que deixa o ícone mais nítido e fácil de recolorir depois
     se precisar. Vale para as duas páginas que usam esse cartão de pessoa
     (Quem Somos e Cursos).
  7. **Texto e vídeo de "A FIA" alinhados pela base no notebook.** Do
     notebook (1024px) até a largura em que os dois ainda ficam lado a lado,
     o texto agora termina na mesma altura que o vídeo, em vez de ficar
     centralizado — fica mais parecido com um bloco só. Em telas maiores que
     1024px continua centralizado, como já era.

- **10/09/2026** — **Menu do celular: ícone, sublinhado, espaçamento e
  animação.** Ajustes no menu que aparece nas telas pequenas (abaixo de
  768px), usado em todas as páginas já que o cabeçalho é compartilhado:
  - O ícone de "sanduíche" (as três linhas do botão de menu) tinha a linha do
    meio ficando mais fina que as outras por causa de um arredondamento de
    pixel. Agora as três linhas têm a mesma espessura.
  - Quando o menu está aberto, o traço que aparece embaixo do link ao passar
    o mouse ocupava a largura toda da tela. Agora ele acompanha só o tamanho
    do texto do link.
  - O botão "Entre em contato" no cabeçalho (computador) estava muito
    afastado dos links de navegação, com um vão grande no meio. Agora ele fica
    logo ao lado dos links, com o mesmo respiro usado no resto do cabeçalho.
  - Abrir o menu do celular agora tem uma animação suave: o menu desliza vindo
    de cima e os itens (links e botão) aparecem em sequência, um pouco depois
    um do outro, em vez de aparecer tudo de uma vez.
  - Foi adicionada uma linha fina embaixo do menu aberto, separando visualmente
    o menu do conteúdo da página logo abaixo.

- **10/09/2026** — **Largura do título da abertura (Quem Somos) sob
  controle.** O bloco com "A herança da excelência no ritmo da sua rotina"
  tinha uma largura fixa em pixels. Agora ele ocupa no máximo 75% da largura
  da faixa central, do computador até o tablet — só em celulares bem
  estreitos (375px de largura ou menos) ele volta a ocupar 100%, pra não
  quebrar o texto demais.

- **10/09/2026** — **Botão "Saiba mais" reposicionado no tablet.** Depois do
  ajuste anterior (título ocupando metade da largura), o botão "Saiba mais"
  no tablet estava caindo embaixo do título. Agora ele volta a ficar do lado
  direito, na outra ponta da faixa — igual ao computador — tanto no tablet
  quanto no computador. A exceção é o celular: lá o botão continua abaixo do
  título, mas do tamanho quadrado normal (como o "Conheça Cursos FIA"), sem
  esticar para ocupar a largura toda como fazia antes. Essa faixa é
  compartilhada, então vale para Quem Somos, Cursos e Contato de uma vez.

- **10/09/2026** — **Botão "Saiba mais" com o mesmo padrão de largura.** O
  título da faixa "Saiba mais" (que aparece em Quem Somos, Cursos e Contato,
  já que é uma peça compartilhada) recebeu a mesma regra da faixa "Nossa
  trajetória": no computador e no tablet ocupa no máximo metade da largura da
  faixa central, no celular volta a ocupar 100%, e no tablet e no celular o
  tamanho da letra passou a ser igual ao dos títulos de seção (H2).

- **10/09/2026** — **Título da faixa "Nossa trajetória" com largura sob
  controle.** Essa frase (a que aparece em branco sobre a foto do escritório)
  agora ocupa no máximo metade da largura da faixa central, em vez de um
  tamanho fixo em pixels que não acompanhava bem o resto do site. No celular,
  onde meia largura ficaria apertada demais, ela volta a ocupar 100%. No
  tablet e no celular, o tamanho da letra passou a ser igual ao dos títulos
  de seção (H2) do resto do site, em vez de ter um tamanho só seu.

- **10/09/2026** — **Botão "Saiba mais" igualado ao "Conheça Cursos FIA".** O
  botão verde-água da faixa "Saiba mais" (perto do fim da página) tinha um
  texto menor e um respiro interno menor que o botão parecido no mosaico
  "Diferenciais". Removi esse ajuste separado e agora os dois usam exatamente
  o mesmo tamanho de texto e o mesmo espaçamento interno.

- **10/09/2026** — **Foto dos "Diferenciais" some no tablet e no celular.** O
  bloco com a foto da aluna escrevendo, ao lado do mosaico, agora só aparece
  no computador (notebook e desktop). No tablet e no celular ele fica
  escondido, deixando só os quatro blocos (logo, os dois textos e "Conheça
  Cursos FIA") empilhados.

- **10/09/2026** — **Altura padronizada nos blocos de "Diferenciais" (tablet e
  celular).** Nessas larguras, os quatro blocos do mosaico (logo, os dois
  textos e "Conheça Cursos FIA") ficavam empilhados um embaixo do outro, mas
  com alturas diferentes — os textos eram mais altos que o logo e o botão, o
  que quebrava a sensação de mosaico organizado. Agora todo carregamento da
  página confere qual desses quatro blocos é o mais alto e aplica essa mesma
  altura aos outros três, então eles sempre ficam padronizados, do tablet até
  o celular mais estreito. No computador nada muda — lá os blocos já ficam
  lado a lado, do jeito que estava.

- **10/09/2026** — **Bloco do logo e botão "Conheça Cursos FIA" em tablet.**
  No tablet (telas até 1000px), esses dois blocos do mosaico "Diferenciais"
  ficavam com uma largura fixa pequena, deixando um espaço vazio grande do
  lado direito — só no celular eles já ficavam esticados. Agora os dois
  ocupam a largura toda a partir do tablet, do mesmo jeito que já aconteciam
  no celular.

- **10/09/2026** — **Bloco do logo nos "Diferenciais" corrigido.** No mosaico
  da seção "Diferenciais FIA digital", o bloco com o logo usava uma imagem
  quadrada única (logo + fundo verde-escuro desenhados juntos), então ela não
  esticava para acompanhar a altura dos outros blocos. Troquei por uma caixa
  com a cor de fundo aplicada pelo site (a mesma técnica do quadrado "Conheça
  cursos FIA") e a marca sozinha, centralizada dentro — peguei o arquivo certo
  da marca (sem fundo) direto no Figma. Agora esse bloco acompanha a altura dos
  vizinhos em qualquer tamanho de tela.

- **10/09/2026** — **Três ajustes de layout na página Quem Somos.**
  1. Os dois cartões de número (+46 anos / +150 mil) agora sempre dividem a
     largura da faixa central em 50%/50% cada — antes sobrava um espaço vazio
     do lado direito em telas grandes, porque os cartões tinham uma largura
     fixa em pixels menor que a faixa toda. Em telas pequenas eles continuam
     empilhando, um embaixo do outro.
  2. Os três cartões de "Missão, visão e valores" agora também podem ser
     **arrastados com o mouse** (clicar e arrastar para o lado), além de já
     poderem ser rolados com o gesto do trackpad ou do celular. A barra de
     rolagem continua escondida, como já era.
  3. Na seção "Diferenciais FIA digital", os blocos (logo, textos e o botão
     "Conheça cursos FIA") e a foto ao lado agora ficam sempre com a altura
     certinha entre si — como um mosaico organizado (bento grid) — mesmo se um
     texto for maior que o outro. Antes, dependendo do tamanho do texto, um
     bloco podia ficar mais baixo que os vizinhos e a foto não acompanhava a
     altura total dos blocos ao lado.

- **10/09/2026** — **Hover dos botões trocado para verde-limão.** Antes cada
  estilo de botão (verde-água, branco, contornado) tinha uma cor de hover
  diferente. Agora, ao passar o mouse em cima de **qualquer botão do site**,
  ele fica com o fundo e a borda na cor `--lime` (o verde-limão que já era
  usado nos detalhes decorativos), com o texto em verde escuro para continuar
  legível. Isso vale para as quatro páginas, porque todos os botões vêm do
  mesmo estilo `.btn` no `styles.css`. Os ícones redondos de redes sociais no
  rodapé (`div.socials`) receberam o mesmo hover — antes ficavam verde-escuro
  ao passar o mouse, agora ficam verde-limão como os botões. Os links do menu
  no topo (`div.site-header__inner`) também: o sublinhado que aparece ao
  passar o mouse era verde-água e agora é verde-limão, igual ao resto.

- **10/09/2026** — **Vídeos da página Quem Somos abrem numa janela por cima
  da página.** As duas molduras de vídeo (na seção "A FIA" e na seção "Vídeo
  institucional") agora funcionam: clicar nelas abre o vídeo do YouTube numa
  janela escura por cima do conteúdo (dá para fechar clicando no X, clicando
  fora do vídeo ou apertando Esc). Como ainda não tenho os links reais dos
  dois vídeos, por enquanto a janela mostra um recado avisando que o vídeo
  ainda não foi conectado — **me passe os dois links do YouTube** que eu
  coloco no lugar. Veja em "Como personalizar" o passo a passo.

- **10/09/2026** — **Sublinhado do menu com cor diferente nas páginas de fundo
  branco.** Nas páginas Quem Somos, Cursos e Contato, onde a abertura tem
  fundo branco e o menu usa a versão clara (texto verde escuro), o sublinhado
  que aparece ao passar o mouse agora é verde-água (`--aqua`) em vez de
  verde-limão. Na página inicial, onde o menu fica sobre a foto escura do
  hero, continua verde-limão — a mudança foi só para as três páginas de fundo
  claro.

- **10/09/2026** — **Faixa de chamada conectada com a seção de Cursos.**
  Conferi no Figma e a faixa que envolve a foto grande com os botões ("Conheça
  Nossa História" / "Conheça Nossos Cursos") realmente tem um degradê: começa
  branca no topo e termina na mesma cor `--mint` que a seção de Cursos, logo
  abaixo, já usa como fundo. Antes essa faixa era só branca sólida, criando um
  corte visível entre ela e a seção de Cursos. Agora as duas se fundem sem
  costura.

- **10/09/2026** — **Recuo extra na seção "Sobre" (computador).** Conferi o
  arquivo do Figma e a faixa "Sobre" tem, sim, um espaço a mais do lado
  esquerdo: o texto e os cartões de número não começam grudados na margem
  padrão como nas outras seções, ficam puxados 109px mais para dentro
  (a faixa inteira mede 1276px, mas o conteúdo dela só usa 1167px, encostado
  na direita). Apliquei esse recuo, mas só em telas de computador — no
  tablet e no celular ele some, porque nessas larguras o conteúdo já empilha
  e o recuo ficaria estranho.

- **10/09/2026** — **Corrigido corte nos quadradinhos da malha de pontos.**
  Depois de aumentar o tamanho dos quadradinhos para 15px, em quase toda malha
  de pontos do site a última linha (ou coluna) ficava cortada pela metade — a
  caixa que recorta a malha não tinha o tamanho certo para mostrar o
  quadradinho inteiro. Ajustei o tamanho de cada malha (abertura da página
  inicial, "Quem Somos", "Diferenciais", faixa de transição, faixa da página
  Cursos e página Contato) para que nenhum quadradinho apareça cortado. Na
  abertura da página inicial e na seção "Sobre" (que já estava certa), agora
  aparecem sempre pelo menos 3 linhas completas de quadradinhos.

- **10/09/2026** — **Quadradinhos da malha de pontos aumentados.** Em todo
  lugar que tem aquela malha de quadrados verdes (abertura da página inicial,
  faixas de transição, "Quem Somos", "Diferenciais" etc.), cada quadradinho
  passou de 10px para 15px de lado. Como todas usam a mesma peça (`--sq` no
  `styles.css`), mudou em todas de uma vez.

- **10/09/2026** — **Sublinhado do menu ganhou animação.** O sublinhado que
  aparece ao passar o mouse nos links do topo (Quem Somos, Cursos) agora
  cresce da esquerda para a direita, com uma desaceleração suave no final, em
  vez de aparecer de uma vez.

- **10/09/2026** — **Alinhamento geral ao container central.** Varredura nas
  quatro páginas para garantir que todo conteúdo (textos, cartões, formulário,
  carrosséis e enfeites) comece e termine na mesma faixa central de 1276px.
  Antes, várias faixas usavam só a margem fixa de 82px e, em monitores largos,
  o conteúdo escorregava para as bordas e desalinhava de uma seção para outra.
  Agora existe uma medida única (`--edge`) que mantém tudo no eixo em qualquer
  largura de tela. Também foram padronizadas larguras que estavam quase certas
  (1167px, 1168px, 1275px e 1277px passaram todas a 1276px). Nada mudou em
  tablet e celular.

- **10/09/2026** — Página **Contato** criada a partir do design do Figma
  ("04. Contato"). Das cinco faixas dela, quatro são peças que já existiam
  (faixa deslizante, dúvidas frequentes, "Saiba mais" e rodapé) — só o topo com
  o formulário é novo. Todos os "Entre em contato" do site passaram a apontar
  para esta página.

- **10/09/2026** — Página **Cursos** criada a partir do design do Figma
  ("03. Cursos"), com as dez faixas descritas acima e o filtro de modalidade
  funcionando. Para não repetir código, várias peças passaram a ser
  compartilhadas entre as páginas: o cartão de pessoa (era só da diretoria,
  agora serve também para o corpo docente), a faixa "Saiba mais", o cartão de
  curso (ganhou a versão em pé), o FAQ (ganhou a versão de cores trocadas) e a
  malha de quadradinhos das laterais. No caminho, três acertos de consistência:
  a seta do "Matricule-se" agora é o ícone original do Figma nas duas páginas
  que a usam, os cartões de pessoa passaram a ter a altura correta do design
  (565px, com o bloco branco sobre a foto) e a foto da faixa "Nossa trajetória"
  voltou ao enquadramento do Figma.

- **09/09/2026** — Página **Quem Somos** criada a partir do design do Figma
  ("02. Quem Somos"), com as doze faixas descritas acima, a faixa de texto que
  anda sozinha, dois carrosséis que rolam de lado e a barra de navegação na
  versão clara. A página provisória `about.html` foi substituída por
  `quem-somos.html` e os links do menu foram atualizados. No mesmo passo, três
  detalhes da página inicial ficaram iguais ao design: o selo de "check" dos
  números agora é o ícone original do Figma, os títulos de seção estão em 42px
  e a etiqueta "FIA online" dos cursos voltou a ser escrita em caixa mista.

- **09/09/2026** — Site criado a partir do design do Figma ("01. Home"):
  todas as nove faixas da página inicial, o rodapé completo, o menu do
  celular, as perguntas que abrem e fecham e o carrossel de depoimentos.

---

## Como personalizar

- **Trocar uma cor do site:** abra `styles.css` e mude o valor no bloco
  `:root`, lá no começo. Ex.: trocar `--aqua: #02ab95;` muda todos os botões
  verdes de uma vez.
- **Mudar um texto:** abra a página (`index.html`, `quem-somos.html` ou
  `cursos.html`) e procure a frase. Cada faixa tem um comentário antes dela
  (ex.: `<!-- ==== Cursos ==== -->`) para você se localizar.
- **Trocar uma foto:** coloque a nova imagem na pasta `images/` e troque o
  nome do arquivo na página. Fotos grandes deixam o site lento — o ideal
  é que tenham no máximo 1920 pixels de largura.
- **Adicionar um depoimento:** copie um bloco `<figure class="quote__item">`
  inteiro dentro da seção de depoimentos e troque os textos. As setas passam a
  contar o novo automaticamente.
- **Adicionar uma pergunta no FAQ:** copie um bloco `<div class="faq-item">`
  inteiro e troque a pergunta e a resposta.
- **Ajustar a rolagem suave:** abra o `script.js`, logo no começo tem o bloco
  "Rolagem suave (Lenis)". O número em `duration: 1.05` é o tamanho do deslize:
  baixe para `0.7` se quiser a rolagem mais direta, suba para `1.5` se quiser
  mais deslizante. Para desligar de vez, apague a linha
  `<script src="vendor/lenis.min.js"></script>` das quatro páginas — o resto do
  site continua funcionando normalmente.
- **Adicionar alguém na diretoria ou no corpo docente:** copie um bloco
  `<article class="person-card">` inteiro (existe no `quem-somos.html` e no
  `cursos.html`) e troque a foto, o nome e o cargo. As setas passam a contar o
  novo automaticamente.
- **Colocar o formulário do HubSpot no lugar:** abra o `contato.html` e procure
  o comentário grande escrito `LUGAR DO EMBED DO HUBSPOT`. Apague **apenas** o
  `<form>` que está lá dentro e cole o código do HubSpot no lugar dele, sem
  mexer na `<div class="form-embed">` que envolve tudo. O `styles.css` já
  estiliza as classes que o HubSpot usa (`hs-form-field`, `hs-input` e
  `hs-button`), então o formulário dele já nasce com as cores, os tamanhos e os
  espaçamentos do layout.
- **Colocar o link de um vídeo do YouTube:** abra o `quem-somos.html`, procure
  `data-youtube=""` (tem dois, um em "A FIA" e outro em "Vídeo institucional")
  e escreva o código do vídeo entre as aspas — é a parte depois de `v=` no
  link do YouTube (em `youtube.com/watch?v=ABC123`, o código é `ABC123`).
  Assim que tiver um código ali, clicar na moldura passa a abrir o vídeo de
  verdade em vez do recado de aviso.
- **Adicionar um curso:** copie um bloco
  `<article class="course-card course-card--vertical" data-cat="...">` no
  `cursos.html`. O `data-cat` é o que faz o filtro funcionar — use `grad`,
  `pos` ou `mba`.
- **Mudar a velocidade da faixa que anda sozinha:** no `styles.css`, procure
  `marquee-scroll` e troque os `44s` por um número maior (mais devagar) ou
  menor (mais rápido).
- **Adicionar uma página nova:** crie um arquivo `.html` novo copiando o topo
  e o rodapé do `quem-somos.html`, e depois inclua o link no menu de **todas** as
  páginas.
- **Espaço nas laterais:** é o `--gutter` no `:root` (82px no computador, e
  menor no tablet e no celular).
- **Largura da faixa central:** é o `--container` no `:root` (1276px). Todo o
  conteúdo do site fica dentro dessa faixa, centralizada na tela. Se você
  aumentar esse número, todas as páginas ficam mais largas de uma vez — não
  precisa mexer em faixa por faixa.

---

## Ainda falta fazer

- **Confirmar as fotos 2 e 3 do carrossel da abertura (Home).** Hoje elas usam
  `images/hero-bg-2.png` e `images/hero-bg-3.png`, colocadas para validar o
  efeito de troca de imagens. Se forem as fotos finais, não precisa fazer
  nada; se não forem, é só substituir esses dois arquivos por outras fotos
  com o mesmo nome.
- **A lista real de cursos.** A grade da página Cursos tem seis cartões, como
  no design, mas o Figma repetia os mesmos dois títulos. Me passe os cursos de
  verdade (nome, modalidade e foto) e eu troco.
- **Nenhum curso de Graduação ainda.** Por isso, clicar no filtro "Graduação"
  mostra um recado dizendo que a modalidade ainda não tem cursos. Quando os
  cursos entrarem, o filtro passa a funcionar sozinho.
- **Texto das "Empresas parceiras".** No Figma esse parágrafo estava em
  rascunho (*lorem ipsum*), então escrevi um texto sobre os selos da FIA. Vale
  revisar.
- **O formulário do HubSpot.** Por enquanto está no ar o formulário do layout,
  com os cinco campos desenhados. Ele **não envia nada**: quem clicar em
  "Enviar" vê um recado avisando que ainda não está conectado. Veja em "Como
  personalizar" o passo a passo para colocar o embed do HubSpot no lugar.
- **Links dos dois vídeos** da página Quem Somos. As molduras já abrem a
  janela de vídeo ao clicar, só falta eu colocar o código de cada vídeo do
  YouTube (veja "Como personalizar").
- **Um texto real** no segundo bloco dos "Diferenciais": no Figma esse espaço
  estava com texto de rascunho (*lorem ipsum*), então escrevi uma frase sobre o
  Canvas LMS para não deixar a página com texto falso. Vale revisar.
- **Retratos em melhor resolução** de Eduardo Savarese Neto e Fábio Ogawa
  Hashimoto: as fotos que vieram do Figma têm só 200 por 200 pixels e ficam um
  pouco borradas no tamanho em que aparecem. As de Roberto Sbragia e Maurício
  Jucá já estão nítidas.
- **Endereços de LinkedIn** de cada diretor e de cada professor (hoje todos
  apontam para o linkedin.com).
- Nome, cargo e foto reais dos alunos nos depoimentos, na página inicial e na
  de Cursos (estão todos como "Nome do Aluno").
- Endereços reais das redes sociais, das políticas de privacidade e cookies e
  dos links da FIA no rodapé (hoje apontam para `#`).
- Botão "Falar com consultor": colocar o número real do WhatsApp.
