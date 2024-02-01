const express = require('express');
const router = express.Router();

const { users } = require('../mock-data/data');
const { albums } = require('../mock-data/data');

router.use((req, res, next) => {
    
    next();
});

router.get("/users", (req, res) => {
    
    res.send(users)
});

router.get("/users/:id/albums", (req, res) => {

    var userId = parseInt(req.params.id);

    const userAlbums = albums.filter(album =>
        album.userId === userId);
    
    userAlbums ? res.send(userAlbums) : res.send([]);
});

router.get("/users/:userId", (req, res) => {
    
    var userId = parseInt(req.params.userId);

    const user = users.find(user =>
        user.id === userId);
        
    user ? res.send(user) : res.send("");
})

module.exports = router;