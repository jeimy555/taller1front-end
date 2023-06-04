let btnmodal= document.getElementById("abrirmodal")
let ventanamodal=document.querySelector(".modal")
let cerrarmodal=document.querySelector(".cerrarmodal")
let contmodal=document.querySelector("contmodal")

btnmodal.addEventListener("click",()=>{
ventanamodal.style.display="block";
})
cerrarmodal.addEventListener("click",()=>{
    ventanamodal.style.display="none";
    })
ventanamodal.addEventListener("click",(onblur)=>{
    ventanamodal.style.display="none";
    })
