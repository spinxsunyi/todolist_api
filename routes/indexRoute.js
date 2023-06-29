const express = require('express');
const router = express.Router();

const Model = require('../models/models');

router.get('/', async (req,res) => {
    try{
        const data = await Model.find();
        res.render('home', {title:'home', data:data});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

router.get('/task/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const result = await Model.findById(id);
        res.render('detail', {x:result});
    }
    catch(error){
        res.status(400).json({message: error.message})
    } 
})

module.exports = router;