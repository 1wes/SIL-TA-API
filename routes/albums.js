const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    
    next();
});

router.get(`/albums`, (req, res) => {
    
    res.send("You've hit the albums endpoint")
});

module.exports = router;