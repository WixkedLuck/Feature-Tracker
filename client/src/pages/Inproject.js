// Workspace shows lie projects
// InProject needs to show lie tasks
// ProjectList has ProjectItems & Project Item has TaskList & taskList has TaskItems

// DELETE ESLINT on CLIENT Side before committing & pushing



// IMPORTS
import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaHistory } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import TaskList from '../components/TaskList';
import "../stylesheets/Inproject.css";

import { QUERY_ALLUSERS, QUERY_TASKS } from '../utils/queries';
import { CREATE_TASK, DELETE_TASK } from '../utils/mutations';
import { useParams } from "react-router-dom";


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

function Inproject() {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id);
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

    const [team, setTeam] = useState([])
    const [project, setProject] = useState('')
    const [priority, setPriority] = useState('')
    const [description, setDescription] = useState('')

     function handleDeleteTask() {

     }

    // function onSubmit(e) {
    //     e.preventDefault();
    //     createTask({
    //         variables: {
    //             // must be users b/c of typedefs & mutations
    //             description: description.description,
    //             priority: priority.priority,
    //             project: project.project
    //         }
    //     })
    // }

    return (
        <div className="container d-flex text-center mt-5">
            <div className="row d-flex" style={{ justifyContent: 'center', maxWidth: '100vw' }}>


                {/* Smaller Column */}
                <div className="mb-4" style={{ maxWidth: '300px' }}>
                    <div className="project-info bg-lar">
                        <h2>Project Name</h2>
                        <div className="sectionBreak p-4">
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
                                <button type="button" className="btn btn-submit" data-bs-toggle="modal" data-bs-target="#addTeamModal">
                                    + Team
                                </button>
                                {/* add task modal button */}
                                <button type="button" className="btn btn-submit" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                                    + Task
                                </button>
                            </div>
                            <button onClick={() => navigate(-1)} className="btn btn-primary btn-pd m-0">← Go Back</button>

                            {/* <!-- Add Task Modal --> */}
                            <div className="modal fade bg-dark " id="addTaskModal" tabindex="-1" aria-labelledby="addTaskLabel" aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content styled mt-5">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5 ftcolor" id="addTaskLabel">Create new Task:</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form id="survey-form" className='formcolor'>

                                                <label for="name" id="name-label">Task Description:</label>
                                                <textarea name="message" required placeholder='\\TODO' /><br></br>

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

                            {/* <!-- Add Team Modal --> */}
                            <div className="modal fade bg-dark " id="addTeamModal" tabindex="-1" aria-labelledby="addTeamLabel" aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content styled mt-5">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5 ftcolor" id="addTeamLabel">Add to this Team:</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form id="survey-form" className='formcolor'>

                                                {!!users.length && users.filter(u => u._id !== user._id).map((item) => (
                                                    <div>
                                                        <input type="checkbox" onChange={e => {
                                                            if (e.target.checked) {
                                                                // item represent user
                                                                // taking current state & creating new array, take current array & add new id
                                                                setTeam(team => [...team, item._id])
                                                                // might have to consider checking the array, to see if the id exist inside the array already (don't want to duplicate a user)
                                                            } else {
                                                                // filter creates new array
                                                                // return everybody who is not of the id checked
                                                                setTeam(team => team.filter(t => t !== item._id))
                                                            }
                                                        }} id="front-end" value="Front-end Users"></input>
                                                        <label htmlFor="front-end">{item.firstName}</label>
                                                    </div>
                                                ))}


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