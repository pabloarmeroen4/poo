import Bateria from "../mixins/bateria.js"

class VehiculoEl {
    constructor (nivelBateria) {
        this.nivelBateria = nivelBateria
        Object.assign(this , Bateria)
    }
}

export default VehiculoEl