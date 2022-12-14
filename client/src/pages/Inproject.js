// Workspace shows lie projects
// InProject needs to show lie tasks
// ProjectList has ProjectItems & Project Item has TaskList & taskList has TaskItems

// DELETE ESLINT on CLIENT Side before committing & pushing



// IMPORTS
import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import TaskList from '../components/TaskList';
import "../stylesheets/Inproject.css";

import { QUERY_TASKS, QUERY_PROJECT_TASKS, QUERY_ALLUSERS, QUERY_PROJECT_ID } from '../utils/queries';
import { CREATE_TASK, DELETE_TASK } from '../utils/mutations';
import { useParams } from "react-router-dom";
import { UPDATE_PROJECT } from "../utils/actions";


// import TaskList form "../components/TaskList";
// import ProjectItem from "../components/ProjectItem"


// Page Setup
// Navbar
// Individual Projects wili all tasks listed
// Add Task btn
// Update Task btn? (or does liis go to task itself)
// delete task btn? (or does liis go to task itself)
// back btn to go back to workspace.js

// Select task & be re-directed to task itself 
// 
var nameofid;
function Inproject() {
    const [open, setOpen]= useState(false);
    const navigate = useNavigate()
    const { id } = useParams();

    //create task 
    const [createTask, { data: creatingTask }] = useMutation(CREATE_TASK, {
        // when create project runs, UserWorkspace re-runs & gets the new project created
        refetchQueries: [QUERY_PROJECT_TASKS]
    })

    // console.log(id);
    // const [createTask, { data: task }] = useMutation(CREATE_TASK, {
    //     // when create project runs, UserWorkspace re-runs & gets the new project created
    //     refetchQueries: [QUERY_TASKS]
    // })
    // const [deleteTask, {data: task }] = useMutation(DELETE_TASK)
    const { loading, data } = useQuery(QUERY_ALLUSERS);
    const { data: self } = useQuery(QUERY_TASKS);

  

    // data = users, users is an object underneath the query in queries.js files
    const users = data?.users || []
    const user = self?.user || []

    const [Priority, setPriority] = useState('')
    const valid = true;
    const [description, setDescription] = useState('')
    // data = users, users is an object underneath the query in queries.js files
    function onSubmit(e) {
        e.preventDefault();
        createTask({
            variables: {
                // must be users b/c of typedefs & mutations
                priority: Priority,
                status: valid,
                description: description,
                project: id.toString()
            }
        })
        setOpen(false);
    }

    const { data: projectID } = useQuery(QUERY_PROJECT_ID, {
        variables: { id: id },
        
    });
    const projects = projectID?.project?.name || []
    const describes = projectID?.project?.description || []
    console.log(projects);
    
        

// console.log(nameofid);

    
  
    return (
        <div className="container d-flex text-center mt-5">
            <div className="row d-flex" style={{ justifyContent: 'center', maxWidth: '100vw' }}>


                {/* Smaller Column */}
                <div className="mb-4" style={{ maxWidth: '300px' }}>
                    <div className="project-info bg-lar">
                        <h2>{projects}</h2>
                        
                        <div className="sectionBreak p-4">
                            <h3 className="underline">Description:</h3>
                        <p>{describes}</p>
                            <h4>Team:</h4>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        David
                                    </div>
                                    <div className="col">
                                        Molly
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        Bryan
                                    </div>
                                    <div className="col">
                                        Ely
                                    </div>
                                </div>

                            </div>
                            <div className="mt-2">
                                {/* add team modal button */}

                                {/* add task modal button */}
                                <button type="button" className="btn btn-submit" onClick={() => setOpen(true)}>
                                    + Task
                                </button>
                            </div>
                            <button onClick={() => navigate(-1)} className="btn btn-primary btn-pd m-0">??? Go Back</button>

                            {/* <!-- Add Task Modal --> */}
                            {open && <div className="modal d-block bg-dark " id="addTaskModal" tabindex="-1" aria-labelledby="addTaskLabel" aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content styled mt-5">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5 ftcolor" id="addTaskLabel">Create new Task:</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form id="survey-form" className='formcolor'>

                                                <label for="name" id="name-label">Task Description:</label>
                                                <textarea name="message" onChange={e => setDescription(e.target.value)} required placeholder='\\TODO' /><br></br>

                                                <label for="description" id="name-label">Task Priority:</label>
                                                <select value="newBugPriority" onChange={e => setPriority(e.target.value)}>
                                                    <option value="Low">Low</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="High">High</option>
                                                </select><br></br>


                                                <button onClick={onSubmit} type="submit" className="btn btn-primary" id="submit">Submit</button>

                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setOpen(false)}>Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>}





                            {/* <!-- Update Task Modal --> */}
                            <div className="modal fade bg-dark " id="updateTaskModal" tabindex="-1" aria-labelledby="updateTaskLabel" aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content styled mt-5">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5 ftcolor" id="updateTaskLabel">Update Task:</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form id="survey-form" className='formcolor'>

                                                <label for="name" id="name-label">Task Description:</label>
                                                <textarea name="message" required placeholder='Enter updated description' /><br></br>

                                                <label for="description" id="name-label">Task Priority:</label>
                                                <select value="newBugPriority">
                                                    <option value="Low">Low</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="High">High</option>
                                                </select><br></br>


                                                <button type="submit" className="btn btn-primary" id="submit">Submit</button>

                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* end modal */}




                        </div>


                    </div>
                </div>

                {/* Larger Column */}
                {/* Table of Tasks */}
                <div className="container col d-flex task-table" style={{ height: 'fit-content' }}>
                    {/* header info - static info */}

                    <table className="table table-dark table-striped trial">
                        <thead>
                            <tr>

                                <th scope="col">Task Description</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Status</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {<TaskList />}

                        </tbody>
                    </table>
                    {/* items mapped over - responsive info */}
                    {/* grab all tasks from user and create list */}
                </div>
            </div>
        </div>
    )
}


export default Inproject;