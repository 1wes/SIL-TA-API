const express = require('express');
const router = express.Router();

const fs = require('fs');

const path = require('path');

const data = require('../mock-data/data');

const { photos } = require('../mock-data/data');

// function that modifies title
const updateTitle = (array, id, newTitle) => {
    
    return array.map(item => (item.id === id ? { ...item, title: newTitle } : item));
}

router.use((req, res, next) => {
    
    next();
});

router.get("/photos", (req, res) => {
    
    res.send(photos)
});

router.get("/photos/album/:albumId", (req, res) => {
    
    const albumId = parseInt(req.params.albumId);

    const photosList = photos.filter((photos) =>
        photos.albumId === albumId);
        
    photosList ? res.send(photosList) : res.send([]);
});

router.get("/photos/:id", (req, res) => {
    
    const photoId = parseInt(req.params.id);

    const photo = photos.find((photoDetails) => 
        
        photoDetails.id === photoId)

    photo ? res.send(photo) : res.send("");
});

router.put("/photos/edit/:id", (req, res) => {
    
    const photoId = parseInt(req.params.id);

    const newTitle = req.body.newTitle;
    
    data.photos = updateTitle(data.photos, photoId, newTitle);

    saveNewTitle(data);
})

const saveNewTitle = (data) => {
    
    const fileContent = `module.exports=${JSON.stringify(data, null, 2)}`;

    const rootPath = path.dirname(__dirname);

    const filePath = path.join(rootPath, "mock-data", "data.js");
    
    fs.writeFileSync(filePath, fileContent, 'utf-8');
}

module.exports = router;