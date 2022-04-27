/**
 * Objeto padre :: funciones y atributos comunes a todos los objetos del programa
 */
class Time {
    constructor(hour, min, sec, msec, time, auxHour, auxMin, auxSec, auxMsec) {
        /**
         * horas
         * @type {number}
         */
        this.hour = hour
        /**
         * minutos
         * @type {number}
         */
        this.min = min
        /**
         * segundos
         * @type {number}
         */
        this.sec = sec
        /**
         * milisegundos
         * @type {number}
         */
        this.msec = msec
        /**
         * Hora completa
         * @type {string}
         */
        this.time = time
        /**
         * auxiliar de "hour"
         * @type {string}
         */
        this.auxHour = auxHour
        /**
         * auxiliar para mostrar minutos
         * @type {string} 
         */
        this.auxMin = auxMin
        /**
         * auxiliar para mostrar segundos
         * @type {string}
         */
        this.auxSec = auxSec
        /**
         * auxiliar para mostrar milisegundos
         * @type {string}
         */
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
