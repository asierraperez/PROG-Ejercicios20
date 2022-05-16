/**
 * Gestión del cronómetro
 */
class chronoHandler {

    constructor() {

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




    }

    /**
      * parar el cronómetro
      */
    stopChrono() {
        clearInterval(this.chrono.intervalChrono)
    }

    /**
     * Acumular los tiempos parciales
     */
    flagTime() {

        this.chrono.timeList[this.i] = this.chrono.auxHour + ":" + this.chrono.auxMin + ":" + this.chrono.auxSec + ":" + this.chrono.auxMsec
        //this.viewChrono.partialTimes.innerHTML = this.viewChrono.partialTimes.innerHTML + "<li/>" + this.viewChrono.textCronometer.innerHTML
        this.i++
    }

}