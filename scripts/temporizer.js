/**
 * objeto temporizer :: funciones y atributos asociados al temporizador de la web
 */
class Temporizer extends Time {
    /** 
     *@param {number} hour 
     * @param {number} min 
     * @param {number} sec 
     * @param {number} msec 
     * @param {string} auxHour 
     * @param {string} auxMin 
     * @param {string} auxSec 
     * @param {string} auxMsec
     * @param {Boolean} stopPressed - observa si se pulsó el boton stop
     * @param {TimerHandler} intervalTime - Intervalo de tiempo a medir, 1000
     * @param {TimerHandler} intervalTemporizer - intervalo del cronometro
     * @param {Number} timeoutTime - Tiempo en milisegundos
     * @param {TimerHandler} timeoutTemporizer - Cuenta atras
     */
    constructor(hour, min, sec, msec, aux_hour, aux_min, aux_sec, aux_msec, stopPressed,
        intervalTime, intervalTemporizer, timeoutTime, timeoutTemporizer) {
        super(hour, min, sec, msec, aux_hour, aux_min, aux_sec, aux_msec)

        this.stopPressed = stopPressed
        this.intervalTime = intervalTime
        this.intervalTemporizer = intervalTemporizer
        this.timeoutTime = timeoutTime
        this.timeoutTemporizer = timeoutTemporizer

    }
    /**
     * calculo del tiempo en milisegundos
     * @param {number} MAXSECONDSHOUR - 3600
     * @param {number} MAXSECONDSMINUTE - 60
     * @param {number} MAXMSECSECONDS  - 1000
     */
    calculateTimeoutTime(MAXSECONDSHOUR, MAXSECONDSMINUTE, MAXMSECSECONDS) {
        this.timeoutTime = (this.hour * MAXSECONDSHOUR * MAXMSECSECONDS) + (this.min * MAXSECONDSMINUTE * MAXMSECSECONDS) + (this.sec * MAXMSECSECONDS)
        //return this.timeoutTime
    }
    /**
     * Cuenta atrás
     * @param {number} MAXSECONDS - 60
     * @param {number} MAXMINUTES - 60
     */
    subtractSeconds(MAXSECONDS, MAXMINUTES) {
        if (this.sec != 0) {
            this.sec--
        } else {
            if (this.min == 0) {
                this.hour--
                this.min = MAXMINUTES - 1

            } else {
                this.min--

            }
            this.sec = MAXSECONDS - 1
        }
    }

}
