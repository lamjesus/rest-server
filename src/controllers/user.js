const { query } = require("express");

const userGet = (req, res) => {
    res.json({
        msg: 'get API '

    });
}
const userPut = (req, res) => {
    res.json({
        msg: 'put API-controller ',
    })
}
const userPost = (req, res) => {
    const body = req.body;
    const { nombre, q, apikey } = req.query;
    res.status(201).json({
        msg: 'post API-controller ',
        nombre,
        q,
        apikey
    });
}
const userDelete = (req, res) => {
    res.json({ msg: 'delete API-controller ' });
}
const userPatch = (req, res) => {
    res.json({ msg: 'patch API -controller' });
}

module.exports = {
    userGet
    , userPut
    , userPost
    , userDelete
    , userPatch

}