const express = require('express');
const router = express.Router();

const Model = require('../models/models');

router.get('/', async (req,res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

router.post('/postNewTask', async (req,res) => {
    let lastUpdated = new Date();
    const data = new Model({
        taskTitle: req.body.title,
        taskDesc: req.body.desc,
        taskDone: req.body.taskDone,
        lastUpdated: lastUpdated
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log(`data is saved: ${dataToSave}`)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

router.patch('/update/:id', async (req,res) => {
    try{
        const id = req.params.id;
        req.body.lastUpdated = new Date();
        const updatedData = req.body;
        const options = {new:true};
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        );
        res.send(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})


module.exports = router;