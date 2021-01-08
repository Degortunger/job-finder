const { Sequelize } = require('sequelize');
const Sequilize = require('sequelize');
const db        = require('../db/connection');

const User = db.define('user', {
    username: {
        type: Sequilize.TEXT,
        required: true
    },
    password: {
        type: Sequilize.TEXT,
        required: true
    },
    email: {
        type: Sequilize.TEXT,
        required: true
    },
    city: {
        type: Sequilize.INTEGER,
    }
});

module.exports = User