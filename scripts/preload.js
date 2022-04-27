
/**
 * Esta función sirve para hacer la precarga de la página, ocultando los apartados que no son necesarios o cargando los que si
 */
class preload {

    hidNonUsed(clock, chronometer, temporizer) {
        var isClock, isChronometer, isTemporizer;
        isClock = localStorage.getItem("isClock");
        isClock = parseInt(isClock)
        isChronometer = localStorage.getItem("isChronometer");
        isChronometer = parseInt(isChronometer)
        isTemporizer = localStorage.getItem("isTemporizer");
        isTemporizer = parseInt(isTemporizer)

        if (isClock == null && isChronometer == null && isTemporizer == null) {
            isClock = 1;
            isChronometer = 0;
            isTemporizer = 0;
            localStorage.setItem("isClock", isClock);
            localStorage.setItem("isChronometer", isChronometer);
            localStorage.setItem("isTemporizer", isTemporizer);
        }

        if (isClock == 1) {
            clock.style.display = "block";
        } else {
            clock.style.display = "none";
        }
        if (isChronometer == 1) {
            chronometer.style.display = "block";
        } else {
            chronometer.style.display = "none";
        }
        if (isTemporizer == 1) {
            temporizer.style.display = "block";
        } else {
            temporizer.style.display = "none";
        }

    }

    selectorsTemporizer(hours, mins, secs) {
        /**
         * selector de horas a temporizar
         * @type {DOMImplementation}
         */
        for (var i = 0; i <= 24; i++) {
            var option = new Option(i, i, false, false);
            hours.appendChild(option);
        }
        /**
         * selector de minutos a temporizar
         * @type {DOMImplementation}
         */
        for (var i = 0; i <= 60; i++) {
            var option = new Option(i, i, false, false);
            mins.appendChild(option);
        }
        /**
         * selector de segundos a temporizar
         * @type {DOMImplementation}
         */
        for (var i = 0; i <= 60; i++) {
            var option = new Option(i, i, false, false);
            secs.appendChild(option);
        }
    }
}
