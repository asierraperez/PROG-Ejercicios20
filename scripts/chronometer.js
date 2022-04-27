/**
 * Objeto cronómetro :: funciones y atributos asociados al cronómetro de la web
 */
class Chronometer extends Time {
    /**
     * @param {number} hour 
     * @param {number} min 
     * @param {number} sec 
     * @param {number} msec 
     * @param {string} auxHour 
     * @param {string} auxMin 
     * @param {string} auxSec 
     * @param {string} auxMsec 
     * @param {boolean} startPressed - observa si se pulsó el boton start
     * @param {TimerHandler} intervalChrono - intervalo del cronometro
     * @param {TimerHandler} intervalTime - Intervalo de tiempo a medir, 100
     * @param {Array} timeList - Lista de tiempos parciales
     */
    constructor(hour, min, sec, msec, auxHour, auxMin, auxSec, auxMsec, startPressed, intervalChrono, intervalTime,
        timeList) {
        super(hour, min, sec, msec, auxHour, auxMin, auxSec, auxMsec)

        this.startPressed = startPressed
        this.intervalChrono = intervalChrono
        this.intervalTime = intervalTime
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