var ingresoTexto;
var encriptarTexto;
var desencriptarTexto;
var copiarTexto;

function encriptador() {

    ingresoTexto = document.getElementById("ingresar-texto").value;
    var LowerCase = ingresoTexto.toLowerCase();
    


    encriptarTexto = ingresoTexto.replace(/e/gi, "enter");
    encriptarTexto = encriptarTexto.replace(/i/gi, "imes");
    encriptarTexto = encriptarTexto.replace(/o/gi, "ober");
    encriptarTexto = encriptarTexto.replace(/u/gi, "ufat");
    encriptarTexto = encriptarTexto.replace(/a/gi, "ai");

    document.getElementById("mensaje-encriptado").value = encriptarTexto.toLowerCase();

    ingresoTexto = document.getElementById("ingresar-texto").value = "";

}

function desencriptador() {

    ingresoTexto = document.getElementById("ingresar-texto").value;
    var LowerCase = ingresoTexto.toLowerCase();
  

    desencriptarTexto = ingresoTexto.replace(/enter/gi, "e");
    desencriptarTexto = desencriptarTexto.replace(/imes/gi, "i");
    desencriptarTexto = desencriptarTexto.replace(/ober/gi, "o");
    desencriptarTexto = desencriptarTexto.replace(/ufat/gi, "u");
    desencriptarTexto = desencriptarTexto.replace(/ai/gi, "a");

    document.getElementById("mensaje-encriptado").value = desencriptarTexto.toLowerCase();

    ingresoTexto = document.getElementById("ingresar-texto").value = "";
    ingresoTexto = document.getElementById("ingresar-texto").value;

}

function copiar() {
    var copiarTexto =  document.getElementById("mensaje-encriptado");
    copiarTexto.select();
    document.execCommand("copy");


}


