function tema(){
    const corFundo = getComputedStyle(document.body).backgroundColor;
    const splineEscura = document.querySelector(".spline-escura");
    const splineClara = document.querySelector(".spline-clara");

    if (corFundo === "rgb(0, 0, 0)"){
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        document.querySelector(".h1natan").style.color = "rgb(0,0,0)";
        document.querySelector(".navbar").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        
        splineEscura.style.display = "none";
        splineClara.style.display = "block";
    }
    else{
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        document.querySelector(".h1natan").style.color = "rgb(255,255,255)";
        document.querySelector(".navbar").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        
        splineClara.style.display = "none";
        splineEscura.style.display = "block";
    }
}