/*
  Esta función sirve para hacer la precarga de la página, ocultando los apartados que no son necesarios o cargando los que si
*/
function preload() {
    hidNonUsed();
    selectorsTemporizer();
}

function hidNonUsed() {
    //Variables para almacenar los elementos HTML
    var clock, chronometer, temporizer;
    clock = document.getElementById("Clock");
    chronometer = document.getElementById("Chronometer");
    temporizer = document.getElementById("Temporizer");

    //Variables para comprobar que elementos deben ocultarse o si es la primera vez que se inicia
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

function selectorsTemporizer() {
    var hoursTemporizer = document.getElementById("hoursTemporizer");
    for (var i = 0; i <= 24; i++) {
        var option = new Option(i, i, false, false);
        hoursTemporizer.appendChild(option);
    }
    var minsTemporizer = document.getElementById("minsTemporizer");
    for (var i = 0; i <= 60; i++) {
        var option = new Option(i, i, false, false);
        minsTemporizer.appendChild(option);
    }
    var secsTemporizer = document.getElementById("secsTemporizer");
    for (var i = 0; i <= 60; i++) {
        var option = new Option(i, i, false, false);
        secsTemporizer.appendChild(option);
    }
}