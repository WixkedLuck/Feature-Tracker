import { gql } from '@apollo/client';

// Get All Projects
export const QUERY_ALL_PROJECTS = gql`
 query  {
    projects {
      _id
      name
      description
      team
      task {
        description
      }
    }
  }
`;

// Get all Tasks for Project
export const QUERY_TASKS = gql`
  query getTasks($project: ID) {
    tasks(project: $project) {
      _id
      description
      status
      priority
      project {
        _id
      }
    }
  }
`;

// 12/17 - Molly added below (This will get all tasks without relation to a project)
export const QUERY_ALL_TASKS = gql `
query Tasks {
  tasks {
    _id
    description
    priority
    status
  }
}
`

// get workspace & projects
export const QUERY_WORKSPACE = gql`
query Workspace {
  workspace {
    _id
    description
    name
    projects {
      _id
      description
      name
    }
  }
} 
`;

// Get user & projects & tasks
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      projects {
        _id
        name
        tasks {
          _id
          description
          status
          priority
        }
      }
    }
  }
`;

// Get All USERS 
export const QUERY_ALLUSERS = gql` 
query {
    users {
      _id
      firstName
      lastName
    }
  }
`;

// Get User's Workspace
export const USER_WORKSPACE = gql `
query Query {
  user {
    _id
    projects {
      name
      description
      _id
    }
  }
}
`

// Get Project Tasks
export const QUERY_PROJECT_TASKS = gql `
query Query($id: ID!) {
  project(_id: $id) {
    tasks {
      _id
      description
      priority
      status
    }
  }
}
`