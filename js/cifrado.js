let img = document.getElementById("imagen1");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let mensaje = document.getElementById("mensaje");
let aviso1 = document.getElementById("aviso_1");
let aviso2 = document.getElementById("aviso_2");
let salida = document.getElementById("salida");
let caja = document.getElementById("caja");
let copiar = document.getElementById("copiarTexto")




function fondoIMG(src){
    img.setAttribute("src", src);
    aviso1.innerHTML = "Ningún mensaje fue encontrado"
    aviso2.innerHTML ="Ingresa el texto que desees encriptar o desencriptar"
}

function encriptar() {
    let auxiliar = ""
    let encriptado = ""
    
    if (mensaje.value != "" && mensaje.value != " ") {
        
        img.setAttribute("src", "")
        aviso1.innerHTML = ""
        aviso2.innerHTML = ""

        for(let index = 0; index < mensaje.value.length; index++){
            auxiliar = mensaje.value.charAt(index);
            if (auxiliar === "a") {
                auxiliar = "ai"
            }if (auxiliar === "e") {
                auxiliar = "enter"
            }if (auxiliar == "i") {
                auxiliar = "imes";
            }if (auxiliar == "o") {
                auxiliar ="ober"
            }if (auxiliar == "u") {
                auxiliar = "ufat"
            }
    
            
            encriptado += auxiliar
            
        }
    }else{
        alert("Ingrese un mensaje por favor")
        
    }
    
    salida.innerHTML = encriptado
    

    // console.log(encriptado)
    
}

function desencriptar() {
    

    if (mensaje.value != "" && mensaje.value !=" ") {
        img.setAttribute("src", "")
        aviso1.innerHTML = ""
        aviso2.innerHTML = ""
        let a = mensaje.value;
        let auxiliar = a.replaceAll("ai","a");
        a = auxiliar;

        auxiliar = a.replaceAll("enter", "e");
        a = auxiliar

        auxiliar = a.replaceAll("imes", "i");
        a = auxiliar

        auxiliar = a.replaceAll("ober", "o");
        a = auxiliar

        auxiliar = a.replaceAll("ufat", "u");

        salida.innerHTML = auxiliar

    }else{
        alert("Ingrese un mensaje por favor")
    }

    // console.log(auxiliar)
}



fondoIMG("img/Muñeco.png");

async function copiarTexto() {
    
  
    // Obtener el texto del elemento textarea
    var texto = salida.value;
  
    // Copiar el texto al portapapeles
    await navigator.clipboard.writeText(texto);
  }
  

boton1.onclick = encriptar
boton2.onclick = desencriptar
copiar.onclick = copiarTexto