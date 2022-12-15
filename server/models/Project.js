const mongoose = require('mongoose');

const { Schema } = mongoose;
const Task = require('./Task');
const User = require('./User');

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
      },
      tasks: [{ type: Schema.Types.ObjectId,
        ref: 'Task',
        
        }],
     team: [{
      type: Schema.Types.ObjectId,
    ref: 'User',
     }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;