const {testEndpoint} = require("./hfswapi/test");
const {getPeopleEndpoint} = require("./hfswapi/get_people");
const {getPlanetEndpoint} = require("./hfswapi/get_planet");
const {getWeightRandomPlanetEndpoint} = require("./hfswapi/get_weight_random_planet");

const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        await testEndpoint(req, res, app);
    });

    server.get('/hfswapi/getPeople/:id', getPeopleEndpoint);

    server.get('/hfswapi/getPlanet/:id', getPlanetEndpoint);

    server.get('/hfswapi/getWeightOnPlanetRandom', getWeightRandomPlanetEndpoint);

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.db.logging.findAll();
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;
