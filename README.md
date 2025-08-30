# Fundación Carolita IAP - Un Día para Dar México 2025

Una página web moderna y responsiva para promover el evento "Un Día para Dar México 2025" de la Fundación Carolita IAP, una organización dedicada a brindar atención integral a personas con discapacidad en Colima, México.

## 🌟 Características Principales

### 🎯 Funcionalidades del Sitio
- **Countdown Timer**: Cuenta regresiva hasta el evento del 2 de diciembre de 2025
- **Carrusel de Estudiantes**: Historias inspiradoras con reproducción de audio
- **Carrusel de Patrocinadores**: Logos de donadores y patrocinadores
- **Eventos de Recaudación**: Calendario de eventos con descarga de archivos .ics
- **Integración WhatsApp**: Botones directos para donaciones y contacto
- **Estadísticas de Impacto**: Contadores animados con datos de la fundación
- **Compartir en Redes**: Funcionalidad nativa de compartir

### 🎨 Diseño y UX
- **Diseño Responsivo**: Optimizado para móvil, tablet y desktop
- **Animaciones Suaves**: Transiciones y micro-interacciones elegantes
- **Paleta de Colores Corporativa**: 
  - Rojo principal: `#EE202E`
  - Verde secundario: `#14AC94`
  - Amarillo de acento: `#D0DD28`
  - Gris corporativo: `#808285`
- **Tipografía Moderna**: Sistema de fuentes optimizado para legibilidad
- **Accesibilidad**: Contraste adecuado y navegación inclusiva

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción y desarrollo
- **Lucide React** - Iconos modernos y escalables

### Herramientas de Desarrollo
- **ESLint** - Linter para calidad de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
fundacion-carolita/
├── public/                     # Archivos estáticos
│   ├── images/                # Fotos de estudiantes
│   │   ├── chayito.jpeg
│   │   ├── david.jpeg
│   │   ├── jahir.jpeg
│   │   ├── lorena.jpeg
│   │   ├── marcia.jpeg
│   │   ├── max.jpeg
│   │   ├── sandy.jpeg
│   │   └── josue.jpeg
│   ├── audio/                 # Archivos de audio (futuro)
│   │   ├── chayito.ogg
│   │   ├── david.ogg
│   │   └── ...
│   ├── logos/                 # Logos de patrocinadores
│   │   ├── spartansdevio-*.png
│   │   ├── razo.png
│   │   ├── macehual.png
│   │   └── LOGO_UDPD_COLIMA.png
│   ├── sitemap.xml           # Mapa del sitio para SEO
│   ├── robots.txt            # Instrucciones para crawlers
│   └── og-image.jpg          # Imagen para redes sociales
├── src/
│   ├── components/           # Componentes React reutilizables
│   │   ├── CountdownTimer.tsx    # Cuenta regresiva
│   │   ├── WhatsAppButton.tsx    # Botón de WhatsApp
│   │   ├── ImpactStats.tsx       # Estadísticas animadas
│   │   ├── StudentCarousel.tsx   # Carrusel de estudiantes
│   │   ├── SponsorsCarousel.tsx  # Carrusel de patrocinadores
│   │   └── FundraisingEvents.tsx # Eventos de recaudación
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── package.json              # Dependencias y scripts
├── tailwind.config.js        # Configuración de Tailwind
├── vite.config.ts            # Configuración de Vite
└── tsconfig.json             # Configuración de TypeScript
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd fundacion-carolita

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de la construcción
npm run lint     # Verificar calidad de código
```

## 📱 Componentes Principales

### CountdownTimer
Cuenta regresiva hasta el evento principal con actualización en tiempo real.

### StudentCarousel
Carrusel horizontal que muestra estudiantes de la fundación con:
- Fotos de perfil
- Historias inspiradoras
- Botones de audio para escuchar testimonios
- Botones de apadrinamiento vía WhatsApp

### SponsorsCarousel
Carrusel responsivo de logos de patrocinadores:
- 3 logos por fila en desktop
- 2 logos por fila en tablet
- 1 logo por fila en móvil
- Auto-scroll con controles manuales

### WhatsAppButton
Componente reutilizable para integración con WhatsApp:
- Mensajes predefinidos
- Múltiples variantes de estilo
- Número de teléfono configurable

### ImpactStats
Estadísticas animadas con contadores que se activan al hacer scroll:
- Jóvenes capacitados
- Galletas vendidas
- Prendas de moda circular

## 🎨 Guía de Estilo

### Colores Corporativos
```css
/* Colores principales */
--rojo-principal: #EE202E;
--verde-secundario: #14AC94;
--amarillo-acento: #D0DD28;
--gris-corporativo: #808285;

/* Gradientes */
--gradiente-rojo: linear-gradient(135deg, #EE202E, #d11c29);
--gradiente-verde: linear-gradient(135deg, #14AC94, #0f9582);
```

### Espaciado
- Sistema de espaciado basado en 8px
- Padding estándar: `p-6`, `p-8`, `p-10`
- Márgenes: `mb-6`, `mb-8`, `mb-12`

### Tipografía
- Títulos principales: `text-4xl md:text-5xl font-bold`
- Subtítulos: `text-2xl md:text-3xl font-semibold`
- Texto cuerpo: `text-xl md:text-2xl font-light`

## 🔧 Configuración

### Variables de Entorno
```env
# WhatsApp
VITE_WHATSAPP_NUMBER=5213121109700

# Información de contacto
VITE_EMAIL_PRIMARY=undiaparadarcolima@gmail.com
VITE_EMAIL_SECONDARY=fundacioncarolita1@gmail.com
VITE_WEBSITE=www.fundacioncarolita.org
```

### SEO y Meta Tags
El sitio incluye optimización completa para SEO:
- Meta tags Open Graph para Facebook
- Twitter Cards
- Structured Data (JSON-LD)
- Sitemap XML
- Robots.txt

## 📊 Funcionalidades Especiales

### Audio Player
Los estudiantes tienen archivos de audio asociados (.ogg) que se reproducen directamente en el navegador sin redireccionar a plataformas externas.

### Descarga de Calendario
Los eventos incluyen funcionalidad para descargar archivos .ics compatibles con Google Calendar, Outlook y otros calendarios.

### Compartir Nativo
Utiliza la Web Share API cuando está disponible, con fallback a compartir en Facebook.

## 🌐 Despliegue

### Bolt Hosting
El sitio está configurado para desplegarse automáticamente en Bolt Hosting:

```bash
npm run build  # Genera archivos estáticos en dist/
```

### Otros Proveedores
Compatible con cualquier servicio de hosting estático:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📈 Optimizaciones

### Performance
- Lazy loading de imágenes
- Componentes optimizados con React.memo
- Bundling eficiente con Vite
- CSS purging automático con Tailwind

### Accesibilidad
- Contraste de colores WCAG AA
- Navegación por teclado
- Alt text descriptivo en imágenes
- Estructura semántica HTML5

### SEO
- Meta tags completos
- Structured data
- Sitemap XML
- URLs amigables
- Optimización de imágenes

## 🤝 Contribución

### Agregar Nuevos Estudiantes
1. Agregar foto en `public/` (formato .jpeg)
2. Agregar audio en `public/` (formato .ogg)
3. Actualizar array en `StudentCarousel.tsx`

### Agregar Patrocinadores
1. Agregar logo en `public/` (formato .png)
2. Actualizar array en `SponsorsCarousel.tsx`

### Modificar Eventos
Editar el array `events` en `FundraisingEvents.tsx` con:
- Título del evento
- Descripción
- Fecha y hora
- Ubicación
- Emoji representativo

## 📞 Contacto

**Fundación Carolita IAP**
- 📱 WhatsApp: +52 313 121 109 700 | +52 313 121 437 460
- ✉️ Email: undiaparadarcolima@gmail.com
- ✉️ Email: fundacioncarolita1@gmail.com
- 🌐 Web: www.fundacioncarolita.org
- 📍 Ubicación: Colima, México

### Redes Sociales
- [Facebook](https://www.facebook.com/FundacionCarolita)
- [Instagram](https://www.instagram.com/FundacionCarolita)

## 📄 Licencia

Este proyecto está desarrollado para Fundación Carolita IAP. Todos los derechos reservados.

---

**#UnDíaParaDarMX #FundaciónCarolita**

*"La solidaridad es el lenguaje universal que todos entendemos."*
