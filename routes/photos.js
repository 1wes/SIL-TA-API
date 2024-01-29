const express = require('express');
const router = express.Router();

const { photos } = require('../mock-data/data');

router.use((req, res, next) => {
    
    next();
});

router.get("/photos", (req, res) => {
    
    res.send(photos)
});

module.exports = router;