class Controller {
    constructor(view) {
        this.view = view
        view.reset()
        view.buttons()

        //this.clock=this.createClock()
    }




}

const app = new Controller(new View(new preload))