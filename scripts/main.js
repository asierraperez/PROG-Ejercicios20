/*
Reset se crea aquí por se una función específica, pues hará que los valores de los relojes vuelvan a por defecto
*/
function reset() {
    var fecha = new Date();
    document.getElementById("textClock").innerHTML = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("textChronometer").innerHTML = "00:00:00:00";
    document.getElementById("textTemporizer").innerHTML = "00:00:00";
}

/*
Permite crear el evento que muestre el primer argumento y oculte los otros dos
*/
function eventActivate(show, hide1, hide2) {
    var divShow, divHide1, divHide2;

    divShow = document.getElementById(show.id.split("activate")[1]);
    divHide1 = document.getElementById(hide1.id.split("activate")[1]);
    divHide2 = document.getElementById(hide2.id.split("activate")[1]);
    //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
    //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
    show.addEventListener("click", () => {
        reset();
        divShow.style.display = "block";
        divHide1.style.display = "none";
        divHide2.style.display = "none";
        saveDivShown(divShow.id)
    });

}

function saveDivShown(functionName) {
    var isClock, isChronometer, isTemporizer;
    if (functionName == "Clock") {
        isClock = 1;
        isChronometer = 0;
        isTemporizer = 0;

    } else if (functionName == "Chronometer") {
        isClock = 0;
        isChronometer = 1;
        isTemporizer = 0;

    } else {
        isClock = 0;
        isChronometer = 0;
        isTemporizer = 1;

    }
    localStorage.setItem("isClock", isClock);
    localStorage.setItem("isChronometer", isChronometer);
    localStorage.setItem("isTemporizer", isTemporizer);
}

/* 
Función para establecer la funcionalidad de los botones
*/
function botones() {
    var activateClock, activateChronometer, activateTemporizer;
    activateClock = document.getElementById("activateClock");
    activateChronometer = document.getElementById("activateChronometer");
    activateTemporizer = document.getElementById("activateTemporizer");
    eventActivate(activateClock, activateChronometer, activateTemporizer);
    eventActivate(activateChronometer, activateClock, activateTemporizer);
    eventActivate(activateTemporizer, activateChronometer, activateClock);
}

function activateClock(act_clock, MAXNUM) {

    act_clock.setDate()
    act_clock.lowerThan10(MAXNUM)
    act_clock.time.innerHTML = act_clock.auxHour + ":" + act_clock.auxMin + ":" + act_clock.auxSec;

}

function crearIntervaloReloj(MAXNUM) {

    //const clock = ObjectReloj(Timer)


    const clk = new Clock(0, 0, 0, 0, document.getElementById("textClock"),
        "", "", "", "", null, null)
    clk.intervalClock = setInterval(activateClock, 1000, clk, MAXNUM);
}

function stopIntervalClock(reloj) {
    clearInterval(reloj.intervalClock);
}

function __main__() {

    preload(); //preload debe ser una función puramente gráfica, no funcional generalmente
    reset();
    botones();

    const MAXDIGIT = 10
    const MSECSECONDS = 1000
    const SECONDSMINUTE = 60
    const MINUTESHOUR = 60
    const SECONDSHOUR = 3600
    /**
     * Unidades máximas,
     * [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR]
     * @type {Array[number]}
     */
    const MAXUNIT = [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR]

    //AQUI LAS LLAMADAS A CREACIÓN DE INTERVALOS
    //const Timer = objectTiempo()

    crearIntervaloReloj(MAXDIGIT); //Como es un reloj, no haría falta detener el intervalo, pero se crea el método stopIntervaloReloj, por se acaso
    iniciaCronometro(MAXDIGIT, MAXUNIT)
    iniciaTemporizador(MAXDIGIT, MAXUNIT)

}

__main__();