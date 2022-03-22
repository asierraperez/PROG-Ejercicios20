function iniciaTemporizador() {

    var inicio_Temp = document.getElementById("start_temporizador")
    var tiempo_temp = document.getElementById("text_temporizador")

    inicio_Temp.addEventListener("click", (evt) => {
        var horas = document.getElementById("horas_temporizador").value
        var min = document.getElementById("minutos_temporizador").value
        var seg = document.getElementById("segundos_temporizador").value
        var aux_hora, aux_min, aux_seg

        seg > 10 ? aux_seg = seg : aux_seg = "0" + seg
        min > 10 ? aux_min = m : aux_min = "0" + min
        horas > 10 ? aux_hora = horas : aux_hora = "0" + horas

        tiempo_temp.innerHTML = + aux_hora + ":" + aux_min + ":" + aux_seg
    })
}