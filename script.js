function tema(){
    const corFundo = getComputedStyle(document.body).backgroundColor;
    const splineEscura = document.querySelector(".spline-escura");
    const splineClara = document.querySelector(".spline-clara");

    if (corFundo === "rgb(0, 0, 0)"){
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        document.querySelector(".h1natan").style.color = "rgb(0,0,0)";
        document.querySelector(".navbar").style.backgroundColor = "rgb(51, 51, 51)";
        document.querySelector(".divBtnTema").style.flexDirection = "row-reverse"; 
        document.querySelector(".divBtnTema").style.backgroundColor = "rgb(89, 89, 89)"
        document.querySelector(".bt2").style.backgroundColor = "rgb(51, 51, 51)";
        document.querySelector(".spanBtn").innerHTML = '⏾'
        document.querySelector(".spanBtn").style.color = "rgb(255, 255, 255)"
        splineEscura.style.display = "none";
        splineClara.style.display = "block";
    }
    else{
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        document.querySelector(".h1natan").style.color = "rgb(255,255,255)";
        document.querySelector(".navbar").style.backgroundColor = "rgb(51, 51, 51)";
        document.querySelector(".divBtnTema").style.backgroundColor = "rgb(89, 89, 89)"
        document.querySelector(".divBtnTema").style.flexDirection = "row"; 
        document.querySelector(".spanBtn").innerHTML = '☼︎'
        document.querySelector(".spanBtn").style.color = "rgb(255,255,255)"
        splineClara.style.display = "none";
        splineEscura.style.display = "block";
    }
}