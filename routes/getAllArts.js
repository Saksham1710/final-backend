import express from 'express';
import { ArtList } from '../Models/artListSchema.js';

const getAllArtsRouter=express.Router();

getAllArtsRouter.get('/',async(req,res)=>{
    try {
        const arts=await ArtList.find();
        res.status(200).json(arts);
    } catch (error) {
        console.log(error);
    }
})

export default getAllArtsRouter;
