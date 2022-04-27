class clockHandler {
    constructor(MAXNUM, view) {
        this.MAXNUM = MAXNUM
        this.view = view
        this.clk = new Clock(0, 0, 0, 0, view.textClock,
            "", "", "", "", null, null)
        this.clk.intervalClock = setInterval(this.activateClock, 1000, this.clk, MAXNUM);
    }
    activateClock(actClock, MAXNUM) {
        actClock.setDate()
        actClock.lowerThan10(MAXNUM)
        actClock.time.innerHTML = actClock.auxHour + ":" + actClock.auxMin + ":" + actClock.auxSec;
    }
    stopIntervalClock(stop_clock) {
        clearInterval(stop_clock.intervalClock);
    }
}