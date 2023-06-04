//acceder al form
let form = document.getElementById("FormV");
const contr = form.contraseña.value;
const contr2 = form.contraseña2.value;
let fei1 = document.querySelector("#campoDoc .feedback");
let fei2 = document.querySelector("#campoN .feedback2");
let fei3 = document.querySelector("#campoApellido .feedback3"); 
let fei4 = document.querySelector("#FechaN .feedback4");
let fei5 = document.querySelector("#campoCorreo .feedback5");
let fei6 = document.querySelector("#campoContraseña .feedback6");
let fei7 = document.querySelector("#campoContraseña2 .feedback7");
let fei8 = document.querySelector("#terminos .feedback8");


//reglas de validacion
const $number = /[0-9]{1,15}/
const $password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).{10,}$/;

const text = /^[A-Za-zñÑáÁ]{1,30}/
const $fechaN = /^(19[0-9]{2}|200[0-2])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
const $correo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@misena\.edu\.co$/


//validacion antes de enviar el formulario
form.campotDoc.addEventListener("input", (z) => {

    if (campotDoc.value == 1 || campotDoc.value == 2 || campotDoc.value == 3) {
        form.campotDoc.setAttribute("class", "success")
        fei1.style.setProperty("visibility", "hidden")
        fei1.style.setProperty("opacity", "0")

    }
    else {
        form.campotDoc.classList.add("error")
        fei1.textContent = "solo bla bla bla"
        fei1.style.setProperty("visibility", "visible")
        fei1.style.setProperty("opacity", "1")
    }
})
//campo numero documento campo numero documento 
form.noDoc.addEventListener("input", (a) => {

    if ($number.test(a.target.value)) {
        form.noDoc.setAttribute("class", "success")
        fei1.style.setProperty("visibility", "hidden")
        fei1.style.setProperty("opacity", "0")

    }
    else {
        form.noDoc.classList.add("error")
        fei1.textContent = "solo bla bla bla"
        fei1.style.setProperty("visibility", "visible")
        fei1.style.setProperty("opacity", "1")
    }
})
//campo 
form.nombrea.addEventListener("input", (b) => {

    if (text.test(b.target.value)) {
        form.nombrea.setAttribute("class", "success")
        fei2.style.setProperty("visibility", "hidden")
        fei2.style.setProperty("opacity", "0")

    } else {
        form.nombre.setAttribute("class", "error")
        fei2.textContent = "uwu"
        fei2.style.setProperty("visibility", "visible")
        fei2.style.setProperty("opacity", "1")
    }
})

//campo apellido campo apellido campo apellido campo apellido campo apellido  
form.apellido.addEventListener("input", (c) => {

    if (text.test(c.target.value)) {
        form.apellido.setAttribute("class", "success")
        fei3.style.setProperty("visibility", "hidden")
        fei3.style.setProperty("opacity", "0")

    } else {
        form.apellido.setAttribute("class", "error")
        fei3.textContent = "soloa"
        fei3.style.setProperty("visibility", "visible")
        fei3.style.setProperty("opacity", "1")
    }
})
// campo fecha 
form.date.addEventListener("input", (d) => {

    if ($fechaN.test(d.target.value)) {
        form.date.setAttribute("class", "success")
        fei4.style.setProperty("visibility", "hidden")
        fei4.style.setProperty("opacity", "0")

    } else {
        form.date.setAttribute("class", "error")
        fei4.textContent = "correo"
        fei4.style.setProperty("visibility", "visible")
        fei4.style.setProperty("opacity", "1")
    }
})

//CORREO CORREO CORREO CORREO CORREO CORREO CORREO CORREO CORREO CORREO CORREO 

form.email.addEventListener("input", (e) => {

    if ($correo.test(e.target.value)) {
        form.email.setAttribute("class", "success")
        fei5.style.setProperty("visibility", "hidden")
        fei5.style.setProperty("opacity", "0")

    } else {
        form.email.setAttribute("class", "error")
        fei5.textContent = "correo"
        fei5.style.setProperty("visibility", "visible")
        fei5.style.setProperty("opacity", "1")
    }
})
//paswords
form.contraseña.addEventListener("input", (f) => {

    if ($password.test(f.target.value)) {
        form.contraseña.setAttribute("class", "success")
        fei6.style.setProperty("visibility", "hidden")
        fei6.style.setProperty("opacity", "0")

    } else {
        form.contraseña.setAttribute("class", "error")
        fei6.textContent = "debe incluir mínimo una letra mayúscula, un número, una letra minúscula, un carácter y debe ser mínimo de 10 caracteres."
        fei6.style.setProperty("visibility", "visible")
        fei6.style.setProperty("opacity", "1")
    }
})

form.contraseña2.addEventListener("input", (f) => {

    if (contr2==contr) {
        form.contraseña2.setAttribute("class", "success")
        fei7.style.setProperty("visibility", "hidden")
        fei7.style.setProperty("opacity", "0")

    } else {
        form.contraseña2.setAttribute("class", "error")
        fei7.textContent = "las contraseñas no coinciden"
        fei7.style.setProperty("visibility", "visible")
        fei7.style.setProperty("opacity", "1")
    }
})

//VALIDACIOOON VALIDACIOOON VALIDACIOOON VALIDACIOOON

form.addEventListener("submit", (e) => {
    e.preventDefault(); //DETENER PROPAGACION
  
    const docu = form.docu.value;
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const correoo = form.email.value;
  
  
  
    if (docu== 0 || docu==null) {
      alert(`debe ingresar un numero de documento`)
      form.docu.focus()
      form.docu.setAttribute("class","error")    
    }
  
    else if (nombre== 0 || nombre==null) {
      alert(`debe ingresar un nombre`)
      form.nombre.focus()
      form.nombre.setAttribute("class","error")    
    }
  
    else if (apellido== 0 || apellido==null) {
      alert(`debe ingresar un apellido`)
      form.apellido.focus()
      form.apellido.setAttribute("class","error") 
      
    }  
    else if (correoo== 0 || correoo==null) {
      alert(`debe ingresar un correo`)
      form.correoo.focus()
      form.correoo.setAttribute("class","error") 
    }
  
    else if (password== 0 || password==null) {
      alert(`debe ingresar una contraseña`)
      form.password.focus()
      form.password.setAttribute("class","error") 
    }
  
    else if (password2== 0 || password2==null) {
      alert(`debe ingresar una contraseña`)
      form.password2.focus()
      form.password2.setAttribute("class","error") 
    }
    else if (docu != 0 && docu!= null && nombre!= 0 && nombre!=null && apellido!= 0 && apellido!=null && correoo!= 0 && correoo!=null && password!= 0 && password!=null && password2!= 0 && password2!=null) {
  
      form.submit() //RENAUDAR EL ENVIO DEL FORMULARIO
      alert("datos enviados")
      }
  }
  )
