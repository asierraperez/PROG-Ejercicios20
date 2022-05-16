/**
 * Objetos del HTML
 */
class View {
    constructor(preload) {
        this.preload = preload
        //funciones
        this.clock = document.getElementById("Clock");
        this.chronometer = document.getElementById("Chronometer");
        this.temporizer = document.getElementById("Temporizer");
        //textos
        this.textClock = document.getElementById("textClock")
        this.textCronometer = document.getElementById("textChronometer")
        this.textTemporizer = document.getElementById("textTemporizer")
        //botones de funcion
        this.activateClock = document.getElementById("activateClock");
        this.activateChronometer = document.getElementById("activateChronometer");
        this.activateTemporizer = document.getElementById("activateTemporizer");
        //selectores
        this.hoursTemporizer = document.getElementById("hoursTemporizer");
        this.minsTemporizer = document.getElementById("minsTemporizer");
        this.secsTemporizer = document.getElementById("secsTemporizer");
        //guardado de funciones
        this.isClock = 0
        this.isChronometer = 0
        this.isTemporizer = 0
        //botones cronómetro
        this.startChrono = document.getElementById("startChronometer")
        this.flagChrono = document.getElementById("flagChronometer")
        //lista tiempos parciales
        this.partialTimes = document.getElementById("partialTimes")
        //botones temporizador
        this.startTemporizer = document.getElementById("startTemporizer")
        this.stopTemporizer = document.getElementById("stopTemporizer")
        this.restartTemporizer = document.getElementById("restartTemporizer")

        preload.hidNonUsed(this.clock, this.chronometer, this.temporizer)
        preload.selectorsTemporizer(this.hoursTemporizer, this.minsTemporizer, this.secsTemporizer)

    }

    /**
     * Resetear valores
     */
    reset() {
        this.textClock.innerHTML = "00:00:00";
        this.textCronometer.innerHTML = "00:00:00:0";
        this.textTemporizer.innerHTML = "00:00:00";
    }

    /**
     * Administra los botones, con la función "eventActivate" se genera un evento para cada uno
     */
    buttons() {
        this.eventActivate(this.activateClock, this.activateChronometer, this.activateTemporizer);
        this.eventActivate(this.activateChronometer, this.activateClock, this.activateTemporizer);
        this.eventActivate(this.activateTemporizer, this.activateChronometer, this.activateClock);
    }

    /**
     * Eventos para  mostrar los función que queramos usar y ocultar las demás
     * @param {DOMImplementation} show - función a mostrar
     * @param {DOMImplementation} hide1 - Función oculta
     * @param {DOMImplementation} hide2 - Función oculta
     */
    eventActivate(show, hide1, hide2) {
        var divShow, divHide1, divHide2;
        divShow = document.getElementById(show.id.split("activate")[1]);
        divHide1 = document.getElementById(hide1.id.split("activate")[1]);
        divHide2 = document.getElementById(hide2.id.split("activate")[1]);
        //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
        //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
        show.addEventListener("click", () => {
            this.reset();
            divShow.style.display = "block";
            divHide1.style.display = "none";
            divHide2.style.display = "none";
            this.saveDivShown(divShow.id)
        });
    }

    /**
     * Guarda en localstorage la ultima función mostrada
     * @param {string} functionName - nombre de la función a mostrar
     */
    saveDivShown(functionName) {
        if (functionName == "Clock") {
            this.isClock = 1;
            this.isChronometer = 0;
            this.isTemporizer = 0;

        } else if (functionName == "Chronometer") {
            this.isClock = 0;
            this.isChronometer = 1;
            this.isTemporizer = 0;

        } else {
            this.isClock = 0;
            this.isChronometer = 0;
            this.isTemporizer = 1;

        }
        localStorage.setItem("isClock", this.isClock);
        localStorage.setItem("isChronometer", this.isChronometer);
        localStorage.setItem("isTemporizer", this.isTemporizer);
    }

    //Reloj

    actualizeClock({ auxHour, auxMin, auxSec }) {
        this.textClock.innerHTML = auxHour + ":" + auxMin + ":" + auxSec;
    }

    //Cronometro

    actualizeChrono({ auxHour, auxMin, auxSec, auxMsec }) {
        this.textCronometer.innerHTML = auxHour + ":" + auxMin + ":" + auxSec + ":" + auxMsec;
    }

    actualizeFlagChrono({ auxHour, auxMin, auxSec, auxMsec }) {
        this.partialTimes.innerHTML = this.partialTimes.innerHTML + "<li/>" + auxHour + ":" + auxMin + ":" + auxSec + ":" + auxMsec

    }

    bindStartChrono(handler) {
        this.startChrono.addEventListener("click", evt => {
            handler()
        })
    }

    bindFlagChrono(handler) {
        this.flagChrono.addEventListener("click", evt => {
            handler()
        })
    }
    /**
     * Cambiar el botón Start por Stop
     */
    startToStop() {
        this.startChrono.style.backgroundColor = "firebrick"
        this.flagChrono.disabled = false
        this.startChrono.innerHTML = "Pausar"
    }

    /**
     * Cambiar el botón Stop por Start
     */
    stopToStart() {
        this.startChrono.style.backgroundColor = "chartreuse"
        this.flagChrono.disabled = true
        this.startChrono.innerHTML = "Start"
    }




}