//Mensaje para accesos en mantemimiento
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
      if (this.getAttribute('href') === '#') {
        event.preventDefault();
        alert('En mantenimiento')
      }
    });
  });
});
//Caracteristicas textarea
function mensaje() {
  document.getElementById('comentario').addEventListener('keyup', caracteres);
  function caracteres() {
    let cant = document.getElementById('comentario').value.length;
    let disponibles = 120 - parseInt(cant);
    document.getElementById('cantidad').innerHTML = disponibles;
    if (disponibles == 0) {
      alert('No hay campo disponible');
    }
  }
};
//Validar formulario
//Acceso al formulario para crear arreglo de inputs
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
//Expresiones para validar
const expresiones = {
  nombre: /^[a-zA-Z\ñ]+ [a-zA-Z\ñ]{4,20}$/,
  apellido: /^[a-zA-Z\ñ]+ [a-zA-Z\ñ]{4,20}$/,
  identificacion: /^[\d]{7,11}$/,
  ciudad: /^[a-zA-Z]{4,20}$/,
  direccion: /^.[^¿?¡!´'"^]{12,80}$/,
  telefono: /^[\d]{10}$/,
  email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
};
//Expresiones para validar campos
const campos = {
  nombre: false,
  apellido: false,
  identificacion: false,
  ciudad: false,
  direccion: false,
  telefono: false,
  email: false,
  fecha: false
};
//Función validar imputs
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
    case "apellido":
      validarCampo(expresiones.apellido, e.target, 'apellido');
      break;
    case "identificacion":
      validarCampo(expresiones.identificacion, e.target, 'identificacion');
      break;
    case "ciudad":
      validarCampo(expresiones.ciudad, e.target, 'ciudad');
      break;
    case "direccion":
      validarCampo(expresiones.direccion, e.target, 'direccion');
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
    case "email":
      validarCampo(expresiones.email, e.target, 'email');
      break;
    case "fecha":
      validarDato();
      break;
  };
};
//Función validar campos por ingreso de caracteres 
const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove('invalid');
    document.getElementById(`grupo__${campo}`).classList.add('valid');
    document.getElementById(`señal__${campo}`).classList.remove('input_error-activo');
    document.getElementById(`señal__${campo}`).classList.add('input_error');
    document.getElementById(`${campo}`).classList.remove('invalid');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.remove('valid');
    document.getElementById(`grupo__${campo}`).classList.add('invalid');
    document.getElementById(`señal__${campo}`).classList.remove('input_error');
    document.getElementById(`señal__${campo}`).classList.add('input_error-activo');
    document.getElementById(`${campo}`).classList.add('invalid');
    campos[campo] = false;
  }
};
//Función para calcular edad
const calcularEdad = (fechaNacimiento) => {
  //fecha actual
  let fechaActual = new Date();
  let añoActual = parseInt(fechaActual.getFullYear());
  let mesActual = parseInt(fechaActual.getMonth()) + 1;
  let diaActual = parseInt(fechaActual.getDate());
  //fecha nacimiento 15-10-2023
  let añoNacimiento = parseInt(fechaNacimiento.getFullYear());
  let mesNacimiento = parseInt(fechaNacimiento.getMonth()) + 1;
  let diaNacimiento = parseInt(fechaNacimiento.getDate());
  //calcular edad
  let edad = añoActual - añoNacimiento;
  let mes = mesActual - mesNacimiento;
  if (mes < 0 || (mes === 0 && diaActual < diaNacimiento)) {
    edad--;
  };
  return edad;
}
//condicional para pedir edad
const validarDato = () => {
  const fechaNacimiento = new Date(document.getElementById("fecha").value);
  const edad = calcularEdad(fechaNacimiento);
  if (edad >= 18) {
    document.getElementById(`grupo__fecha`).classList.remove('invalid');
    document.getElementById(`grupo__fecha`).classList.add('valid');
    document.getElementById(`señal__fecha`).classList.remove('input_error-activo');
    document.getElementById(`señal__fecha`).classList.add('input_error');
    document.getElementById(`fecha`).classList.remove('invalid');
    campos.fecha = true;
  } else {
    document.getElementById(`grupo__fecha`).classList.remove('valid');
    document.getElementById(`grupo__fecha`).classList.add('invalid');
    document.getElementById(`señal__fecha`).classList.remove('input_error');
    document.getElementById(`señal__fecha`).classList.add('input_error-activo');
    document.getElementById(`fecha`).classList.add('invalid');
    campos.fecha = false;
  }
};
//fúnción validar formulario
inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});
//Condiciones para envio
formulario.addEventListener('submit', (e) => {
  e.preventDefault()//Elemento para que no se envíe el formulario
  const terminos = document.getElementById('terminos')
  if (campos.nombre && campos.fecha && terminos.checked) {
    document.getElementById(`mensaje__envio`).classList.add('formulario__envio-activo');
    setTimeout(() => {
      document.getElementById(`mensaje__envio`).classList.remove('formulario__envio-activo')
    }, 5000);
  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
    }, 2000);
  }
});