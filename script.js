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
var estandarteMovil= document.querySelector('.estandarte')


function subirEstandarte(){
    linkedIn.classList.remove('noOpacidad');    
    estandarte.classList.add('noOpacidad');   
}

function bajarEstandarte(){
    linkedIn.classList.add('noOpacidad');    
    estandarte.classList.remove('noOpacidad');  
}

function subirEstandarteMovil(){
    estandarteMovil.classList.add('noOpacidad');   
}

function bajarEstandarteMovil(){
    estandarteMovil.classList.remove('noOpacidad');  
}

 

