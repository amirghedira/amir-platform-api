module.exports = (req, res, next) => {
    if (req.silence)
        return next()
    req.userIP = req.headers['x-forwarded-for']
    return next()
}