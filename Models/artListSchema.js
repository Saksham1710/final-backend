import mongoose from "mongoose";

const artListSchema = mongoose.Schema({
    artName: {
        type: String,
        required: false
    },
    serial: {
        type: Number,
        required: false
    },
    src:{
        type:String,
        required: true
    },
    alt:{
        type:String,
        required: false
    },
    bids: [
        {
            user: {
                type: String,
                required: true
            },
            bid: {
                type: Number,
                required: true
            }
        }
    ]

});

const ArtList = mongoose.model('artrecords', artListSchema);

export {ArtList};