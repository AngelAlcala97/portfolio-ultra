
var inicio = {
    
	iniciar() {
        buclePrincipal.iterar()
        Nublado()  
        Estrellado()
        Cometado()  
	}, 
};

function randomNumber(quantity0,quantity1){
    return Math.floor((Math.random() * ((quantity1 + 1) - quantity0)) + quantity0);
 }


document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciar();
}, false);



