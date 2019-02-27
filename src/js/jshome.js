// vue pour le choix du formulaire dans le header
let app = new Vue({
  el: "#apphome",
  data: {
    choixForm: "form1"
  },
  created() {

  },
  methods: {
    changeChoix(param) {
      this.choixForm = param;
    }
  }
});

// récupération des boutons au dessus des formulaires
let btnsForm = $(".div-btns > a");
// changement de la class des boutons
btnsForm.click(function (){
  btnsForm.removeClass("active");
  $(this).addClass("active");
});

// mes swipers
// récupération de la largeur de la fenêtre
let largeurFenetre = $(window).width();
// vérification pour choisir le bon swiper
if(largeurFenetre < 800){

  // swiper de la partie blog
  let swiperBlog = new Swiper('#blog-swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
}else if (largeurFenetre >= 800 && largeurFenetre < 990) {

  // swiper de la partie blog
  let swiperBlog = new Swiper('#blog-swiper', {
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
}else{

  // swiper de la partie blog
  let swiperBlog = new Swiper('#blog-swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
}









