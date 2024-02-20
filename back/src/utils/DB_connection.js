require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('../models/Favorite');
const UserModel = require('../models/User');

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`;
const sequelize = new Sequelize(
    URL,
    {logging: false, native: false}
);

FavoriteModel(sequelize)
UserModel(sequelize)

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'user_favorite', timestamps: false})
Favorite.belongsToMany(User, { through: 'user_favorite', timestamps: false})

module.exports = {
    User,
    Favorite,
    conn: sequelize
};