import Combustible from "../mixins/combustible.js"

class VehiculoCom {
    constructor (nivelCombustible) {
        this.nivelCombustible = nivelCombustible
        Object.assign(this , Combustible)
    }
}

export default VehiculoCom