class Controller {
    constructor(view) {
        this.view = view
        view.reset()
        view.buttons()

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

        this.clock = new clockHandler(MAXDIGIT, view)

    }






}

const app = new Controller(new View(new preload))