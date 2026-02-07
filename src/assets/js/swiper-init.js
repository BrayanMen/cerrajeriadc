
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export function initSwiper() {
  const swiper = new Swiper(".swiper-container", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: { delay: 2000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 30 },
    },
  });
}
