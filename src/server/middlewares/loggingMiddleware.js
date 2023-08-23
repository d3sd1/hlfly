const loggingMiddleware = (db) =>
    (req, res, next) => {
            console.info('Received new request. Logging into database...')
            db.logging.create({
                    ip: req.headers['host'].split(':')[0].trim(),
                    header: JSON.stringify(req.headers),
                    action: req.originalUrl
            })
            next()
    }

module.exports = loggingMiddleware;
