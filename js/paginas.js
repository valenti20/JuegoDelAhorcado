const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");
const anadir = document.getElementById("añadir");

juego.style.display = 'none';
anadir.style.display = 'none';

function anadirFun(){
    anadir.style.display = 'inline';
    inicio.style.display = 'none';
    juego.style.displey = 'none';

    palabraElegida = null,
    guiones = null,
    letraCorrecta = null,
    letraIncorrecta = null,
    validacion = null,
    agregarLetraCorrecta = null,
    agregarLetraIncorrecta = null
}

let btnAnadir = document.getElementById('btnAnadir');
btnAnadir.addEventListener('click',anadirFun);

function juegoFun(){
    juego.style.display = 'inline';
    inicio.style.display ='none';
    anadir.style.display = 'none';

    agregarPalabra = null;
} 

let btnjuego = document.getElementById('btnJuego');
btnjuego.addEventListener('click', juegoFun);

let btnjuegoDos = document.getElementById('btnJuegoDos');
btnjuegoDos.addEventListener('click', juegoFun);

function inicioFun(){
    inicio.style.display = 'inline';
    juego.style.display ='none';
    anadir.style.display = 'none';
} 

let btninicio = document.getElementById('btnInicio');
btninicio.addEventListener('click', inicioFun);

let btninicioDos = document.getElementById('btnInicioDos');
btninicioDos.addEventListener('click', inicioFun);