const jwt = require('jsonwebtoken');

module.exports = (req) => {
    try {

        const token = req.headers.authorization.split(' ')[1]
        const user = jwt.verify(token, process.env.JWT_SECRET)
        return user

    } catch (error) {
        return null
    }
}
