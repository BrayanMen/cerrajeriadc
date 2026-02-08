
# Blueprint: Cerrajería Web App

## Propósito y Capacidades

Esta es una aplicación web de una página, de carga estática, para un servicio de cerrajería ficticio llamado "Cerrajería Ya". Está construida con Astro.js y optimizada para SEO y rendimiento.

La aplicación muestra los servicios de la empresa, genera confianza a través de testimonios y facilita el contacto a través de un llamado a la acción (CTA) claro.

## Esquema del Proyecto

- **Framework**: Astro.js
- **Estilo**: Tailwind CSS, CSS global (`src/styles/global.css`)
- **Componentes**: Componentes Astro para UI estática (`.astro`)
- **Enrutamiento**: Enrutamiento basado en archivos en `src/pages/`
- **SEO**:
    - Título y descripción dinámicos desde `Layout.astro`.
    - URLs canónicas.
    - Metaetiquetas Open Graph y Twitter Card.
    - Rich snippets con Schema.org JSON-LD para el tipo de negocio "Locksmith".
    - Integración con Google Tag Manager y Google Analytics.
- **Rendimiento**:
    - Pre-conexión y pre-búsqueda de DNS para orígenes críticos.
    - Carga diferida (lazy loading) de animaciones.

## Plan de Cambios Actual

- **Objetivo**: Mejorar el ranking en Google optimizando la sección `<head>`.
- **Inspiración**: Un sitio web de la competencia con un fuerte SEO.
- **Cambios Realizados**:
    1. **Se actualizó `src/layouts/Layout.astro`**:
        - Se cambió el `title` y la `description` por defecto para que coincidan con las palabras clave de la competencia: "Cerrajería 24 horas en Capital Federal | Servicio Urgente" y "¿Buscás cerrajería 24 hs en Capital Federal? Atención urgente y profesional para apertura de puertas, autos y cajas fuertes. ¡Llamanos ya!".
        - Se añadió un conjunto completo de metaetiquetas Open Graph para mejorar el intercambio en redes sociales (`og:type`, `og:locale`, `og:site_name`, `article:modified_time`, `og:image:width`, `og:image:height`, `og:image:type`).
        - Se añadieron metaetiquetas Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
        - Se mejoró el script JSON-LD de `Schema.org` para el tipo de negocio `Locksmith` con información más específica y relevante (nombre, imagen, URL, dirección, coordenadas geográficas) basada en el ejemplo de la competencia.
        - Se actualizó el autor a "Cerrajeria Ya".
