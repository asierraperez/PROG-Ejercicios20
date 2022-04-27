/**
 * objeto temporizer :: funciones y atributos asociados al temporizador de la web
 */
class Temporizer extends Time {
    constructor(hour, min, sec, msec, aux_hour, aux_min, aux_sec, aux_msec, stopPressed,
        intervalTime, intervalTemporizer, timeoutTime, timeoutTemporizer) {
        super(hour, min, sec, msec, aux_hour, aux_min, aux_sec, aux_msec)
        /**
         * control si está pulsado el botón stop
         * @type {Boolean}
         */
        this.stopPressed = stopPressed

        this.intervalTime = intervalTime
        /**
         * intervalo de tiempo a contar
         * @type {TimerHandler}
         */
        this.intervalTemporizer = intervalTemporizer
        /**
         * tiempo a contar en milisegundos 
         * @type {number}
         */
        this.timeoutTime = timeoutTime
        /**
         * timeout del temporizador
         * @type {TimerHandler}
         */
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
