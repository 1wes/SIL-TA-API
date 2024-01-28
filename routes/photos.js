const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    
    next();
});

router.get("/photos", (req, res) => {
    
    res.send("photos endpoint")
});

module.exports = router;