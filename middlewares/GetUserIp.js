module.exports = (req, res, next) => {
    if (req.headers.origin && req.hearders['X-User-IP']) {
        req.userIP = req.hearders['X-User-IP']
        return next()

    }
    req.userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    return next()
}