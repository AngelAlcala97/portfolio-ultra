var cometas=[];
var contadorCometas=0;
var pausar3;
var pausar4;

class CreaCometas{
    constructor(nombre,imagen,posy,posx,zindex,tiempoAnimacion){
        this.nombre=nombre
        this.imagen=imagen
        this.posy=posy
        this.posx=posx
        this.zindex=zindex
        this.tiempoAnimacion=tiempoAnimacion
    }
    generarCometa(){
        document.querySelector('.header .cometas').innerHTML+='<img id="'+this.nombre+'"src="img/cometa'+this.imagen+'.png">'
        document.getElementById(this.nombre).style.position= 'absolute'
        document.getElementById(this.nombre).style.width= '5vw'
        document.getElementById(this.nombre).style.left= this.posx + 'vw'
        document.getElementById(this.nombre).style.top= this.posy + 'vh'
        document.getElementById(this.nombre).style.zIndex= this.zindex
        document.getElementById(this.nombre).style.animation= 'cometado '+this.tiempoAnimacion+'s linear'
    }
}

function Cometado(){
    if (contadorCometas<=3){
        cometas.push(new CreaCometas("cometa"+contadorCometas,randomNumber(2,2), randomNumber(-50,0),randomNumber(20,100),randomNumber(9,9),randomNumber(10,40)))
        cometas[contadorCometas].generarCometa();
        contadorCometas++
        Cometado()
    } else {
        pausar3= setTimeout(() => {
           BorraCometa()
        }, 40000);
    }

function BorraCometa(){
        clearTimeout(pausar3)
        document.querySelector('.header .cometas').innerHTML='';
        contadorCometas=0
        cometas=[]
        Cometado()
}
}