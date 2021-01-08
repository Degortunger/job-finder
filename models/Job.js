const { Sequelize } = require('sequelize');
const Sequilize = require('sequelize');
const db        = require('../db/connection');

const Job = db.define('job', {
    title: {
        type: Sequilize.STRING,
    },
    salary: {
        type: Sequilize.TEXT,
    },
    company: {
        type: Sequilize.TEXT,
    },
    email: {
        type: Sequilize.TEXT,
    },
    new_job: {
        type: Sequilize.INTEGER,
    },
    description:{
        type: Sequelize.STRING,
    }
});

module.exports = Job