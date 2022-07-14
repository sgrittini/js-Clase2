
function saludar() {

    mesage("hola");
}

function saludarSergio() {
    mesage("hola Sergio");
}

function saludarA(nombre) {

    // mesage("hola "+nombre);
    mesage(`hola ${nombre}`);

}

function saludarANN() {
    let nombre = prompt("Como te llamas?");
    mesage("hola " + nombre);

}

function sumar() {
    let entrada1 = prompt("ingresa un nro");
    let entrada2 = prompt("ingresa otro nro");

    if (isNaN(entrada1) || isNaN(entrada2)) {
        mesage("no se puede sumar, uno de los dos valores no es un nro");
    }
    else {
        mesage("El resultado es: " + (parseInt(entrada1) + parseInt(entrada2)));
    }

}

function concatenar() {
    let entrada1 = prompt("ingresa un valor");
    let entrada2 = prompt("ingresa otro valor");
    mesage("El valor concatenado es: " + entrada1 + entrada2);


}

function mesage(mensaje) {
    /*
    Evalua que check esta checkeado
    los mensaje se muestran por cualquiera de estas combinaciones
    * Alert
    * Console
    * en la Pagina
    */

    if (document.getElementById('Alert').checked) {
        alert(mensaje);
    }
    
    if (document.getElementById('Console').checked) {
        console.log(mensaje);
    }

    //Siempre borra de la pagina por si hay algun mensaje
    //Si existe un pResultado el mismo es cargado por el JS
    //de existir recuper el padre y borra todos los hijos.
    let p = document.getElementById("pResultado");
    if (p != null) {
        let padre = p.parentNode;
        padre.removeChild(p);
    }

    /*si el check page esta chequeado, busca el id contenedor de resultado
    crea un p y añade el mensaje
    */
    if (document.getElementById('Page').checked) {
        let parent = document.getElementById("resultado");
        let elemento = document.createElement('p');
        elemento.setAttribute("id", "pResultado");
        elemento.innerText = mensaje;

        parent.appendChild(elemento);
    }

}