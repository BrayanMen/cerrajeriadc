# Cerrajería de Urgencia 24/7 - Sitio Web con Astro.js

Sitio web de una sola página, moderno y de alto rendimiento, creado con Astro.js para un servicio de cerrajería de urgencia en la Capital Federal. El proyecto está diseñado para ser ultrarrápido, totalmente responsivo y optimizado para SEO, siguiendo las mejores prácticas de la web moderna.

## Características Principales

-   **Diseño Moderno y Atractivo:** Interfaz limpia y profesional con efectos visuales sutiles como tarjetas con efecto de vidrio, gradientes de texto y animaciones suaves.
-   **Totalmente Responsivo:** Experiencia de usuario impecable en cualquier dispositivo, desde móviles hasta ordenadores de escritorio.
-   **Rendimiento Superior:** Construido con Astro, que genera un sitio estático con cero JavaScript por defecto, garantizando tiempos de carga casi instantáneos (Excelente Core Web Vitals).
-   **Optimizado para SEO:** Estructura semántica de HTML, metaetiquetas y rendimiento enfocado en obtener la mejor clasificación en motores de búsqueda.
-   **Componentes Interactivos Inteligentes:** Uso de "Astro Islands" para cargar componentes interactivos como el carrusel de reseñas solo cuando son visibles, ahorrando ancho de banda.
-   **Llamadas a la Acción (CTA) Claras:** Múltiples puntos de contacto, incluyendo un botón flotante siempre visible, para maximizar la conversión de clientes.

## Estructura del Proyecto y Componentes

El sitio está construido con una arquitectura basada en componentes, lo que facilita su mantenimiento y escalabilidad.

-   **`src/pages/index.astro`**: El punto de entrada principal que ensambla todos los componentes para construir la página.

### Componentes de UI (`src/components/ui/`)

-   **`Navigation.astro`**: Barra de navegación superior fija.
-   **`HeroSection.astro`**: La impactante sección de bienvenida con el título principal y los CTA.
-   **`ResidentialSection.astro`**: Presentación de los servicios residenciales en una cuadrícula adaptable.
-   **`ServiceSection.astro`**: Muestra los servicios clave en tarjetas con efecto de vidrio.
-   **`BrandsSection.astro`**: Un carrusel automático que muestra logotipos de marcas de confianza.
-   **`NeighborhoodSection.astro`**: Lista de barrios cubiertos por el servicio.
-   **`Testimonials.astro`**: Contenedor para el carrusel de reseñas.
-   **`FaqSection.astro`**: Una sección de preguntas frecuentes en formato de acordeón para resolver dudas comunes.

### Componentes Core (`src/components/core/`)

-   **`ReviewsSlider.astro`**: Un carrusel interactivo (potenciado por Swiper.js) para mostrar testimonios de clientes.
-   **`FloatingCTA.astro`**: El botón de contacto flotante que permanece visible en toda la página.

## Pila Tecnológica

-   **Framework Principal**: [Astro.js](https://astro.build/)
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
-   **Interactividad**: Astro Islands con JavaScript puro (para `IntersectionObserver`) y [Swiper.js](https://swiperjs.com/) para el carrusel.
-   **Despliegue**: Preparado para despliegue en cualquier plataforma de hosting estático como Firebase, Vercel o Netlify.

## Cómo Empezar

1.  **Clona el repositorio:**
    ```bash
    git clone https://URL-DEL-REPOSITORIO.git
    cd NOMBRE-DEL-DIRECTORIO
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

    Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver el sitio en acción.

## Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo de Astro.
-   `npm run build`: Compila el sitio para producción en la carpeta `dist/`.
-   `npm run preview`: Sirve el sitio compilado localmente para previsualización.
-   `npm run astro`: Accede a la CLI de Astro para comandos avanzados.
