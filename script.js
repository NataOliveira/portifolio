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
        document.querySelector(".spanBtn").innerHTML = '⏾'
        splineClara.style.display = "none";
        splineEscura.style.display = "block";
    }
}



   