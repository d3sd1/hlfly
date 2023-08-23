const {peopleFactory} = require("../../../app/People");
const getPeopleEndpoint = async (req, res) => {
    const {id} = req.params

    const people = await peopleFactory(id, req.query.format ? req.query.format.toLowerCase() : '')
    if (!people.name) {
        return res.status(400).json({message: "Given person does not exists by id: " + id})
    }

    return res.status(200).json({
        name: people.getName(), mass: people.getMass(),
        height: people.getHeight(),
        homeworldName: people.getHomeworldName(),
        homeworldId: people.getHomeworlId(),
    })
}
module.exports = {getPeopleEndpoint}
