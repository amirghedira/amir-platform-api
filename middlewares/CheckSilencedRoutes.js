const SILENCED_ROUTES = ["/status"]
module.exports = (req, res, next) => {
    if (SILENCED_ROUTES.includes(req.originalUrl))
        return
    next()
}