module.exports = (req, res, next) => {
    if (req.silence)
        return next()
    if (req.headers['X-User-IP']) {
        req.userIP = req.headers['X-User-IP']
        return next()

    }
    req.userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    return next()
}