# Blueprint: Cerrajería Web App

## Propósito y Capacidades
Esta es una aplicación web de una página, de carga estática, para el servicio de cerrajería "Cerrajería DC". Está construida con Astro.js y optimizada para SEO y rendimiento. La aplicación muestra los servicios, testimonios y facilita el contacto a través de un llamado a la acción (CTA) claro.

## Esquema del Proyecto
- **Framework**: Astro.js 5.16
- **Estilo**: Tailwind CSS V4, CSS global (`src/styles/global.css`)
- **Componentes**: UI estática y componentes core (`.astro`)
- **Enrutamiento**: Basado en archivos en `src/pages/`
- **SEO Actual**:
    - Títulos, descripciones y URLs dinámicas desde `Layout.astro`.
    - Metaetiquetas Open Graph y Twitter Card.
    - Schema.org JSON-LD para el tipo de negocio "Locksmith", integrando reseñas y catálogo de servicios.
    - GTM y Analytics vía Partytown.

## Plan de Optimización Actual (SEO On-Page, Lighthouse 100/100, Google Ads)
- **Objetivo**: Dominar CABA y áreas locales, optimizando presupuestos diurnos/nocturnos en Ads y alcanzando el 100/100 en Lighthouse.
- **Acciones Planeadas (Requieren Aprobación)**:
    1. **Auditoría Semántica y Multimedia**: Asegurar etiquetas alt, atributos `width`/`height` y loading policies (Eager/Lazy) en todas las imágenes. Reestructuración de Headers (H1, H2, H3).
    2. **Mejora de Accesibilidad**: ARIA labels y contrastes donde aplique para un score de 100.
    3. **Enriquecimiento de Schema JSON-LD**: Agregar schema.org de tipo `FAQPage` usando las preguntas actuales.
    4. **Estrategia Ads (Guía provista)**: Creación de guía para dividir campañas: Día (Cercanía local 2-3km, búsquedas amplias), Noche (Urgencias en todo CABA, "Cerrajero 24 hrs", pujas más altas).
