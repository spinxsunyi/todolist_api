const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    taskTitle:{
        required: true,
        type: String
    },
    taskDesc:{
        type: String
    },
    taskDone:{
        type: Boolean,
    },
    lastUpdated:{

    }
});

module.exports = mongoose.model('tasks',dataSchema)