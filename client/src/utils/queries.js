import { gql } from '@apollo/client';

// Get All Projects
export const QUERY_ALL_PROJECTS = gql`
  {
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

// get workspace & projects
export const QUERY_WORKSPACE = gql`
  {
    workspaces {
        _id
        name
        description
        projects {
            _id
            name
            description
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
