
function primeraParte(){
    pizarra.beginPath()
    pizarra.moveTo(500,520)
    pizarra.lineTo(1000,520)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()

    pizarra.beginPath()
    pizarra.moveTo(550,520)
    pizarra.lineTo(550,100)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function segundaParte(){
    pizarra.beginPath()
    pizarra.moveTo(550,100)
    pizarra.lineTo(750,100)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function terceraParte(){
    pizarra.beginPath()
    pizarra.moveTo(750,100)
    pizarra.lineTo(750,200)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function cabeza(){
    pizarra.fillStyle = "#ff300781"
    pizarra.beginPath()
    pizarra.arc(750,250,50,0,2*3.14);
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.fill()
    pizarra.closePath()
}

function cuerpo(){
    pizarra.beginPath()
    pizarra.moveTo(750,300)
    pizarra.lineTo(750,420)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function brazoUno(){
    pizarra.beginPath()
    pizarra.moveTo(750,300)
    pizarra.lineTo(700,380)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function brazoDos(){
    pizarra.beginPath()
    pizarra.moveTo(750,300)
    pizarra.lineTo(800,380)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function piernaUno(){
    pizarra.beginPath()
    pizarra.moveTo(750,420)
    pizarra.lineTo(800,500)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function piernaDos(){
    pizarra.beginPath()
    pizarra.moveTo(750,420)
    pizarra.lineTo(700,500)
    pizarra.lineWidth = 6
    pizarra.lineCap = "round"
    pizarra.lineJoin = "round"
    pizarra.strokeStyle = "#300781"
    pizarra.stroke()
    pizarra.closePath()
}

function horca(){
    if(error === 8){
        primeraParte();
    }
    if(error === 7){
        segundaParte();
    }
    if(error === 6){
        terceraParte();
    }
    if(error === 5){
        cabeza();
    }
    if(error === 4){
        cuerpo();
    }
    if(error === 3){
        brazoUno();
    }
    if(error === 2){
        brazoDos();
    }
    if(error === 1){
        piernaUno();
    }
    if(error === 0){
        piernaDos();
    }
}

function finDelJuego(){
    if(error === 0){
        pizarra.clearRect(0,0,1200,860);
        pizarra.font = "bold 100px DynaPuff";
        pizarra.lineWidth = 6
        pizarra.lineCap = "round"
        pizarra.lineJoin = "round"
        pizarra.fillStyle = "#c02a2a"
        pizarra.fillText("Fin Del Juego",300,430);

        pizarra.font = "bold 50px DynaPuff";
        pizarra.lineWidth = 6
        pizarra.lineCap = "round"
        pizarra.lineJoin = "round"
        pizarra.fillStyle = "#c02a2a"
        pizarra.fillText("La palabra secreta era: " + palabraSecreta,300,530);
    }
}

function ganaste(){
    if(letras === palabraAcertada.length){
        pizarra.clearRect(500,530,1000,530);
        pizarra.font = "bold 100px DynaPuff";
        pizarra.lineWidth = 6
        pizarra.lineCap = "round"
        pizarra.lineJoin = "round"
        pizarra.fillStyle = "#1b8954"
        pizarra.fillText("Ganaste, felicidades",300,430);

        pizarra.font = "bold 50px DynaPuff";
        pizarra.lineWidth = 6
        pizarra.lineCap = "round"
        pizarra.lineJoin = "round"
        pizarra.fillStyle = "#1b8954"
        pizarra.fillText("La palabra secreta era: " + palabraSecreta,300,530);
        console.log(palabraSecreta)
    }
}
