const { AuthenticationError } = require('apollo-server-express');
const { Task, Project, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
                                                    //queries here
    Query: {
        workspace: async () => {
            return await Project.find();
        },
        project: async (parent, {tasks}) => {
            const params = {};
            if (tasks) {
                params.tasks = tasks;
            }
            return await Project.find(params).populate('tasks');
        },
        task: async (parent, { _id }) => {
            return await Task.findById(_id);
        },
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
        }
    }
};

module.exports = resolvers;
