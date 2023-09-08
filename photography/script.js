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

const tglbtn = document.querySelector('.toggle_btn')
const ddmenu = document.querySelector('.dropdown_menu')
const subMenu = document.querySelector('.sub_menu')
const proSub = document.querySelector('.project_sub')

proSub.onclick = function () {
  subMenu.classList.toggle('animation')
};

tglbtn.onclick = function () {
  ddmenu.classList.toggle('open')
};


tglbtn.addEventListener('click', () => {
  tglbtn.classList.toggle('active')
});

