const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type : String,
        required: true
    },
    timings: {
        type: Date,
        required: true
    },
    task_no:{
        type: Number,
        required: true,
        unique: true
    },
    task_details: {
        type: [String],
        default: []
    },
    task_status: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema);