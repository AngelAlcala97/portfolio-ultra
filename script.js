var audio= document.getElementById('audio')
function musica(){
    var player = document.querySelector("footer img")
    // audio.play()
    player.src='img/pause.png'
    if(!audio.paused && !audio.ended){ 
            audio.pause();
             player.src='img/play.png'
    } else {
        audio.play()
    }
}

var estandarte= document.querySelector('#estandarte')
var linkedIn= document.querySelector('#linkedin')


function subirEstandarte(){
    linkedIn.classList.remove('noOpacidad');    
    estandarte.classList.add('noOpacidad');   
}

function bajarEstandarte(){
    linkedIn.classList.add('noOpacidad');    
    estandarte.classList.remove('noOpacidad');  
}




var angel= document.querySelector('#yo')
var pixelangel= document.querySelector('#pixelyo')
var click= document.querySelector('#click')

click.addEventListener('click', () => {
    if (pixelangel.classList.contains('noOpacidad')){
        pixelangel.classList.remove('noOpacidad')
        pixelangel.classList.add('porEncima')
        angel.classList.add('noOpacidad')
        angel.classList.remove('porEncima')
    } else {
        pixelangel.classList.add('noOpacidad')
        pixelangel.classList.remove('porEncima')
        angel.classList.remove('noOpacidad')
        angel.classList.add('porEncima')
    }
});


 

