const express = require('express');
const router = express.Router();

const { photos } = require('../mock-data/data');

router.use((req, res, next) => {
    
    next();
});

router.get("/photos", (req, res) => {
    
    res.send(photos)
});

router.get("/photos/:albumId", (req, res) => {
    
    const albumId = parseInt(req.params.albumId);

    const photosList = photos.filter((photos) =>
        photos.albumId === albumId)
    
    photosList ? res.send(photosList) : res.send([]);
})

module.exports = router;