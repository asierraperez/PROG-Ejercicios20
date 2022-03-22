function iniciaTemporizador() {

    var inicio_Temp = document.getElementById("start_temporizador")

    inicio_Temp.addEventListener("click", (evt) => {
        var horas = document.getElementById("horas_temporizador").value
        var min = document.getElementById("minutos_temporizador").value
        var seg = document.getElementById("segundos_temporizador").value
        console.log("horas: " + horas
            + "\nminutos: " + min
            + "\nsegundos: " + seg)
    })
}