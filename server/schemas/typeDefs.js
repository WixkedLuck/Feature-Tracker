const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Workspace {
    _id: ID
    name: String
    description: String
    projects: [Project]
    users: [User]
  }

  type Project {
    _id: ID
    name: String
    description: String
    team: [User]
    tasks: [Task]
  }

  type Task {
    _id: ID
    description: String
    project: Project
    status: Boolean
    priority: String!
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    tasks: [Task]
    projects: [Project]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    users: [User]
    workspace: [Workspace]
    project(_id: ID!): Project
    task(_id: ID!): Task
    tasks: [Task]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    updateTask(_id: ID!, description: String, status: Boolean, priority: String ): Task
    deleteTask(_id: ID!): Task
    createProject(name: String!, description: String, users:[ID]): Project
  }
`;

module.exports = typeDefs;