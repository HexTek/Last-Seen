    var textos;
    var textosSeparados;
    var newDiv;
    var mensajeDentro;

$(document).ready(function (e){
   alert("welcome") ;
    var client = new XHLHttpRequest();
    client.open('GET','/example.txt');
    client.onreadystatechange = function(){
    textos = client.responseText;
    textosSeparados= textos.split(">");
    }
});

$("#answer1").click(function send(){
    //var divMensajes = document.getElementById("panelChat");
    //var textoDelMensaje = textosSeparados[1];
    alert("hola");
    //newDiv = document.createElement('div');
    //newDiv.className = 'mensaje';
    //newDiv.id = 'enviado';
    //mensajeDentro = document.createTextNode(textoDelMensaje);
    //newDiv.appendChild(mensajeDentro);
    //divMensajes.appendChild(newDiv);
    //client.send();
});	
		
