const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    status: {
        type: Boolean,

    },
    priority: {
        type: String,
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;