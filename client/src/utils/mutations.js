import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// copy & paste mutation from GraphQL
export const CREATE_PROJECT = gql `
mutation Mutation($name: String!, $description: String, $users: [ID]) {
  createProject(name: $name, description: $description, users: $users) {
    name
  }
}
`

// Molly 12/17 - Added updateProject Mutation, Added createTask Mutation, Added updateTask, Added deleteTask
// Molly 12/18 - Removed Update_Project for now. 
// export const UPDATE_PROJECT = `
// mutation UpdateProject($id: ID!, $users: [ID]) {
//   updateProject(_id: $id, users: $users) {
//     team {
//       firstName
//       lastName
//     }
//   }
// }
// `

export const CREATE_TASK = gql`
mutation CreateTask($priority: String!, $project: ID!, $description: String, $status: Boolean) {
  createTask(priority: $priority, project: $project, description: $description, status: $status) {
  
    description
    priority
    status
   _id
  }
}
`

export const UPDATE_TASK = gql`
mutation Mutation($id: ID!, $description: String, $status: Boolean, $priority: String) {
  updateTask(_id: $id, description: $description, status: $status, priority: $priority) {
    description
    priority
    status
  }
}
`

export const DELETE_TASK = gql`
mutation Mutation($id: ID!) {
  deleteTask(_id: $id) {
    _id
    description
  }
}
`