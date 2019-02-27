// burger click
// récupération des éléments à cibler
let burger = $(".burger");
let burgerMenu = $(".fa-bars");
let burgerCroix = $(".fa-times");
let nav = $(".menu-links");
let filtre = $(".filtre");
let body = $("body");

// fonction toggle burger
function burgerToggle() {
  burger.toggleClass("active");
  burgerMenu.toggleClass("hidden");
  burgerCroix.toggleClass("hidden");
  filtre.toggleClass("active");
  nav.toggleClass("active");
  body.toggleClass("fixed");
}
// click burger
burger.click(function (){
  burgerToggle();
});
filtre.click(function (){
  burgerToggle();
});
nav.click(function (){
  burgerToggle();
});


// burger scroll
// récupération des éléments à cibler
let menu = $(".menu");
let menuTop = $(".menu-top")

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if(scrollTop >= 50){
    menuTop.addClass("hidden");
    menu.addClass("fixed");
  }else{
    menuTop.removeClass("hidden");
    menu.removeClass("fixed");
  }
});







/*

let fixedStart = $(window).height();


function toScroll(){
  let scrollTop = $(window).scrollTop();
  //console.log("=> " + scrollTop + " to : " + fixedStart);
  if(scrollTop >= fixedStart){
    burger.addClass("fixed");
  }else{
    burger.removeClass("fixed");
  }
  
}


$(window).scroll(toScroll);

liens.click(function(){
  //$(this).addClass("active");
  burger.toggleClass("active");
  nav.toggleClass("active");
});

*/
