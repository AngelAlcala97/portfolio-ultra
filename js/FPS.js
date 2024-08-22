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
		// CONTENEDOR DE AUDIO FLOTANTE CON BARRA DE TIEMPO

		// document.getElementById('contenedorTiempo').style.width+= (audio.duration) +'px'
		// document.getElementById('currentTime').style.width= Math.floor(audio.currentTime)+'px'
		// console.log(audio.currentTime+'%')
		// document.getElementById('currentTimeDiv').innerHTML= tiempoaudio(audio.currentTime)

		if(audio.ended){
			document.querySelector("footer #player").src='img/menu/play.webp'
		}

		var currentdate = new Date();
		function formatNumber(number) {
    		return number < 10 ? '0' + number : number;
		}
		var dia = formatNumber(currentdate.getDate());
		var mes = formatNumber(currentdate.getMonth() + 1); // getMonth() es 0-based
		var anio = currentdate.getFullYear();
		var horas = formatNumber(currentdate.getHours());
		var minutos = formatNumber(currentdate.getMinutes());
		var segundos = formatNumber(currentdate.getSeconds());
		var datetime = `${dia}/${mes}/${anio} - ${horas}:${minutos}:${segundos}`;
	    document.getElementById('time').innerHTML= datetime
		buclePrincipal.aps++;
	},
	dibujar(registroTemporal) {
		buclePrincipal.fps++;
	}
};


