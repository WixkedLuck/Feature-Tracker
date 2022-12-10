// From 22-State/Activity 20 

/*
 * ADD_PROJECT:
 * - takes a project object as payload with name and major parameters
 * - creates new ID for project based on previous project
 * - pushes new project to the end of copy of project array
 * - updates project array
 */

export const ADD_PROJECT = 'ADD_PROJECT';

/*
 * ADD_TASK:
 * - takes a task object as payload with name and major parameters
 * - creates new ID for task based on previous task
 * - pushes new task to the end of copy of task array
 * - updates task array
 */

export const ADD_TASK = 'ADD_TASK';


/*
 * REMOVE_TASK:
 * - takes a task ID as payload
 * - finds task based on ID and removes via splice() the targeted task
 * - updates task array
 */
export const REMOVE_TASK = 'REMOVE_TASK';

/*
 * UPDATE TASK:
 * - takes object with id and updated values for task parameter(s)
 * - finds task based on ID and updates object
 * - updates object in-place within copy of task array
 * - updates task array
 */
export const UPDATE_TASK = 'UPDATE_TASK';

/*
 * UPDATE Project:
 * - takes object with id and updated values for project parameter(s)
 * - finds project based on ID and updates object
 * - updates object in-place within copy of project array
 * - updates project array
 */
export const UPDATE_PROJECT = 'UPDATE_PROJECT';