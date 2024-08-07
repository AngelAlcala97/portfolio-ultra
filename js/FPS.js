var buclePrincipal = {
	idEjecucion: null,
	ultimoRegistro: 0,
	aps: 0,
	fps: 0,
	iterar(registroTemporal) {
		buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
		buclePrincipal.actualizar(registroTemporal);
		buclePrincipal.dibujar();	

		if(registroTemporal - buclePrincipal.ultimoRegistro > 999) {
			buclePrincipal.ultimoRegistro = registroTemporal;
			// console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
			buclePrincipal.aps = 0;
			buclePrincipal.fps = 0;
		}
	},
	detener() {

	},
	actualizar(registroTemporal) {
		var currentdate = new Date();
		if (currentdate.getDate()<10 && (currentdate.getMonth()+1)<10 ){
			var datetime = "0" + currentdate.getDate() + "/0" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " - " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
		} else if (currentdate.getDate()>=10 && (currentdate.getMonth()+1)<10 ){
			var datetime = currentdate.getDate() + "/0" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " - " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
		}  else if (currentdate.getDate()<10 && (currentdate.getMonth()+1)>=10 ){
			var datetime = currentdate.getDate() + "/0" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " - " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
		} else{
			var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " - " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
		}
	    document.getElementById('time').innerHTML= datetime
		if(audio.ended){
			player.src='img/play.webp'
		}
		buclePrincipal.aps++;
	},
	dibujar(registroTemporal) {
		buclePrincipal.fps++;
	}
};


