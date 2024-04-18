import express from 'express';
import { ArtList } from '../Models/artListSchema.js';

const artRouter=express.Router();

artRouter.get('/:id',async(req,res)=>{
    try{
        const artById = await ArtList.findById(req.params.id);
        res.status(200).json(artById);
    }
    catch(error){
        console.log(error);
    }
});

artRouter.post('/',async(req,res)=> {
    const {artName,serial,src,alt,bids}=req.body;
    const newArt = new ArtList({artName,serial,src,alt,bids});
    if(!newArt) {
        return res.status(400).json('Art not created');
    }
    try{
        await newArt.save();
        res.status(201).json(newArt);
    }
    catch(error){
        console.log(error);
    }
});

artRouter.put('/:id',async(req,res)=>{
    const {artName,serial,src,alt,bids}=req.body;
    if(!req.params.id) {
        return res.status(400).json('ID not found');
    }
    try {
        const updatedArt = await ArtList.findByIdAndUpdate(req.params.id,{artName,serial,src,alt,bids},{new:true});
        res.status(200).json(updatedArt);
    } catch (error) {
        console.log(error);
    }
});
artRouter.delete('/:id',async(req,res)=>{
    try {
        if(!req.params.id) {
            return res.status(400).json('ID not found');
        }
        await ArtList.findByIdAndDelete(req.params.id);
        res.status(200).json('Art Deleted');
    } catch (error) {
        console.log(error);
    }
})

export default artRouter;

