module.exports = (req, res, next) => {
    console.log("header req=======")
    console.log(req.headers)
    console.log("==============")
    console.log("socket req=======")
    console.log(req.socket)
    console.log("==============")

    if (req.silence)
        return next()
    if (req.headers['X-User-IP']) {
        req.userIP = req.headers['X-User-IP']
        return next()

    }
    req.userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    return next()
}