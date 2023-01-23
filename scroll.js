const galerias = document.querySelector(".galerias")

window.addEventListener("scroll", ()=>{
    
    let pantalla = window.innerHeight;
   
    let ubicacionObjeto = galerias.getBoundingClientRect().top

    
    if(ubicacionObjeto <= pantalla){
        galerias.classList.add("aparece-galerias")
    }
    else{
        galerias.classList.remove("aparece-galerias")

    }
   
})

const drake = document.querySelector(".drake")
  
window.addEventListener("scroll",()=>{
    let pantalla =window.innerHeight;
    let ubicacionObjeto = drake.getBoundingClientRect().top
    if(ubicacionObjeto <= pantalla){
        drake.classList.add("aparece-drake")
        }
    else{
        drake.classList.remove("aparece-drake")
    }
})


const section3 = document.querySelector(".section3")
  
window.addEventListener("scroll",()=>{
    let pantalla =window.innerHeight;
    let ubicacionObjeto = section3.getBoundingClientRect().top
    if(ubicacionObjeto <= pantalla){
        section3.classList.add("aparece-section3")
        }
    else{
        section3.classList.remove("aparece-section3")
    }
})






const goku = document.querySelector(".goku")
  
window.addEventListener("scroll",()=>{
    let pantalla =window.innerHeight;
    let ubicacionObjeto = goku.getBoundingClientRect().top
    if(ubicacionObjeto <= pantalla){
        goku.classList.add("aparece-goku")
        }
    else{
        goku.classList.remove("aparece-goku")
    }
})



const kenshin = document.querySelector(".kenshin")
  
window.addEventListener("scroll",()=>{
    let pantalla =window.innerHeight;
    let ubicacionObjeto = kenshin.getBoundingClientRect().top
    if(ubicacionObjeto <= pantalla){
        kenshin.classList.add("aparece-kenshin")
        }
    else{
        kenshin.classList.remove("aparece-kenshin")
    }
})





const arrow = document.querySelector(".arrow")
  
window.addEventListener("scroll",()=>{
    let pantalla =window.innerHeight;
    let ubicacionObjeto = arrow.getBoundingClientRect().top
    if(ubicacionObjeto <= pantalla){
        arrow.classList.add("aparece-arrow")
        }
    else{
        arrow.classList.remove("aparece-arrow")
    }
})



const animacionimg= document.querySelector(".animacionimg")
    window.addEventListener("scroll",()=>{

        let pantalla = window.innerHeight;
        let ubicacionimg = animacionimg.getBoundingClientRect().top
        console.log(pantalla,ubicacionimg)
        if(ubicacionimg <= pantalla){
            animacionimg.classList.add("apareceimg")
        } 
        else { 
            animacionimg.classList.remove("apareceimg")
        }
        
    })
