/**
 * objeto clock :: funciones y atributos asociados al reloj de la web
 */
class Clock extends Time {
    constructor(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec, date, intervalClock) {
        super(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec)
        /**
         * fecha actual
         * @type {Date}
         */
        this.date = date
        /**
         * intervalo del temporizador
         * @type {TimerHandler}
         */
        this.intervalClock = intervalClock
    }
    /**
     * Fecha a día de hoy
     */
    setDate() {
        this.date = new Date()
        this.hour = this.date.getHours()
        this.min = this.date.getMinutes()
        this.sec = this.date.getSeconds()
    }
}

