var audio= document.getElementById('audio')
function musica(){
    var player = document.querySelector("footer #player")
    // audio.play()
    player.src='img/pause.webp'
    if(!audio.paused && !audio.ended){ 
            audio.pause();
             player.src='img/play.webp'
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

const allLinks = document.querySelectorAll(".tabs a");
const allLi = document.querySelectorAll(".tabs li");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active-tab");
      } else {
        link.classList.remove("active-tab");
      }
    });

    allLi.forEach((lista) => {
        const idLi = lista.id;
        if (idLi.includes(linkId)) {
            lista.classList.remove("noActive-list");
            lista.classList.add("active-list");
        } else {
            lista.classList.remove("active-list");
            lista.classList.add("list");
        }
      });

    allTabs.forEach((tab) => {
      const id = tab.id;
      if (id.includes(linkId)) {
        tab.classList.add("tab-content--active");
      } else {
        tab.classList.remove("tab-content--active");
      }
    });
  });
});
 



