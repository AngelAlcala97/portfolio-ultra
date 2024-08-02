var nubes=[];
var contadorNubes=0;

function randomNumber(quantity0,quantity1){
    return Math.floor((Math.random() * ((quantity1 + 1) - quantity0)) + quantity0);
 }

class CreaNubes{
    constructor(nombre,imagen,posy,posx,zindex,tiempoAnimacion){
        this.nombre=nombre
        this.imagen=imagen
        this.posy=posy
        this.posx=posx
        this.zindex=zindex
        this.tiempoAnimacion=tiempoAnimacion
    }
    generarNube(){
        document.querySelector('.header .nubes').innerHTML+='<img id="'+this.nombre+'"src="totoro/img/nube'+this.imagen+'.png">'
        document.getElementById(this.nombre).style.position= 'absolute'
        document.getElementById(this.nombre).style.width= '16vw'
        document.getElementById(this.nombre).style.left= this.posx + 'vw'
        document.getElementById(this.nombre).style.top= this.posy + 'vh'
        document.getElementById(this.nombre).style.zIndex= this.zindex
        document.getElementById(this.nombre).style.animation= 'nublado '+this.tiempoAnimacion+'s linear infinite'
    }
}

function Nublado(){
    if (contadorNubes<=20){
    // setTimeout(() => {
        nubes.push(new CreaNubes("nube"+contadorNubes,randomNumber(2,3), randomNumber(1,80),randomNumber(-20,100),randomNumber(0,9),randomNumber(60,150)))
        nubes[contadorNubes].generarNube();
        contadorNubes++
        Nublado()
    // }, 0);
} 
}