const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Project {
    _id: ID
    name: String
    description: String
    tasks: [Task]
  }

  type Task {
    _id: ID
    description: String
    project: Project
    status: String
    priority: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    tasks: [Task]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    workspace: [Project]
    project(_id: ID!): Project
    task(_id: ID!): Task
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;