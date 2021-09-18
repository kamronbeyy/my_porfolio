/* ============ sticky header ================== */
window.addEventListener('scroll', e =>{
    if(this.pageYOffset > 60){
        document.querySelector('.header').classList.add('sticky');
    }else{
     document.querySelector('.header').classList.remove('sticky');
    }
 });
/* ============= sticky header =================== */
window.addEventListener('load', e =>{

    // page loader
    // document.querySelector('.page-loader').classList.add('fade-out');
    // setTimeout(() => {
        document.querySelector('.page-loader').style.display = 'none';
    // }, 2000);
    AOS.init();
})
/* Scroll animation coding */
gsap.to("#bg", {
    scrollTrigger : {
        scrub : 1
    },
    scale : 1.5
});

gsap.to("#man", {
    scrollTrigger : {
        scrub : 1
    },
    scale : 0.5
});

gsap.to("#mountain_left", {
    scrollTrigger : {
        scrub : 1
    },
    x : -500,
});

gsap.to("#mountain_right", {
    scrollTrigger : {
        scrub : 1
    },
    x : 500,
});

gsap.to("#clouds_1", {
    scrollTrigger : {
        scrub : 1
    },
    x : 200,
});

gsap.to("#clouds_2", {
    scrollTrigger : {
        scrub : 1
    },
    x : -200,
});

gsap.to("#text", {
    scrollTrigger : {
        scrub : 1
    },
    scale : 0.2
});

const myPhoto = gsap.utils.toArray('.myPhoto');
 myPhoto.forEach((img, i) => {
    ScrollTrigger.create({
        trigger:img,
        toggleClass:'active',
        start: "top 65%",
        end:"top 1%",
    })
});

const infoTitle = gsap.utils.toArray('.info-title');
 infoTitle.forEach((text, i) => {
    ScrollTrigger.create({
        trigger:text,
        toggleClass:'active',
        start: "top 65%",
        end:"top 8%",
    })
});

const infoText = gsap.utils.toArray('.info-text');
 infoText.forEach((text1, i) => {
    ScrollTrigger.create({
        trigger:text1,
        toggleClass:'active',
        start: "top 65%",
        end:"top 8%",
    })
});
/* Scroll animation coding and */



/* Slider js coding */
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // loop: true,
    effect: 'cube',
      grabCursor: true,
      cubeEffect:{
          shadow: true,
          slideShadows: true,
          shadowOffset:50,
          shadowScale: 0.94,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
/* Slider js and */



/* Typed js coding */
var typed = new Typed('.anime', {
    // Waits 1000ms after typing "First"
    strings: [
        'telegram : komronbey_1718',
         'komronbeksunnatov1@gmail.com'
    ],

    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
/* Typed js coding and */
let skillsItem = document.querySelector('.skills-item')
VanillaTilt.init(document.querySelectorAll(".skills-item"), {
    max: 25,
    speed: 250,
    glare: true,
    "max-glare": 0.5,
  });
