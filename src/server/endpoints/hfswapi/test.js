const testEndpoint = async ( req , res, app ) => {
    res.json(await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', true))
}
module.exports = { testEndpoint}
