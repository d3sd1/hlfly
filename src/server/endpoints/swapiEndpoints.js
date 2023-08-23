const {testEndpoint} = require("./hfswapi/test");

const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        await testEndpoint(req, res, app);
    });

    server.get('/hfswapi/getPeople/:id', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.db.logging.findAll();
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;
