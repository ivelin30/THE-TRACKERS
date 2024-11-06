import  express  from "express";
import { Album } from "../models/AlbumModel.js";
import upload from './a.cjs';
const router = express.Router();

//POST BOOK
router.post('/',upload.single('photo'), async (req, res) => {
    console.log(req.body.photo);
    try {
        if(!req.body.photo){
            return res.status(404).send("empty information");
        };
        const newAlbum = {
            photo: req.body.photo,
        }
        const album = await Album.create(newAlbum);

        return res.status(201).send(album);
    } catch (error) {
        console.log(error);
    }
});
//GET ALL BOOKS
router.get('/' , async (req, res) => {
    try {
        const albums = await Album.find({});
        return res.status(200).json({
            count: albums.length,
            data: albums
        });
    } catch (err) {
        console.log(err);
    }
});
//GET BOOK BY ID
router.get('/:id' , async (req, res) => {
    try {
        const { id } = req.params;
        const album = await Album.findById(id);
        return res.status(200).json(album);
    } catch (err) {
        console.log(err);
    }
});
//UPDATE BOOK
router.put('/:id' , async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(404).send("empty information");
        };

        const { id } = req.params;
        const result = await Album.findByIdAndUpdate(id, req.body);

        if(!result){
           req.status(404).send({message: "Album not found"});
        } 
        return res.status(200).json({message: "update successfully"});
    } catch (err) {
        console.log(err);
    }
});
//DELETE BOOK
router.delete('/:id' , async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Album.findByIdAndDelete(id);
        if (!result) return res.status(404).send({message: "Album not found"});

        return res.status(200).json({message: "delate successfully"});
    } catch (err) {
        console.log(err);
    }
});

export default router;