import { useReducer } from 'react';
import {
  CREATE_PROJECT,
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  UPDATE_PROJECT,
  SET_PROJECT,
  UPDATE_ALLUSERS
  // Add if other actions have been added to actions.js
} from './actions';

// Create a function that will handle combining two objects. Accepts state and an action as an argument.
export default function reducer(state, action) {

  switch (action.type) {
    case CREATE_PROJECT: {
      // Generate a unique id for this project
      
      // Take a copy of the new project's data and add an id to it
      const newProject = { ...action.payload};

      // Take a copy of state and assign the projects array to our updated array with the new project
      return {
        ...state,
        projects: [...state.projects, newProject],
      };
    }
    
    // CASE TO ALLUSERS
    case UPDATE_ALLUSERS: {
      const allUsers = {...action.payload};

      return {
        ...state,
        users: [...state.users, allUsers],
      };
    }

    // Adding a task 
    case ADD_TASK: {

      const newTask = { ...action.payload };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }
    // Take a copy of state and return it with a modified version of the task array excluding the `task.id` in `action.payload`
    case REMOVE_TASK: {
      return {
        ...state,
        tasks: [...state.tasks].filter(
          (task) => task.id !== action.payload
        ),
      };
    }
    case UPDATE_TASK: {
      // Find the index of the task who has an id that matches the one in the payload
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      // Variable to hold our task object with the updated values from our action
      const updatedTask = {
        ...state.tasks[taskIndex],
        ...action.payload,
      };

      // Make a copy of our current tasks array
      const newTasksList = [...state.tasks];

      // Assign the updated task to their existing position in the newTasksList
      newTasksList[taskIndex] = updatedTask;

      // Return a copy of state with our newTasksList
      return {
        ...state,
        tasks: newTasksList,
      };
    }
    case SET_PROJECT:{
      return {
        ...state,
        projects: action.payload,
        
      };
    }
  
    case UPDATE_PROJECT: {
      // Find the index of the project who has an id that matches the one in the payload
      const projectIndex = state.projects.findIndex(
        (project) => project.id === action.payload.id
      );

      // Variable to hold our project object with the updated values from our action
      const updatedProject = {
        ...state.projects[projectIndex],
        ...action.payload
      };

      // Make a copy of our current state of the projects array
      
      const newProjectList = [...state.projects]

      // Assign the updated project to their existing position in the newProjectList
      newProjectList[projectIndex] = updatedProject

      // Return a copy of state with our newProjectList
      return {
        ...state,
        projects: newProjectList,
        
      };
    }

    // Default to returning the state as is in our switch statement
    default:
      return state;
  }
};

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState);
}
