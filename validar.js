//Mensaje para accesos en mantemimiento
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    document.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click', function(event) {
        if (this.getAttribute('href')==='#'){
          event.preventDefault();
          alert('En mantenimiento')
        }
      });
    });
   });

 //validar información
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

 const expresiones = {
  usuario:/^[a-zA-Z0-9\_\-]{4,16}$/,
  nombre:/^[a-zA-Z\s]{1,40}$/,
  apellido:/^[a-zA-Z\s]{1,40}$/,
  edad:/^[a-zA-Z\s]{1,40}$/,
  ciudad:/^[a-zA-Z\s]{1,40}$/,
  direccion:/^[a-zA-Z0-9\_\-]{4,16}$/,
  identificacion:/^\d{7,14}$/,
  telefono:/^\d{7,14}$/,
  email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
  nombre = false,
  apellido = false;
  edad = false;
  ciudad = false;
  direccion = false;
  identificacion = false;
  telefono = false
  email
}
//evaluar imput nombre
const validarFormulario = (e) =>{
  switch(e.target.name) {
    case "nombre":
      validarcampo(expresiones.nombre,e.target,'nombre')
    break;
    case "apellido":
      validarcampo(expresiones.apellido,e.target,'apellido')
    break;
    case "identificacion":
      validarcampo(expresiones.identificacion,e.target,'identificacion')
    break;
    case "edad":
      validarcampo(expresiones.edad,e.target,'edad')
    break;
    case "ciudad":
      validarcampo(expresiones.ciudad,e.target,'ciudad')
    break;
    case "direccion":
      validarcampo(expresiones.direccion,e.target,'direccion')
    break;
    case "telefono":
      validarcampo(expresiones.telefono,e.target,'telefono')
    break;
    case "correo":
      validarcampo(expresiones.email,e.target,'email')
    break;
  }
}
const validarcampo = (expresion,input,campo)=>{
  if(expresion.usuario.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelectorAll(`#grupo__${campo}.formulario__input-error`).classList.remove('formulario__input-error-activo')
    campos[campo]=true;
  }else{
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.querySelectorAll(`#grupo__${campo}.formulario__input-error`).classList.add('formulario__input-error-activo')
    campos[campo]=false;
  }
}
inputs.forEach(()=>{
  input.addEventListener('keyup',validarFormulario);
  input.addEventListener('blur',validarFormulario);

});

//para evaluar formulario y no enviar
formulario.addEventListener ('submit',(e)=>{
  e.preventDefault()
  const terminos = document.getElementById('terminos')
  if(campos.nombre && campos.apellido && campos.identificacion && campos.edad && campos.ciudad && campos.direccion && campos.telefono &&
     campos.correo && terminos.checked){
      //formulario.sent(); //para enviar

     document.getElementById('formulario__mensaje-enviar').classList.add(formulario__mensaje-enviar-activo) 
      setTimeout(()=>{
        document.getElementById('formulario__mensaje-enviar').classList.remove(formulario__mensaje-enviar-activo)
      },3000);
  }else{
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  }
});

