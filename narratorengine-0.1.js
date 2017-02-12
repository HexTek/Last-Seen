/* Narrator Engine v0.1 | (c) 2017, HexTek Games */
var anuma, g, prueba, enviado, mensajeDentro;

var client = new XMLHttpRequest();
client.open('GET', '/example.txt');
client.onreadystatechange = function() {
    
  anuma = client.responseText;
  prueba = anuma.split(">");    
  alert(anuma);
  alert(prueba);
  alert(prueba[1]);
  alert(prueba[2]);
  alert(prueba[3]);  
      
}

function enviar(){
    alert(prueba[3]);
    g =document.createElement('div');
    g.className='mensaje';
    g.id = 'enviado';
    mensajeDentro =  document.createTextNode(prueba[3]);
    g.appendChild(mensajeDentro);
    document.getElementById('maidib').appendChild(g);
}

client.send();


