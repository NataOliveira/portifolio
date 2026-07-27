

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

const menu = document.querySelector(".navbar")
const btnTema = document.querySelector(".divBtnTema")
const linksNav = document.querySelector(".linksnav")
const logo = document.querySelector(".logo")
document.querySelector(".btnMenu").addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    btnTema.classList.toggle('ativo');
    linksNav.classList.toggle('ativo');
    logo.classList.toggle('ativo');

document.querySelector(".linksnav.ativo").addEventListener('click', () =>{
    menu.classList.remove('ativo');
    btnTema.classList.remove('ativo');
    linksNav.classList.remove('ativo');
    logo.classList.remove('ativo');
})

document.querySelector(".logo.ativo").addEventListener('click', () =>{
    menu.classList.remove('ativo');
    btnTema.classList.remove('ativo');
    linksNav.classList.remove('ativo');
    logo.classList.remove('ativo');
})
    
})  

/* animação de escrever do h1 */

const texto = "Natan Oliveira";
const h1 = document.querySelector(".h1natan");
let i = 0;

function digitar() {
    if (i < texto.length) {
        h1.textContent += texto.charAt(i);
        i++; // <- faltava isso

        let delay = 60 + Math.random() * 90;

        if (texto.charAt(i - 1) === ' ') delay += 100;
        if (['.', ',', '!', '?'].includes(texto.charAt(i - 1))) delay += 200;

        setTimeout(digitar, delay);
    }
}
digitar();


/*Função animação Section Sobre*/
window.sr =ScrollReveal({reset: true, distance: '60px'});

//--------HERO-Animation----------------

sr.reveal('.subtitulo', {
    duration:3000,
    rotate: {x: 0, y:-100, z: 0}
})
sr.reveal('.bt1', {
    duration:3000,
    origin: 'top',
    
})
sr.reveal('.bt2', {
    duration:3000,
    origin: 'right',
    rotate: {x: 20, z: 20}, 
})

//---------Sobre-Animation-----

sr.reveal('.foto', {
    duration:2000,
    origin: 'left',
    
})
sr.reveal('.descricaosobre', {
    duration:2000,
    origin: 'rigth',
   
    
})



//---------Habilidades-Animation-----

sr.reveal('.ch1',{
    duration:3000,
    origin: 'bottom',
    delay: 100,
    
})
sr.reveal('.ch2',{
    duration:3000,
    origin: 'bottom',
    delay: 300,
   
})
sr.reveal('.ch3',{
    duration:3000,
    origin: 'bottom',
    delay: 500,
    
})
sr.reveal('.ch4',{
    duration:3000,
    origin: 'bottom',
    delay: 700,
    
})
sr.reveal('.ch5',{
    duration:3000,
    origin: 'bottom',
    delay: 900,
    
})
sr.reveal('.ch6',{
    duration:3000,
    origin: 'bottom',
    delay: 1100,
    
})


//---------Carrosel-Projetos-----

const swiperProjetos = new Swiper(".swiper", { 
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: '.swiper-button-prev',
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