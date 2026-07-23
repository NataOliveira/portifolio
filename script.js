

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


/*Função animação Section Sobre*/

document.addEventListener("DOMContentLoaded", () => {
    const containerSobre = document.querySelector('.conteinerSobre');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
           
            if (entry.isIntersecting) {
                containerSobre.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

  
    observer.observe(containerSobre);
});
   