module.exports = (req, res, next) => {
    console.log("header req=======")
    console.log(req.headers)
    console.log("==============")

    if (req.silence)
        return next()
    req.userIP = req.headers['x-forwarded-for']
    return next()
}