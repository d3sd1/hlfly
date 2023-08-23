const {peopleFactory} = require("../../../app/People");

const getWeightRandomPlanetEndpoint = async (req, res) => {
    const PeopelId = randomNumInRange( 1,82 ) /* Numero De Personas Mostrada Api */
    const PlanetId = randomNumInRange( 1,60 ) /* Numero De Planeta Mostrada Api */


    const people = await peopleFactory( PeopelId,"")
    if( !people.name ) return res.status(400).json( {message:"Personaje No Existente..."} )

    try {

        const result = await people.getWeightOnPlanet( PlanetId )
        return res.json( result.getWeightOnPlanet )

    } catch (error) {
        return res.status(400).json( { message:error.message } )
    }
}
module.exports = {getWeightRandomPlanetEndpoint}
