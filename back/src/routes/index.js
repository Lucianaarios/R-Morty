const { login, createUser } = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { getCharById } = require('../controllers/getCharById');

const express = require('express');
const router = express.Router();


router.get('/character/:id', getCharById);

router.get('/login', login);

router.post('/login', createUser);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

module.exports = {
    router
};