const express = require('express');
const router = express.Router();

const { albums } = require('../mock-data/data');

router.use((req, res, next) => {
    
    next();
});

router.get(`/albums`, (req, res) => {
    
    res.send(albums)
});

router.get("/albums/:id", (req, res) => {
    
    var albumId = parseInt(req.params.id);

    const album = albums.find(album =>
        album.id === albumId);
        
    album ? res.send(album) : res.send("");
})

module.exports = router;