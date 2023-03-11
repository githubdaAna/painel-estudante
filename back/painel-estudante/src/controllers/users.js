const knex = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../secret');

const addUser = async (req, res) => {
    const { nome, email, senha } = req.body

    if (!nome || !email || !senha) {
        return res.status(404).json({ mensagem: "Todos os dados são obrigatórios!" })
    }

    const getUser = await knex('usuarios').where({ email })

    if (getUser.length >= 1) {
        return res.json({ mensagem: 'Já existe uma conta com o e-mail informado.' })
    }

    try {
        const securePass = await bcrypt.hash(senha, 10);

        const registerUser = await knex('usuarios').insert({ nome, email, senha: securePass }).returning('*');

        const { senha: _, ...userData } = registerUser[0];
        return res.json(userData);
    } catch (error) {
        return res.json(error.message)
    }
}

const loginUser = async (req, res) => {
    const users = await knex('usuarios').debug()
    return res.json(users)
}

const updateUser = (req, res) => {

}

const viewUser = (req, res) => {

}

const addTeacher = (req, res) => {

}

const viewTeacher = (req, res) => {

}

module.exports = {
    addUser,
    loginUser,
    updateUser,
    viewUser,
    addTeacher,
    viewTeacher,
}