const {testEndpoint} = require("./hfswapi/test");
const {getPeopleEndpoint} = require("./hfswapi/get_people");
const {getPlanetEndpoint} = require("./hfswapi/get_planet");
const {getWeightRandomPlanetEndpoint} = require("./hfswapi/get_weight_random_planet");
const {getLogs} = require("./hfswapi/get_logs");

const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        await testEndpoint(req, res, app);
    });

    server.get('/hfswapi/get_people/:id([0-9]{1,10})', getPeopleEndpoint);

    server.get('/hfswapi/get_planet/:id([0-9]{1,10})', getPlanetEndpoint);

    server.get('/hfswapi/get_weight_on_random_planet', getWeightRandomPlanetEndpoint);

    server.get('/hfswapi/get_logs', async (req, res) => {
        await getLogs(req, res, app);
    });

}

module.exports = applySwapiEndpoints;
