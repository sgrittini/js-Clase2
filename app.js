
function saludar()
{   

    mesage("hola");
}

function saludarSergio()
{
     mesage("hola Sergio");
}

function saludarA(nombre) {
   
   // mesage("hola "+nombre);
    mesage(`hola ${nombre}`);
  
}

function saludarANN() {
    let nombre = prompt("Como te llamas?");
    mesage("hola "+nombre);
    
}

function sumar(){
    let entrada1 = prompt("ingresa un nro");
    let entrada2 = prompt("ingresa otro nro");
    
    if(isNaN(entrada1)||isNaN(entrada2))
    {
        mesage("no se puede sumar, uno de los dos valores no es un nro");
    }
    else{
        mesage("El resultado es: "+(parseInt(entrada1)+parseInt(entrada2)));
    }

}

function mesage(mensaje) {
    
    if(document.getElementById('Alert').checked)
    {
        alert(mensaje);
    }

    if(document.getElementById('Console').checked)
    {
        console.log(mensaje);
    }
    
    
    
    let p = document.getElementById("pResultado");
    if (p!=null)
     {
         let padre = p.parentNode;
         padre.removeChild(p);
     }

    let parent = document.getElementById("resultado");
    let elemento = document.createElement('p');
    elemento.setAttribute("id","pResultado");
    elemento.innerText=mensaje;
    
    parent.appendChild(elemento);
}