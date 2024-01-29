const express = require('express');
const router = express.Router();

const { albums } = require('../mock-data/data');

router.use((req, res, next) => {
    
    next();
});

router.get(`/albums`, (req, res) => {
    
    res.send(albums)
});

module.exports = router;