/*
<div class="recivido">
                	<p>Soy un mensaje</p>
                </div>
                <br>
                <div class="enviado">
                	<p>Soy un mensaje</p>
                </div>
                <br><br><br><br><br><br><br><br>
                <div class="recivido">
                	<p>Soy un mensaje</p>
                </div>
                <div class="enviado">
                	<p>Soy un mensaje</p>
                </div>
            </div>
*/

    	//Variable global del array
		
 $(document).ready(function(e) {
   		
     
     $("#kek").click(function send() {
			
			//var mensaje = document.getElementById("msg").value;
		    //var lugar = document.getElementById("panelChat");

		    var answerButton1 = document.getElementById("answer1").value;
		    var answerButton2 = document.getElementById("answer2").value;
			/*var env = document.createElement('p'); 
			env.className ='enviado';
			env.innerHTML = mensaje;
			lugar.append(env);
			var mybr = document.createElement('br');
			lugar.append(mybr);
			*/
		    /*
            Código de ejemplo para insertar los demás elementos
            var myDiv = document.createElement("div");
			var mybr = document.createElement('br');
			myDiv.className = 'enviado';
			myDiv.innerHTML = mensaje;
			lugar.append(mybr);
			lugar.appendChild(myDiv);
            */
		});

     $("#answer1").click(function sendMessage1() {
         var lugar = document.getElementById("panelChat");
         var answerButton1 = document.getElementById("answer1").value;
         var answerButton2 = document.getElementById("answer2").value;

         var myDiv = document.createElement("div");
         var mybr = document.createElement('br');
         myDiv.className = 'enviado';
         myDiv.innerHTML = answerButton1;
         lugar.append(mybr);
         lugar.appendChild(myDiv);

     });
	 
	 function Respuesta(message) {
         var lugar = document.getElementById("panelChat");
         var myDiv = document.createElement("div");
         var mybr = document.createElement('br');
         switch (message) {
             case 1: {
                 lugar.appendChild(mybr);
                 myDiv.className = 'recivido';
                 myDiv.innerHTML = "Oc";
                 lugar.appendChild(myDiv);
                 lugar.appendChild(mybr);
                 break;
             }
         }
     }
	
});
		
		
