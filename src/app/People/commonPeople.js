const AbstractPeople = require('./abstractPeople')
const {db, swapiFunctions} = require('../index')
const {planetFactory} = require("../Planet");

class CommonPeople extends AbstractPeople {

    constructor(id) {
        super(id)
        this.endpoint = 'https://swapi.dev/api/people'
    }

    async init() {
        const db_people = await db.swPeople.findByPk(this.getId())
        if (db_people) {
            this.name = db_people.name
            this.mass = db_people.mass
            this.height = db_people.height
            this.homeworldName = db_people.homeworld_name
            this.homeworlId = db_people.homeworld_id
        } else {
            const url = `${this.endpoint}/${this.getId()}/`
            const body = await swapiFunctions.genericRequest(url, 'GET', null)

            this.name = body.name
            this.mass = parseInt(body.mass)
            this.height = parseInt(body.height)

            const planetId = this.getPlanetIdFromUrl(body.homeworld)

            const planet = await planetFactory(planetId)
            if (planet.name) {
                this.homeworldName = planet.name
                this.homeworlId = planetId
            }

            await db.swPeople.create({
                id: this.getId(),
                name: this.getName(),
                mass: this.getMass(),
                height: this.getHeight(),
                homeworld_name: this.getHomeworldName(),
                homeworld_id: this.getHomeworlId()
            })
        }
    }

}

module.exports = CommonPeople
