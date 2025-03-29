//Codificar orden de pedido por fecha
let fechaActual = new Date();
let añoActual = parseInt(fechaActual.getFullYear());
let mesActual = parseInt(fechaActual.getMonth()) + 1;
let diaActual = parseInt(fechaActual.getDate());
let horaActual = parseInt(fechaActual.getHours());
let minutoActual = parseInt(fechaActual.getMinutes());
var tag = document.getElementById("ide__orden");
tag.innerHTML = "Orden de pedido >>" + añoActual + mesActual + "/" + diaActual + "-" + horaActual + minutoActual + "<<";
//alert(`Valor a mostrar = ${mesNacimiento}`)
//alert(`Valor a mostrar = ${campos.fecha}`)

//función para enviar valores del select
function submitValue() {
    //sacar array con datos del select
    var precios = new Array;
    var elementos = new Array;
    var total = 0;
    var ide = Number(document.getElementById("ide").innerHTML);
    for (j = 1; j < ide + 1; j++) {
        var selectObject = document.getElementById(`menu__${j}`);
        for (var i = 0; i < selectObject.options.length; i++) {
            if (selectObject.options[i].selected == true) {
                total = total + Number(selectObject.options[i].value);
                precios.push(selectObject.options[i].value);
                elementos.push(selectObject.options[i].text);
            };
        };
    };
    //alert(elementos[0]);
    //alert(total);
    // Store the value in localStorage
    localStorage.setItem('myValue__0', total);
    localStorage.setItem('myValue__1', precios);
    localStorage.setItem('myValue__2', elementos);
    // Redirect to the second page
    window.location.href = 'pedido.html';
};
//función para recibir los datos de la selección de menú
window.onload = getValues;
function getValues() {
    // Get the value from localStorage
    var value__0 = localStorage.getItem('myValue__0');
    var value__1 = localStorage.getItem('myValue__1');
    var value__2 = localStorage.getItem('myValue__2');
    //Separador de datos enviado
    var coma = ",";
    var arrayPrecios = value__1.split(coma);
    var arrayElementos = value__2.split(coma);
    // Display the value on the page
    for (var i = 0; i < arrayPrecios.length; i++) {
        document.getElementById('listaPrecios').innerText += arrayPrecios[i] + '\n';
        document.getElementById('listaElementos').innerText += arrayElementos[i] + '\n';
    };
    var output__0 = document.getElementById('totalCost');
    output__0.innerText = value__0;
};





