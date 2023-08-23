const _isWookieeFormat = ( req ) => {

    if(req.query.format && req.query.format == 'wookiee')return true
    return false
}
module.exports = { _isWookieeFormat}
