const {planetFactory} = require("../Planet");
const {swapiFunctions} = require("../index");

class AbstractPeople {

    constructor(id) {
        if (this.constructor === AbstractPeople) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.id = id
        this.name = null
        this.mass = null
        this.height = null
        this.homeworldName = null
        this.homeworlId = null
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getMass() {
        return this.mass;
    }

    getHeight() {
        return this.height;
    }

    getHomeworldName() {
        return this.homeworldName;
    }

    getHomeworlId() {
        return this.homeworlId;
    }

    async getWeightOnPlanet(planetId) {
        const planet = await planetFactory(planetId)

        if (!planet.name) {
            throw new Error(`Given planet was not found: ${planetId}`)
        }

        if (planetId === this.getHomeworlId()) {
            throw new Error(`Given person and planet are equal, this is the extra point, mom!`)
        }
        if (isNaN(planet.getGravity())) {
            throw new Error(`Gravity is null for given planet: ${planetId}`)
        }
        if (isNaN(this.mass)) {
            throw new Error(`Mass is null for given user: ${this.getId()}`)
        }

        return {
            peopleId: this.getId(),
            homeworldId: this.getHomeworlId(),
            planetId,
            result: swapiFunctions.getWeightOnPlanet(this.mass, planet.getGravity())
        }
    }

    getPlanetIdFromUrl(fullLink) {
        return fullLink.split('/').filter(n => n !== "").pop()
    }
}

module.exports = AbstractPeople
