var estrellas=[];
var contadorEstrellas=0;
var pausar1;
var pausar2;

class CreaEstrellas{
    constructor(nombre,imagen,posy,posx,zindex,tiempoAnimacion){
        this.nombre=nombre
        this.imagen=imagen
        this.posy=posy
        this.posx=posx
        this.zindex=zindex
        this.tiempoAnimacion=tiempoAnimacion
    }
    generarEstrella(){
        document.querySelector('.header .estrellas').innerHTML+='<img alt="star" id="'+this.nombre+'"src="img/animados/estrellas'+this.imagen+'.webp">'
        document.getElementById(this.nombre).style.position= 'absolute'
        document.getElementById(this.nombre).style.width= '1vw'
        document.getElementById(this.nombre).style.left= this.posx + 'vw'
        document.getElementById(this.nombre).style.top= this.posy + 'vh'
        document.getElementById(this.nombre).style.zIndex= this.zindex
        document.getElementById(this.nombre).style.animation= 'estrellado '+this.tiempoAnimacion+'s alternate infinite'
    }
}

function Estrellado(){
    clearTimeout(pausar2)
    if (contadorEstrellas<=75){
        estrellas.push(new CreaEstrellas("estrella"+contadorEstrellas,randomNumber(2,2), randomNumber(-100,80),randomNumber(0,90),randomNumber(0,9),randomNumber(1,1)))
        estrellas[contadorEstrellas].generarEstrella();
        contadorEstrellas++
        Estrellado()
    } else {
        pausar1= setTimeout(() => {
            BorraEstrella()
        }, 6000);
    }

function BorraEstrella(){
    clearTimeout(pausar1)
    document.querySelector('.header .estrellas').style='opacity:0'
    pausar2= setTimeout(() => {
        document.querySelector('.header .estrellas').style='opacity:1'
        document.querySelector('.header .estrellas').innerHTML='';
        contadorEstrellas=0
        estrellas=[]
        Estrellado()
    }, 6200);
}
}