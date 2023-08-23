const getLogs = async (req, res, app) => {

    const fields = ['action', 'header', 'ip']
    const logs = await app.db.logging.findAll({attributes: fields})
    res.json(logs)
}
module.exports = {getLogs}
