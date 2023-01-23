const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.3s";
    setTimeout (function (){
        slider.style.transition ="none",
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },300)
}



function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "-0%";
    slider.style.transition = "all 0.3s";
    setTimeout (function (){
        slider.style.transition ="none",
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },300)
}


btnRigth.addEventListener("click", function(){
    moverDerecha();
})

btnLeft.addEventListener("click", function(){
    moverIzquierda();
})

setInterval(function(){
    moverDerecha();

},3000);