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
      tasks: [Task.schema],
      team: [User.schema]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;