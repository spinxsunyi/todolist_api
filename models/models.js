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
        default: false
    },
    lastUpdated:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('tasks',dataSchema)