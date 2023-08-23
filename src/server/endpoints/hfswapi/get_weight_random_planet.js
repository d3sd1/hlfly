const {peopleFactory} = require("../../../app/People");
const {randomNumInRange} = require("../../service/util");
const {SW_API_MAX_PEOPLE_ID, SW_API_MAX_PLANET_ID} = require("../../service/constant");

const getWeightRandomPlanetEndpoint = async (req, res) => {
    const people = await peopleFactory(randomNumInRange(1, SW_API_MAX_PEOPLE_ID), "")

    try {
        return res.json(await people.getWeightOnPlanet(randomNumInRange(1, SW_API_MAX_PLANET_ID)))
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
module.exports = {getWeightRandomPlanetEndpoint}
