

function conver() {

    let st=document.getElementById("pal").value
    let valor=parseInt(document.getElementById("selector").value)


switch (valor) {
    case 1:
    alert("la longitud de la palabra es "+st.length)
    
    
      break;
    case 2:
      alert(" la palabra en mayusculas es "+st.toUpperCase())
      break;
    case 3:
      alert(" la palabra en minusculas es "+st.toLowerCase())
      break;
    case 4:
      alert("la primera letra de la palabra es "+st.charAt(0))
      break;
    default:
      alert("a")
  }


}