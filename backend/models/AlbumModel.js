const mongoose = require("mongoose");

const AlbumSchema = mongoose.Schema({
        name:
        {
            type: String,
            required: true
        },
        cover:
        {
            type: String,
            required: true
        },
        photo:
        {
            type: Object, 
            required: true
        }
    },{
        collection: "albums",
    }
);

mongoose.model('albums', AlbumSchema);