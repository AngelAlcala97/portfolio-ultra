
var inicio = {
    
	iniciar() {
        // buclePrincipal.iterar()
        Nublado()  
        Estrellado()  
	},
   start() {
        document.getElementById('start').innerHTML=`
        <main id="main">
            <div>
                <div class="mar"></div>
                <div id="estrella">
                    <div id="sol"><img src="img/sol.png"></div>
                    <div id="luna"><img src="img/luna.png"></div>
                </div>
                <div class="bird"><img id="bird1" src="img/bird.gif"></div>
                <div class="bird"><img id="bird2" src="img/bird.gif"></div>
                <div class="bird"><img id="bird3" src="img/bird.gif"></div>
                <div class="bird"><img id="bird4" src="img/bird.gif"></div>
            </div>
        </main>`
        Nublado()
        Estrellado()  
        var audio= document.getElementById('audio')
        audio.play()
 
}    

};


document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciar();
}, false);



