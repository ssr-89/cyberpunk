export function swiperModule() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    watchOverflow: true,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      enabled: true,
      // Пауза между прокруткой (миллисекунды)
      delay: 4000,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
      // Отключить после ручного переключения
      disableOnInteraction: false,
    },
  });
}