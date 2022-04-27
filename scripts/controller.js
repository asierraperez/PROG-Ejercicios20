/**
 * RELOJ MULTIFUNCIÓN
 */
class Controller {
    constructor(view) {
        this.view = view
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
        //this.clock=this.createClock()


        /**
        * función Reloj
        * @type {Object}
        */
        this.clock = new clockHandler(MAXDIGIT, view)

        /**
        * función cronómetro
        * @type {Object}
        */
        this.chronometer = new chronoHandler(MAXDIGIT, MAXUNIT, this.view)

        /**
        * función temporizador
        * @type {Object}
        */
        this.temporizer = new tempHandler(MAXDIGIT, MAXUNIT, this.view)

    }






}

const app = new Controller(new View(new preload))