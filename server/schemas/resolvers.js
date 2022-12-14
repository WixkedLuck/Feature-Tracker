const { AuthenticationError } = require('apollo-server-express');
const { Task, Project, User, Workspace } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
                                                    //queries here
    Query: {
        workspace: async () => {
            return await Workspace.find().populate('projects');
        },
        project: async (parent, {_id}) => {
            return await Project.findById(_id).populate('tasks');
        },
        task: async (parent, { _id }) => {
            return await Task.findById(_id);
        },
        users: async () => {
            return await User.find()
        },
        tasks: async () => {
            return await Task.find()
        },
        user: async (parent, args, context) => {
            // Showing the user's projects that they're assigned to
            return await User.findById(context.user._id).populate('projects')
        }
        
    },
    
                                                    //mutations here
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Please log in first.');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect email or password.');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect email or password.');
            }
            const token = signToken(user);
            return { token, user };
        },
        updateTask: async (parent, args, context) => {
            return await Task.findByIdAndUpdate(args._id, {description: args.description, status: args.status, priority: args.priority});
        },
        deleteTask: async (parent, args, context) => {
            return await Task.findByIdAndDelete(args._id)
        },
        createProject: async (parent, args, context) => {
            const team = [...args.users, context.user._id]
            console.log(context.user._id);
            const project=await Project.create({name: args.name, description: args.description, team });
           await User.findByIdAndUpdate(context.user._id, {$push: {projects: project._id}})
            return project;
        },
        // Molly 12/17 - Added updateProject Mutation, Added createTask Mutation
        // Molly 12/18 - Removing UpdateProject for now

        // updateProject: async (parent, args, context) => {
        //     const team = [...args.users, context.user._id]
        //     return await Project.findByIdAndUpdate({name: args.name, description: args.description, team });
        // },

        createTask: async (parent, args, context) => {
            console.log(args);
           const task= await Task.create({description: args.description, status: args.status, priority: args.priority, project: args.project})
           
            await Project.findByIdAndUpdate(args.project, {$push: {tasks: task._id}})
            return task
        },
    }
};

module.exports = resolvers;
