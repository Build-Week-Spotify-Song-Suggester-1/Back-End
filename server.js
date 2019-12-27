const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const server = express();

// global middleware
server.use(express.json());
server.use(helmet());
server.use(cors());


server.get('/', (req, res) => {
    res.json({ api: 'up and running' });
});

module.exports = server;