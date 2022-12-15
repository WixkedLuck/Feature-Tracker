// Workspace shows lie projects
// InProject needs to show lie tasks
// ProjectList has ProjectItems & Project Item has TaskList & taskList has TaskItems

// DELETE ESLINT on CLIENT Side before committing & pushing



// IMPORTS
import React from "react";
import { FaTrashAlt, FaHistory } from "react-icons/fa";

import TaskList from '../components/TaskItem';
import "../stylesheets/Inproject.css"
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
    return (
        <div className="container text-center mt-5">
            <div className="row">


                {/* Smaller Column */}
                <div className="col-4">
                    <div className="project-info bg-lar">
                        <h2>Project Name</h2>
                        <div className="sectionBreak">
                            <h4>Team:</h4>
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col">
                                        David
                                    </div>
                                    <div class="col">
                                        Molly
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        Bryan
                                    </div>
                                    <div class="col">
                                        Ely
                                    </div>
                                </div>

                            </div>
                            <button href='#' className="btn btn-primary btn-pd">Edit team</button><br></br>
                            <button href='#' className="btn btn-primary btn-pd"> ← Go Back</button>
                            {/* this line is for the model */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add Task
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade bg-dark " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog ">
                                    <div class="modal-content styled mt-5">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5 ftcolor" id="exampleModalLabel">Create new Task:</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form id="survey-form" className='formcolor'>

                                                <label for="name" id="name-label">Task Description:</label>
                                                <textarea name="message" required placeholder='\\TODO' /><br></br>

                                                <label for="description" id="name-label">Task Priority:</label>
                                                <select value="newBugPriority">
                                                    <option value="Low">Low</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="High">High</option>
                                                </select><br></br>


                                                <button type="submit" class="btn btn-primary" id="submit">Submit</button>

                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

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
                <div className="container col-8">
                    {/* header info - static info */}

                    <table class="table table-dark table-striped trial">
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
                            <tr>
                                <td>This is a Description of the problem This is a Description of the problem</td>
                                <td>High</td>
                                <td>Completed</td>
                                <td><button className="btn btn-primary btn-pd"><FaHistory /></button></td>
                                <td><button className="btn btn-primary btn-pd"><FaTrashAlt /></button></td>
                            </tr>
                           
                        </tbody>
                    </table>
                    {/* items mapped over - responsive info */}
                    {/* grab all tasks from user and create list */}
                    {/* {<TaskList />}  */}
                </div>
            </div>




        </div>
    )
}


export default Inproject;