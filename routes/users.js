const express = require('express');
const router = express.Router();

const { users } = require('../mock-data/data');

router.use((req, res, next) => {
    
    next();
});

router.get("/users", (req, res) => {
    
    res.send(users)
})

module.exports = router;