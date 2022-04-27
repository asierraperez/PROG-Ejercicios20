class Controller {
    constructor(view) {
        this.view = view
        view.reset()
        view.buttons()

        //this.clock=this.createClock()
    }

    createClock() {
        return new Clock(0, 0, 0, 0, document.getElementById("textClock"),
            "", "", "", "", null, null)
        clk.intervalClock = setInterval(activateClock, 1000, clk, MAXNUM)
    }

}

const app = new Controller(new View(new preload))