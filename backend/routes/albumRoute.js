const express = require("express");
const fs = require('fs');
const mongoose = require('mongoose');

const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/resource/albums");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

//Importing schema
require("../models/AlbumModel");
const Images = mongoose.model("albums");

//Get all albums
router.get('/' , async (req, res) => {
    try {
        const albums = await Images.find({});
        return res.status(200).json({
            count: albums.length,
            data: albums
        });
    } catch (err) {
        console.log(err);
    }
});

// Upload album
router.post("/", upload.any(), async (req, res) => {
    const albumName = req.body.name;
    let coverName = req.files[0].filename;
    const imageNames = [];

    for (let i = 1; i < req.files.length; i++) {
     imageNames.push(req.files[i].filename);
    }

    try {
        if(!imageNames || !albumName || !coverName) {
            return res.status(404).send("empty information");
        };
        const newAlbum = {
            name : albumName ,
            cover: coverName,
            photo: imageNames,
        }
        const album = await Images.create(newAlbum);

        return res.status(200).send(album);
    } catch (error) {
        console.log(error);
    }
});

//Delate album
router.delete('/:id', async (req, res) => { 
  try {
    const  id = req.query.id;
    const cover = req.query.cover;
    const photos = req.query.photos;
    const result = await Images.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Album not found' });
    }
    //Delate photo
    let path = `../src/resource/albums/${cover}`;
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err)
        return
      }
    })
    for (let i = 0; i < photos.length; i++) {
      path = `../src/resource/albums/${photos[i]}`;
      fs.unlink(path, (err) => {
        if (err) {
          console.error(err)
          return
        }
      })
    }

    return res.status(200).send({ message: 'Album deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }

})

module.exports = router;