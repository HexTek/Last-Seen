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
   		
		$("#kek").click(function send(){
			
			var mensaje = document.getElementById("msg").value;
			var lugar = document.getElementById("panelChat");
			/*var env = document.createElement('p'); 
			env.className ='enviado';
			env.innerHTML = mensaje;
			lugar.append(env);
			var mybr = document.createElement('br');
			lugar.append(mybr);
			*/
			var myDiv = document.createElement("div");
			var mybr = document.createElement('br');
			myDiv.className = 'enviado';
			myDiv.innerHTML = mensaje;
			lugar.append(mybr);
			lugar.appendChild(myDiv);
		});
	
});
		
		