const {db, swapiFunctions} = require('../index')

class Planet {

    constructor(id) {
        this.id = id
        this.name = null
        this.gravity = null
        this.endpoint = 'https://swapi.dev/api/planets/{id}'
    }

    async init() {
        const db_planet = await db.swPlanet.findByPk(this.id, {attributes: ['name', 'gravity']})
        if (db_planet) {
            this.name = db_planet.name
            this.gravity = db_planet.gravity
        } else {
            await this.retrieveFromApi();
        }
    }

    async retrieveFromApi() {
        const url = this.endpoint.replace("{id}", this.id)
        const body = await swapiFunctions.genericRequest(url, 'GET', null)

        this.name = body.name
        this.gravity = parseFloat(body.gravity.replace(/[^\d.-]/g, ''))

        await db.swPlanet.create({id: this.id, name: this.name, gravity: this.gravity})
    }

    getName() {
        return this.name
    }

    getGravity() {
        return this.gravity
    }


}

module.exports = Planet
