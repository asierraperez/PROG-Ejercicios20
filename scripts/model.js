class Model {
    constructor() {

        //this.clock=this.createClock()


        /**
        * función Reloj
        * @type {Object}
        */
        this.clock = new clockHandler()

        /**
        * función cronómetro
        * @type {Object}
        */
        //this.chronometer = new chronoHandler(MAXDIGIT, MAXUNIT)

        /**
        * función temporizador
        * @type {Object}
        */
        //this.temporizer = new tempHandler(MAXDIGIT, MAXUNIT)
    }
}