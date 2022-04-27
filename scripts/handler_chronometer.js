/**
 * Gestión del cronómetro
 */
class chronoHandler {
    /** 
     * @param {Number} MAXDIGITCHRONO - digito máximo para visualizacion
     * @param {Array} MAXUNITCHRONO - Unidades máximas, - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]
     * @param {Object} viewChrono - Objetos del HTML
     */
    constructor(MAXDIGITCHRONO, MAXUNITCHRONO, viewChrono) {

        this.MAXDIGITCHRONO = MAXDIGITCHRONO
        this.MAXUNITCHRONO = MAXUNITCHRONO
        this.viewChrono = viewChrono
        /**
         * Indice para el array de tiempos parciales
         * @type {number}
         */
        this.i = 0

        /**
         * Funciones y atributos intrínsecos al cronómetro
         * @type {Object} 
         */
        this.chrono = new Chronometer(0, 0, 0, 0,
            "", "", "", "",
            false, null, 100,
            null)
        this.chrono.timeList = new Array

        this.eventStart()


    }

    /**
     * Gestión de los eventos
     */
    eventStart() {
        this.viewChrono.startChrono.addEventListener("click", (evt) => {

            if (!this.chrono.startPressed) {
                this.startChrno()
            } else {
                this.stopChrono()
            }
        })
        this.viewChrono.flagChrono.addEventListener("click", (evt) => {
            this.flagTime()
        })
    }

    /**
     * Empezar la cuenta
     */
    startChrno() {
        this.startToStop()
        this.chrono.intervalChrono = window.setInterval(this.activateCrono, this.chrono.intervalTime, this.chrono, this.MAXUNITCHRONO, this.MAXDIGITCHRONO, this.viewChrono)
    }
    /**
     * Cambiar el botón Start por Stop
     */
    startToStop() {
        this.viewChrono.startChrono.style.backgroundColor = "firebrick"
        this.viewChrono.flagChrono.disabled = false
        this.chrono.startPressed = true
        this.viewChrono.startChrono.innerHTML = "Pausar"
    }

    /**
     * Gestión del intervalo del cronómetro
     * @param {Object} actChrono - Funciones y atributos intrínsecos al cronómetro 
     * @param {array} UNITCHRONO - Unidades máximas, - [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]
     * @param {number} DIGITCHRONO - digito máximo para visualizacion
     * @param {Object} actView - Objetos del HTML
     */
    activateCrono(actChrono, UNITCHRONO, DIGITCHRONO, actView) {

        actChrono.addSeconds(UNITCHRONO[4], UNITCHRONO[2], UNITCHRONO[3])
        actChrono.lowerThan10(DIGITCHRONO)

        actView.textCronometer.innerHTML = actChrono.auxHour + ":" + actChrono.auxMin + ":" + actChrono.auxSec + ":" + actChrono.auxMsec
    }

    /**
     * parar el cronómetro
     */
    stopChrono() {
        this.stopToStart()
        clearInterval(this.chrono.intervalChrono)
    }

    /**
     * Cambiar el botón Stop por Start
     */
    stopToStart() {
        this.viewChrono.startChrono.style.backgroundColor = "chartreuse"
        this.viewChrono.flagChrono.disabled = true
        this.chrono.startPressed = false
        this.viewChrono.startChrono.innerHTML = "Start"
    }

    /**
     * Acumular los tiempos parciales
     */
    flagTime() {

        this.chrono.timeList[this.i] = this.viewChrono.textCronometer.innerHTML
        this.viewChrono.partialTimes.innerHTML = this.viewChrono.partialTimes.innerHTML + "<li/>" + this.viewChrono.textCronometer.innerHTML
        this.i++
    }

}