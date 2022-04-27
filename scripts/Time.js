/**
 * Objeto padre :: funciones y atributos comunes a todos los objetos del programa
 */
class Time {
    /**
    * @param {number} hour 
     * @param {number} min 
     * @param {number} sec 
     * @param {number} msec 
     * @param {string} auxHour 
     * @param {string} auxMin 
     * @param {string} auxSec 
     * @param {string} auxMsec
     */
    constructor(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec) {

        this.hour = hour
        this.min = min
        this.sec = sec
        this.msec = msec
        this.time = time
        this.auxHour = auxHour
        this.auxMin = auxMin
        this.auxSec = auxSec
        this.auxMsec = auxMsec
    }
    /**
     * Añade un "0" delante si el numero a mostrar es menor que 10
     * @param {number} MAXNUM - digito máximo para visualizacion
     */
    lowerThan10(MAXNUM) {
        this.auxMsec = this.msec
        this.sec >= MAXNUM ? this.auxSec = this.sec : this.auxSec = "0" + this.sec
        this.min >= MAXNUM ? this.auxMin = this.min : this.auxMin = "0" + this.min
        this.hour >= MAXNUM ? this.auxHour = this.hour : this.auxHour = "0" + this.hour
    }
}
