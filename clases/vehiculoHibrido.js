import VehiculoCom from "./vehiculoCombustion.js"
import VehiculoEl from "./vehiculoElectrico.js"

class VehiculoHibrido {
    constructor () {
        this.vehiculoelectrico = new VehiculoEl (0)
        this.vehiculocombustion = new VehiculoCom (0)
    }

    Bateria (carga) {
        this.vehiculoelectrico.cargarbateria(carga)
        this.vehiculoelectrico.usarBateria()
    }

    Combustible (combustible) {
        this.vehiculocombustion.llenarTanque(combustible)
        this.vehiculocombustion.usarCombustible()
    }
}

export default VehiculoHibrido