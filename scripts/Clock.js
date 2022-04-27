/**
 * objeto clock :: funciones y atributos asociados al reloj de la web
 */
class Clock extends Time {
    /**
     * 
     * @param {number} hour 
     * @param {number} min 
     * @param {number} sec 
     * @param {number} msec 
     * @param {string} auxHour 
     * @param {string} auxMin 
     * @param {string} auxSec 
     * @param {string} auxMsec 
     * @param {Date} date - fecha a dia de hoy
     * @param {TimerHandler} intervalClock - Intervalo del reloj
     */
    constructor(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec, date, intervalClock) {
        super(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec)
        this.date = date
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

