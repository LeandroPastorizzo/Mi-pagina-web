const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto =false;


const toggleMenu = ()=>{
    enlaces.classList.toggle("enlaces3");
    enlaces.style.transition ="transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces3")){
        abierto=true;

    }else{
        abierto=false;
    }
})

