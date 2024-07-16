const Combustible = {
    llenarTanque (combustible) {
        if(this.nivelCombustible+combustible>=100){
            console.log("combustible lleno")
        }
        else{
            console.log(this.nivelCombustible+combustible+"%")
        }
    },
    usarCombustible () {
        console.log("se esta usando el combustible")
    }
}

export default Combustible