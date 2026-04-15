# Blueprint: Cerrajería Web App

## Propósito y Capacidades
Esta es una aplicación web de una página, de carga estática, para el servicio de cerrajería "Cerrajería DC". Está construida con Astro.js y optimizada para SEO y rendimiento. La aplicación muestra los servicios, testimonios y facilita el contacto a través de un llamado a la acción (CTA) claro.

## Esquema del Proyecto
- **Framework**: Astro.js 5.16
- **Estilo**: Tailwind CSS V4, CSS global (`src/styles/global.css`)
- **Componentes**: UI estática y componentes core (`.astro`)
- **Enrutamiento**: Basado en archivos en `src/pages/`
- **Paleta de Colores (Actualizada Abr 2026)**:
    - **Negro base** `#050505` (`oklch(0.06 0 0)`) — Fondo principal, cards, branding
    - **Turquesa marca** `#20D6D2` (`oklch(0.79 0.13 182)`) — Títulos, botones, acentos
    - **Blanco apoyo** `#FFFFFF` (`oklch(0.98 0 0)`) — Texto, contraste, legibilidad
- **SEO Actual**:
    - Títulos, descripciones y URLs dinámicas desde `Layout.astro`.
    - Metaetiquetas Open Graph y Twitter Card.
    - Schema.org JSON-LD para el tipo de negocio "Locksmith", integrando reseñas y catálogo de servicios.
    - GTM y Analytics vía Partytown.
    - FAQPage Schema para preguntas frecuentes.

## Historial de Cambios
### Rebranding de Colores (Abr 2026)
- Migración completa de paleta dorado/ámbar (`oklch hue 85`) a turquesa/negro/blanco.
- Archivos modificados: `global.css`, `HeroSection.astro`, `ResidentialSection.astro`, `Layout.astro`.
- Variables CSS centralizadas permiten que todos los componentes hereden automáticamente.
- Contrastes verificados: turquesa/negro 10.7:1 (AAA), blanco/negro 20:1 (AAA).
