# Un Día para Dar Colima 2026 — Círculos de Dar

Sitio oficial de "Un Día para Dar Colima", la iniciativa local del movimiento global
#UnDíaParaDar / Giving Tuesday. La edición **2026** estrena una nueva dinámica —los
**Círculos de Dar**— y genera expectativa alrededor de las **3 organizaciones**
beneficiarias, cuyos nombres se revelarán el 24 de noviembre de 2026.

La edición **2025** (enfocada en la Fundación Carolita IAP) se conserva íntegra como
archivo histórico en [`/historia-2025`](src/pages/Historia2025.tsx).

## 🌟 Qué hay en el sitio

### Página principal (`/`)
- **Hero** con cuenta regresiva al evento (1 de diciembre de 2026), fondo animado y
  metáfora visual del círculo.
- **Círculos de Dar**: explicación de la dinámica en 4 pasos interactivos.
- **Las 3 causas**: tarjetas "clasificadas" con pistas destapables sobre las
  organizaciones aún sin revelar, cuenta regresiva propia al día del destape y una
  línea de tiempo hacia el evento.
- **Arma tu círculo**: simulador de impacto (personas × aportación → total repartido
  entre las 3 causas) y las tres formas de sumarse (personal, empresarial, de talento).
- **Patrocinadores y aliados**: logos en fila fija en desktop, carrusel deslizante en
  móvil.
- **Historia**: teaser que enlaza al archivo de la edición 2025.

### Otras páginas
- **`/historia-2025`** — Archivo completo de la edición pasada: misión/visión,
  actividades, testimonios en audio de los jóvenes de Fundación Carolita, estadísticas
  de impacto y necesidades.
- **`/carolita`** — Detalle de las necesidades de Fundación Carolita IAP y cómo apoyar
  cada una por WhatsApp.
- **`/boletin`** — Sala de prensa: comunicados oficiales de la edición 2026 y el
  archivo de comunicados 2025, con la galería de necesidades de Carolita.

### Funcionalidades transversales
- Cuenta regresiva reutilizable y parametrizable por fecha (`CountdownTimer`).
- Botones de WhatsApp con mensaje predefinido por contexto.
- Descarga de evento en `.ics` y compartir nativo (Web Share API con fallback a
  Facebook).
- SEO por ruta: `<title>`, meta tags OpenGraph/Twitter, canonical y JSON-LD
  (`Event`, `FAQPage`, `NewsArticle`, `Organization`) generados dinámicamente.
- Animaciones de aparición al hacer scroll, respetando `prefers-reduced-motion`.

## 🚀 Stack técnico

- **React 18** + **TypeScript**
- **React Router 7** — enrutamiento entre páginas
- **Tailwind CSS** — sistema de diseño (paleta de marca, tipografías, animaciones)
- **Vite** — build y servidor de desarrollo
- **Lucide React** — iconografía

Herramientas de desarrollo: ESLint + typescript-eslint, PostCSS, Autoprefixer.

## 📁 Estructura del proyecto

```
un-dia-para-dar/
├── public/
│   ├── images/
│   │   ├── sponsors/        # Logos de patrocinadores
│   │   ├── boletin/         # Fotos de los comunicados de prensa 2025
│   │   └── carolita.png
│   ├── audio/                # Testimonios en audio de los jóvenes (.ogg)
│   ├── *.png                 # Fotos de perfil de los jóvenes
│   ├── sitemap.xml
│   ├── robots.txt
│   └── og-image.jpg
├── src/
│   ├── config/
│   │   └── event.ts          # Fuente única de verdad: fecha, sede, WhatsApp,
│   │                          # nº de organizaciones, línea de tiempo del reveal
│   ├── components/
│   │   ├── Navbar.tsx / Footer.tsx / Seo.tsx
│   │   ├── Hero.tsx
│   │   ├── CirculosDeDar.tsx     # Explica la dinámica en 4 pasos
│   │   ├── MysteryOrgs.tsx       # Expectativa por las 3 causas sin revelar
│   │   ├── JoinCircle.tsx        # Simulador de impacto + formas de participar
│   │   ├── SponsorsWall.tsx      # Patrocinadores (fila fija / carrusel móvil)
│   │   ├── LegacyTeaser.tsx      # Enlaza a /historia-2025
│   │   ├── CountdownTimer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ImpactStats.tsx
│   │   ├── StudentCarousel.tsx
│   │   ├── NeedsCta.tsx
│   │   └── FundraisingEvents.tsx # Usado en Historia2025.tsx
│   ├── pages/
│   │   ├── Home.tsx           # Edición 2026 (ruta "/")
│   │   ├── Historia2025.tsx   # Archivo de la edición 2025 ("/historia-2025")
│   │   ├── Carolita.tsx       # Necesidades de la fundación ("/carolita")
│   │   └── Boletin.tsx        # Sala de prensa ("/boletin")
│   ├── hooks/
│   │   ├── ScrollToTop.tsx
│   │   └── useReveal.ts       # Activa las animaciones al hacer scroll
│   ├── utils/
│   │   ├── share.ts           # Compartir evento + descarga de .ics
│   │   └── carolita.ts
│   ├── App.tsx                # Rutas
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Instalación y desarrollo

### Prerrequisitos
- Node.js 18+
- npm

### Instalación
```bash
git clone git@github.com:GARCIA1997/un-dia-para-dar.git
cd un-dia-para-dar
npm install
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Servidor de desarrollo (Vite)
npm run build    # Construcción para producción en dist/
npm run preview  # Vista previa de la build de producción
npm run lint     # Verificar calidad de código con ESLint
```

## ⚙️ Configuración del evento

Todo lo relacionado a la edición actual (fecha, sede, horario, WhatsApp, número de
organizaciones beneficiarias y la línea de tiempo hacia el destape) vive en un solo
archivo:

```ts
// src/config/event.ts
export const EVENT = {
  edition: 2026,
  dateISO: "2026-12-01T09:00:00-06:00",
  dateLabel: "Martes 1 de diciembre de 2026",
  place: "Jardín Libertad, Colima, México",
  whatsapp: "5213121109700",
  orgsCount: 3,
  // ...
};
```

Cambiar un valor ahí lo propaga automáticamente al hero, la cuenta regresiva, el
archivo `.ics`, el footer y los datos estructurados (JSON-LD) de todas las páginas.

Las pistas de las 3 organizaciones (aún sin revelar) y la fecha del destape en vivo se
editan en `src/components/MysteryOrgs.tsx`.

## 🎨 Guía de estilo

Paleta de marca definida en `tailwind.config.js` bajo `theme.extend.colors.brand`:

```css
--brand-red:    #EE202E;
--brand-teal:   #14AC94;
--brand-lime:   #D0DD28;
--brand-blue:   #0072BC;
--brand-amber:  #FBB040;
--brand-orange: #F26C21;
--brand-gray:   #808285;
```

Tipografías: **Bricolage Grotesque** (títulos, clase `font-display`) y **Outfit**
(cuerpo, clase `font-sans`), cargadas desde Google Fonts en `src/index.css`.

Utilidades reutilizables en `src/index.css`: `.glass`, `.gradient-border`,
`.text-gradient`, `.eyebrow`, `.btn-primary` / `.btn-lime` / `.btn-ghost`, `.reveal`
(animación de scroll) y `.bg-grid` / `.grain` (texturas de fondo).

## 🔍 SEO

Cada página declara su propio `<Seo>` (`src/components/Seo.tsx`) con título,
descripción, canonical y JSON-LD específico:

- **Home**: `Event` + `FAQPage` + `WebSite`.
- **Historia 2025**: `Event` histórico.
- **Boletín**: `CollectionPage` con `NewsArticle` por cada comunicado.

`index.html` trae además el JSON-LD base de `Organization` y las meta tags globales
(Open Graph, Twitter Cards, geo-tags). `public/sitemap.xml` y `public/robots.txt`
listan las rutas reales del sitio.

## 🌐 Despliegue

```bash
npm run build   # genera dist/ listo para cualquier hosting estático
```

El dominio configurado en el sitio es `udpd.spartans-dev.io` (ver
[`src/config/event.ts`](src/config/event.ts)). Compatible con cualquier proveedor de
hosting estático (Netlify, Vercel, GitHub Pages, Firebase Hosting, Hostinger, etc.).

## 🤝 Contribuir

### Agregar o quitar un patrocinador
Editar el arreglo `SPONSORS` en `src/components/SponsorsWall.tsx` (logo en
`public/images/sponsors/`).

### Agregar un testimonio de un joven
1. Foto en `public/` y audio `.ogg` en `public/audio/`.
2. Agregar la entrada al arreglo en `src/components/StudentCarousel.tsx`.

### Publicar un nuevo comunicado de prensa
Agregar una entrada al arreglo `newsletters` en `src/pages/Boletin.tsx`, indicando la
`edition` (2026 o 2025) — los comunicados 2026 sin fotografía usan una tarjeta gráfica
en vez de imagen.

### Revelar las 3 organizaciones
Reemplazar las pistas de `MYSTERY` en `src/components/MysteryOrgs.tsx` por el
contenido real cuando llegue la fecha del destape.

## 📞 Contacto

**Un Día para Dar Colima**
- 📱 WhatsApp: +52 312 110 9700
- ✉️ Email: undiaparadarcolima@gmail.com
- 🌐 Web: [udpd.spartans-dev.io](https://udpd.spartans-dev.io)
- 📍 Jardín Libertad, Colima, México

### Redes sociales
- [Facebook](https://www.facebook.com/share/1BfmYrV77r/?mibextid=wwXIfr)
- [Instagram](https://www.instagram.com/fundacioncarolita_)

## 📄 Licencia

Proyecto desarrollado para el comité organizador de Un Día para Dar Colima. Todos los
derechos reservados.

---

**#UnDíaParaDarMX #CírculosDeDar #UnDiaParaDarColima**
