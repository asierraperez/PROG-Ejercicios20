/**
 * RELOJ MULTIFUNCIÓN
 */
class Controller {
    constructor(model, view) {
        this.view = view
        this.model = model
        this.view.reset()
        this.view.buttons()
        /**
        * digito máximo para visualizacion
        * @type {number}
        */
        const MAXDIGIT = 10
        /**
         * milisegundos maximos por segundo
         * @type {number}
         */
        const MSECSECONDS = 1000
        /**
         * segundos maximos por minuto
         * @type {number}
         */
        const SECONDSMINUTE = 60
        /**
         * minutos maximos por hora
         * @type {number}
         */
        const MINUTESHOUR = 60
        /**
         * segundos maximos por hora
         * @type {number}
         */
        /**
         * decisegundos maximos por segundo
         */
        const DECISECSECONDS = 10
        const SECONDSHOUR = 3600
        /**
         * Unidades máximas,
         * [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]
         * @type {Array}
         */
        const MAXUNIT = [MSECSECONDS, SECONDSMINUTE, MINUTESHOUR, SECONDSHOUR, DECISECSECONDS]


        this.model.clock.clk.intervalClock = setInterval(this.activateClock, 1000, this.model.clock.clk, MAXDIGIT, this.view);







    }
    /**
     * Gestión del intervalo del reloj
     * @param {Object} actClock - Funciones y atributos intrínsecos al reloj
     * @param {Number} MAXNUM - digito máximo para visualizacion
     * @param {Object} actView - Objetos del HTML
     */
    activateClock(actClock, MAXNUM, viewClock) {

        actClock.setDate()
        actClock.lowerThan10(MAXNUM)
        viewClock.actualizeClock(actClock)
        //actView.textClock.innerHTML = actClock.auxHour + ":" + actClock.auxMin + ":" + actClock.auxSec;
    }






}

const app = new Controller(new Model, new View(new preload))