
/*-Funcão Tema--*/
function tema(){
    const corFundo = getComputedStyle(document.body).backgroundColor;
    const splineEscura = document.querySelector(".spline-escura");
    const splineClara = document.querySelector(".spline-clara");

    if (corFundo === "rgb(0, 0, 0)"){

        document.querySelector(".divBtnTema").style.flexDirection = "row-reverse"; 
        document.querySelector(".spanBtn").innerHTML = '☼︎'
        splineEscura.style.display = "none";
        splineClara.style.display = "block";
        document.documentElement.setAttribute('tema', 'light');
    }
    else{
        document.documentElement.removeAttribute('tema');
        document.querySelector(".divBtnTema").style.flexDirection = "row"; 
        document.querySelector(".spanBtn").innerHTML = '­­⏾'
        splineClara.style.display = "none";
        splineEscura.style.display = "block";
    }
}

/*Botão Menu*/

const menu = document.querySelector(".navbar");
const btnTema = document.querySelector(".divBtnTema");
const linksNav = document.querySelector(".linksnav");
const logo = document.querySelector(".logo");
const btnMenu = document.querySelector(".btnMenu");


function fecharMenu() {
  menu.classList.remove('ativo');
  btnTema.classList.remove('ativo');
  linksNav.classList.remove('ativo');
  logo.classList.remove('ativo');
}
btnMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  btnTema.classList.toggle('ativo');
  linksNav.classList.toggle('ativo');
  logo.classList.toggle('ativo');
});


linksNav.addEventListener('click', fecharMenu);
logo.addEventListener('click', fecharMenu);


/* animação de escrever do h1 */
const texto = "Natan Oliveira";
const h1 = document.querySelector(".h1natan");
let i = 0;

function digitar() {
    if (i < texto.length) {
        h1.textContent += texto.charAt(i);
        i++;

        let delay = 60 + Math.random() * 90;

        if (texto.charAt(i - 1) === ' ') delay += 100;
        if (['.', ',', '!', '?'].includes(texto.charAt(i - 1))) delay += 200;

        setTimeout(digitar, delay);
    }
}
digitar();


window.sr = ScrollReveal({ reset: false, distance: '60px' });


sr.reveal('.navbar', { duration: 2000, origin: 'top', delay: 50 });


sr.reveal('.subtitulo', {
    duration: 3000,
    rotate: { x: 0, y: -100, z: 0 }
});
sr.reveal('.bt1', { duration: 3000, origin: 'top' });
sr.reveal('.bt2', { duration: 3000, origin: 'right' }); 


sr.reveal('.foto', { duration: 2000, origin: 'left' });
sr.reveal('.descricaosobre', { duration: 2000, origin: 'right' });


sr.reveal('.ch1', { duration: 2000, origin: 'bottom', delay: 50 });
sr.reveal('.ch2', { duration: 2000, origin: 'bottom', delay: 100 });
sr.reveal('.ch3', { duration: 2000, origin: 'bottom', delay: 150 });
sr.reveal('.ch4', { duration: 2000, origin: 'bottom', delay: 200 });
sr.reveal('.ch5', { duration: 2000, origin: 'bottom', delay: 250 });
sr.reveal('.ch6', { duration: 2000, origin: 'bottom', delay: 300 });


sr.reveal('.swiper', { duration: 2000, origin: 'bottom', delay: 300 });
sr.reveal('.rodape', { duration: 2000, origin: 'bottom', delay: 300 });

const swiperProjetos = new Swiper(".swiper", { 
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500, 
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

