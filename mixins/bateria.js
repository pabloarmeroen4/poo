const Bateria = {
    cargarbateria (carga) {
        if(this.nivelBateria+carga>=100){
            console.log("carga llena")
        }
        else{
            console.log(this.nivelBateria+carga+"%")
        }
    },

    usarBateria () {
        console.log("se esta usando la bateria")
    }
}

export default Bateria