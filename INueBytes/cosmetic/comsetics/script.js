var swiper = new Swiper(".home-swiper", {
    spaceBetween: 85,
    // centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 
  });



  var swiper = new Swiper(".p-swiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
   
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
    },
  });

  var swiper = new Swiper(".o-swiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
   
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
    },
  });
  var swiper = new Swiper(".testimonial-swiper", {

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
 
  });