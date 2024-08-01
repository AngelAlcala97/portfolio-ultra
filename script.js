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
