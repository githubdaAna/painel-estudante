const jwt = require('jsonwebtoken');
const pool = require('../connection');
const secret = require('../secret');
const { querySelectUserId } = require('../query')

const checkUserAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Usuário não autorizado.' });
    }

    const token = authorization.replace("Bearer ", "");

    try {
        const { id } = jwt.verify(token, secret);
        const { rows } = await pool.query(querySelectUserId, [id]);
        const { senha: _, ...userData } = rows[0];

        req.user = userData;

        next();
    } catch (error) {
        return res.json(error);
    }
}

module.exports = checkUserAuth;