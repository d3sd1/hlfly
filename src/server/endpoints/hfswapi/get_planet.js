const {planetFactory} = require("../../../app/Planet");

const getPeopleEndpoint = async (req, res, app) => {
    const { id } = req.params
    const planet = await planetFactory(id)

    if( !planet.name ){
        return res.status(400).json( {message:"Planeta No Existente..."} )
    }

    const response =  { name: planet.getName(), gravity: planet.getGravity() }
    return res.json( response )
}
module.exports = {getPeopleEndpoint}
