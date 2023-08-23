const AbstractPeople = require('./abstractPeople')
const {db, swapiFunctions} = require('../index')
const {planetFactory} = require("../Planet");

class WookieePeople extends AbstractPeople {
    constructor(id) {
        super(id)
        this.endpoint = 'https://swapi.dev/api/people'
    }


    async init() {

        const db_people = await db.swPeople.findByPk(this.id)
        if (db_people) {
            this.name = db_people.name
            this.mass = db_people.mass
            this.height = db_people.height
            this.homeworldName = db_people.homeworld_name
            this.homeworlId = db_people.homeworld_id
        } else {

            const url = `${this.endpoint}/${this.id}/?format=wookiee`
            const body = await swapiFunctions.genericRequest(url, 'GET', null)
            if (!body.hasOwnProperty('whrascwo')) return {success: false}


            this.name = body['whrascwo']
            this.mass = Number(body['scracc'])
            this.height = Number(body['acwoahrracao'])

            const PlanetId = this.getPlanetIdFromUrl(body['acooscwoohoorcanwa'])

            const planet = planetFactory(PlanetId)
            if (planet.name) {
                this.homeworldName = planet.name
                this.homeworlId = PlanetId
            }

            await db.swPeople.create({
                id: this.id,
                name: this.name,
                mass: this.mass,
                height: this.height,
                homeworld_name: this.homeworldName,
                homeworld_id: this.homeworlId
            })
        }
    }
}

module.exports = WookieePeople
