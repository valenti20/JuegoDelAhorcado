/*VARIABLES*/ 
var palabras = ["CSS", "ALURA", "HTML", "JAVASCRIPT", "FUTURO", "ORACLE"];
var pizarra = document.getElementById("pizarra").getContext("2d");
var letras = [];
var palabraAcertada = "";
var error = 9;

/*AGREGAR*/
function agregarPalabra(){
    const agregar = document.getElementById('agregar').focus();
    let palabraAgregada = agregar.value;
    let obtener = localStorage.setItem('lista', JSON.stringify(palabraAgregada));
    let lista = [obtener];
    console.log(lista);
    let agregando = palabras.push.apply(lista);
    console.log(palabras);
    agregar.value = ' ';
}agregarPalabra()

console.log(palabras);

/*PALABRA SECRETA*/
function palabraElegida(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return palabraSecreta
}

function guiones(){
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.beginPath()

    var ancho=600/palabraSecreta.length
    for(let i = 0; i < palabraSecreta.length; i++){
        pizarra.moveTo(500+(ancho*i),640)
        pizarra.lineTo(550+(ancho*i),640)
    }
    pizarra.stroke()
    pizarra.closePath()
}guiones(palabraElegida())

function letraCorrecta(index){
    pizarra.font = "bold 50px DynaPuff";
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.fillStyle = "#300781"

    var ancho=600/palabraSecreta.length
    pizarra.fillText(palabraSecreta[index],505+(ancho*index),620)
}

function letraIncorrecta(letra, errorsLeft){
    pizarra.font = "bold 40px DynaPuff";
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.fillStyle = "#300781"
    pizarra.fillText(letra, 535+(40*(10-errorsLeft)), 710, 40)
}

function validacion(key){
    if(letras.length<1 || letras.indexOf(key)<0){
        letras.push(key)
        return false
    }else{
        letras.push(key)
        return true
    }
}

function agregarLetraCorrecta(i){
    palabraAcertada += palabraSecreta[i].toUpperCase()
    setTimeout(ganaste,2500)
}

function agregarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        error-=1
        horca()
        setTimeout(finDelJuego,2500)
    }
}


 document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if(!validacion(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra)
            agregarLetraCorrecta(palabraSecreta.indexOf(letra))
            for(let i=0; i<palabraSecreta.length; i++){
                if(palabraSecreta[i]===letra){
                     letraCorrecta(i)
                 }
            }
        }else{
             if(!validacion(e.key)) return
                agregarLetraIncorrecta(letra)
                letraIncorrecta(letra,error)
        }
    }
}

