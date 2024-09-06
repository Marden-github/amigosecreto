const jwt = require('jsonwebtoken')

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    console.log(token);
     try {
        const data = jwt.verify(token, process.env.JWT_KEY);
        if (!data) {
            throw new Error();
        }      
        next();
    } catch (error) {
        res.status(401).json({ error: 'usuario não tem autorização.' });
    }
}

module.exports = auth