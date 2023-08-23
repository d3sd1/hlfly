const {planetFactory} = require("../../../app/Planet");

const getPlanetEndpoint = async (req, res) => {
    const { id } = req.params
    const planet = await planetFactory(id)

    if( !planet.name ){
        return res.status(400).json({message: "Given planet was not found by id: " + id})
    }

    return res.json( { name: planet.getName(), gravity: planet.getGravity() } )
}
module.exports = {getPlanetEndpoint}
