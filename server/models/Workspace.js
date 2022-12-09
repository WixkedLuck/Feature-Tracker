const mongoose = require('mongoose');

const { Schema } = mongoose;
const Project = require('./Project');

const workspaceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
      },
      projects: [Project.schema]
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports = Workspace;