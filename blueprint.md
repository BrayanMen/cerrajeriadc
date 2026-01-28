# Blueprint: Cerrajería de Urgencia - Astro.js

## 1. Visión General del Proyecto

**Propósito:** Crear un sitio web de una sola página, moderno, rápido y optimizado para SEO para un servicio de cerrajería de urgencia en la Capital Federal.

**Capacidades Clave:**
-   Presentar los servicios ofrecidos de forma clara y directa.
-   Generar confianza a través de reseñas de clientes y mención de marcas reconocidas.
-   Comunicar el área de cobertura de manera efectiva.
-   Facilitar el contacto inmediato a través de un llamado a la acción (CTA) flotante y visible en todo momento.
-   Resolver dudas comunes con una sección de preguntas frecuentes (FAQ).
-   Ser completamente responsive y veloz en dispositivos móviles.

**Pila Tecnológica:**
-   **Framework:** Astro.js
-   **Estilos:** Tailwind CSS con clases personalizadas y un esquema de colores definido.
-   **Interactividad:** Mínima, utilizando la arquitectura de "Islas de Astro" para componentes específicos cuando sea necesario (como el carrusel de reseñas).
-   **Hosting:** Firebase (preparado para despliegue estático).

---

## 2. Documentación del Proyecto (Estado Actual)

Esta sección detalla todos los componentes y características implementados en la aplicación.

### Diseño y Estilo Global (`src/layouts/Layout.astro`)
-   **Fondo:** Un color de fondo oscuro y sólido (`#0D0D0D`) con una textura de ruido sutil para dar una sensación premium.
-   **Tipografía:** Fuente sans-serif moderna (familia `Inter`).
-   **Paleta de Colores:**
    -   `primary`: Un amarillo vibrante para llamadas a la acción y elementos destacados.
    -   `secondary`: Tonos de gris oscuro para fondos de sección.
    -   `card`: Un gris ligeramente más claro para las tarjetas.
    -   `border`: Un gris para los bordes.
    -   `text`: Blanco principal.
    -   `muted-foreground`: Un gris más suave para texto secundario.
-   **Responsividad:** El diseño es completamente adaptativo (responsive), asegurando una experiencia de usuario óptima en dispositivos móviles, tabletas y ordenadores de escritorio.
-   **Efectos Visuales:**
    -   **Glass Card:** Efecto de "vidrio esmerilado" en las tarjetas para crear profundidad.
    -   **Text Gradient:** Un gradiente de texto sutil para títulos destacados.
    -   **Animaciones:** Efectos de aparición suave (`fade-in`, `slide-in`) al hacer scroll, gestionados por `IntersectionObserver`.

### Componentes Implementados

Todos los componentes han sido diseñados y ajustados para ser completamente responsivos.

#### **`src/components/ui/Navigation.astro`**
-   **Función:** Barra de navegación fija en la parte superior.
-   **Características:** Logo, menú de navegación adaptable y botón de "Contacto".

#### **`src/components/ui/HeroSection.astro`**
-   **Función:** Sección de bienvenida principal.
-   **Características:** Título principal, subtítulo, botones de CTA y estadísticas clave. Totalmente responsivo, con adaptación de fuentes y botones para móviles.

#### **`src/components/ui/ResidentialSection.astro`**
-   **Función:** Presenta los servicios de cerrajería residencial.
-   **Características:** Diseño de cuadrícula que se adapta de una a dos columnas según el tamaño de la pantalla, mejorando la legibilidad en móviles.

#### **`src/components/ui/ServiceSection.astro`**
-   **Función:** Presentar los principales servicios ofrecidos.
-   **Características:** Diseño de cuadrícula de 3 columnas con tarjetas de vidrio, adaptable a pantallas más pequeñas.

#### **`src/components/ui/BrandsSection.astro`**
-   **Función:** Mostrar logotipos de marcas de confianza.
-   **Características:** Carrusel de logotipos en escala de grises que se desliza automáticamente.

#### **`src/components/ui/NeighborhoodSection.astro`**
-   **Función:** Muestra el área de cobertura listando los barrios.
-   **Características:** Lista de barrios claramente presentada.

#### **`src/components/ui/Testimonials.astro` y `src/components/core/ReviewsSlider.astro`**
-   **Función:** Carrusel interactivo de testimonios.
-   **Características:** Utiliza Swiper.js y se carga solo cuando es visible (`client:visible`) para optimizar el rendimiento.

#### **`src/components/ui/FaqSection.astro`**
-   **Función:** Responder a las preguntas más comunes en formato de acordeón.

#### **`src/components/core/FloatingCTA.astro`**
-   **Función:** Botón de acción flotante persistente para contacto inmediato.

---

## 3. Plan de la Última Modificación (Completado)

**Solicitud del Usuario:** "acomoda los estilos de la herosection para que se responsivo en todas las pantallas sin perder sus estilos" y "ajusta ahora el ResidentialSection para que sea responsivo".

**Interpretación:** El usuario solicitó hacer que los componentes `HeroSection` y `ResidentialSection` fueran completamente responsivos para asegurar una visualización correcta en todos los dispositivos.

**Plan de Ejecución Completado:**

1.  **Actualizar `blueprint.md`:** Se registró el nuevo plan de modificación.
2.  **Ajustar `HeroSection`:** Se modificó `src/components/ui/HeroSection.astro`, ajustando clases de Tailwind CSS para adaptar tamaños de fuente, espaciado y la disposición de los botones CTA en diferentes tamaños de pantalla.
3.  **Ajustar `ResidentialSection`:** Se modificó `src/components/ui/ResidentialSection.astro`, cambiando la cuadrícula de servicios a una columna en móviles y dos en pantallas más grandes, y ajustando el botón CTA.
4.  **Actualizar Documentación:** Se actualizó la sección 2 de este blueprint para reflejar que todos los componentes clave son ahora totalmente responsivos.
5.  **Generar `README.md`:** Se procederá a crear un `README.md` detallado basado en la documentación actualizada.
