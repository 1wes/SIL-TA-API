const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    
    next();
});

router.get("/users", (req, res) => {
    
    res.send("users endpoint")
})

module.exports = router;