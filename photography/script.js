var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    slidesPerView: 1,
    initialSlide: 1,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
  });