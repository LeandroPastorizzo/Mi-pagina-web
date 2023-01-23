window.addEventListener("scroll",function(){
	var header = document.querySelector("nav.contenedor") ;
	header.classList.toggle("abajo",window.scrollY>0) ;
}) 

