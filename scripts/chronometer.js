/**
 * Objeto cronómetro :: funciones y atributos asociados al cronómetro de la web
 */
class Chronometer extends Time {
    constructor(hour, min, sec, msec, auxHour, auxMin, auxSec, auxMsec, startPressed, intervalChrono, intervalTime,
        timeList) {
        super(hour, min, sec, msec, auxHour, auxMin, auxSec, auxMsec)
        /**
         * control se está pulsado start
         * @type {boolean}
         */
        this.startPressed = startPressed
        /**
         * intervalo de tiempo a cronometrar
         * @type {TimerHandler}
         */
        this.intervalChrono = intervalChrono
        this.intervalTime = intervalTime
        /**
         * lista de tiempos 
         * @type {DOMImplementation}
         */
        this.timeList = timeList
    }
    /**
     * cuenta hacia delante
     * @param {number} MAXMSEC - 10
     * @param {number} MAXSECONDS - 60
     * @param {number} MAXMINUTE - 60
     */
    addSeconds(MAXMSEC, MAXSECONDS, MAXMINUTE) {
        this.msec++
        if (this.msec > (MAXMSEC - 1)) {
            this.sec++
            this.msec = 0
            if (this.sec > (MAXSECONDS - 1)) {
                this.min++
                this.sec = 0
                if (this.min > (MAXMINUTE - 1)) {
                    this.hour++
                    this.min = 0
                }
            }

        }
    }

}