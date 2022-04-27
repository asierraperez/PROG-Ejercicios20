/**
 * Reset se crea aquí por se una función específica, pues hará que los valores de los relojes vuelvan a por defecto
 */
function reset() {
    var fecha = new Date();
    document.getElementById("textClock").innerHTML = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("textChronometer").innerHTML = "00:00:00:00";
    document.getElementById("textTemporizer").innerHTML = "00:00:00";
}

/**
 * Permite crear el evento que muestre el primer argumento y oculte los otros dos
 * @param {DOMImplementation} show - Elemento a mostrar
 * @param {DOMImplementation} hide1 - Primer elemento a ocultar
 * @param {DOMImplementation} hide2 - Segundo elemento a ocultar
 */
function eventActivate(show, hide1, hide2) {
    /**
     * elementos a mostrar u ocultar
     */
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

/**
 * Guarda la fúltima función usada en localstorage
 * @param {DOMImplementation} functionName - Funcion del reloj a guardar en Localstorage
 */
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


/**
 * Función para establecer la funcionalidad de los botones
 */
function buttons() {
    /**
     * botones de cada función del documento
     * @type {DOMImplementation}
     */
    var activateClock, activateChronometer, activateTemporizer;
    activateClock = document.getElementById("activateClock");
    activateChronometer = document.getElementById("activateChronometer");
    activateTemporizer = document.getElementById("activateTemporizer");
    eventActivate(activateClock, activateChronometer, activateTemporizer);
    eventActivate(activateChronometer, activateClock, activateTemporizer);
    eventActivate(activateTemporizer, activateChronometer, activateClock);
}

/**
 * Activación del intervalo del Reloj
 * @param {object} act_clock - funciones y atributos del reloj
 * @param {number} MAXNUM - digito máximo para visualización, 10
 */
function activateClock(act_clock, MAXNUM) {

    act_clock.setDate()
    act_clock.lowerThan10(MAXNUM)
    act_clock.time.innerHTML = act_clock.auxHour + ":" + act_clock.auxMin + ":" + act_clock.auxSec;

}

/**
 * Gestión del reloj
 * @param {number} MAXNUM - digito máximo para visualización, 10
 */
function initiateClock(MAXNUM) {
    /**
     * Funciones y atributos del reloj
     * @type {object}
     */
    const clk = new Clock(0, 0, 0, 0, document.getElementById("textClock"),
        "", "", "", "", null, null)
    clk.intervalClock = setInterval(activateClock, 1000, clk, MAXNUM);
}

/**
 * detener intervalo del reloj 
 * @param {object} stop_clock - Funciones y atributos del reloj
 */
function stopIntervalClock(stop_clock) {
    clearInterval(stop_clock.intervalClock);
}

/**
 * Reloj multifunción
 */
function __main__() {

    preload(); //preload debe ser una función puramente gráfica, no funcional generalmente
    reset();
    buttons();
    /**
     * digito máximo para visualizacion
     * @type {number}
     */
    const MAXDIGIT = 10
    /**
     * milisegundos maximos por segundo
     * @type {number}
     */
    const MSECSECONDS = 1000
    /**
     * segundos maximos por minuto
     * @type {number}
     */
    const SECONDSMINUTE = 60
    /**
     * minutos maximos por hora
     * @type {number}
     */
    const MINUTESHOUR = 60
    /**
     * segundos maximos por hora
     * @type {number}
     */
    const SECONDSHOUR = 3600
    /**
     * Unidades máximas,
     * [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR]
     * @type {Array}
     */
    const MAXUNIT = [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR]

    //AQUI LAS LLAMADAS A CREACIÓN DE INTERVALOS
    //const Timer = objectTiempo()

    initiateClock(MAXDIGIT); //Como es un reloj, no haría falta detener el intervalo, pero se crea el método stopIntervaloReloj, por se acaso
    initiateCronometro(MAXDIGIT, MAXUNIT)
    initiateTemporizador(MAXDIGIT, MAXUNIT)

}

__main__();