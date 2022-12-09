// Workspace shows the projects
// InProject needs to show the tasks
// ProjectList has ProjectItems & Project Item has TaskList & taskList has TaskItems

// DELETE ESLINT on CLIENT Side before committing & pushing



// IMPORTS
import React from "react";
// import Navbar from "../components/Nav";
// import TaskList form "../components/TaskList";
// import ProjectItem from "../components/ProjectItem"


// Page Setup
// Navbar
// Individual Projects with all tasks listed
// Add Task btn
// Update Task btn? (or does this go to task itself)
// delete task btn? (or does this go to task itself)
// back btn to go back to workspace.js

// Select task & be re-directed to task itself 
// 
function Inproject() {
    return (
        <div className="container text-center">
            <div className="row">
                {/* Smaller Column */}
                <div className="col-4">
                    <div className="project-info">
                        <h2>Project Name</h2>
                        {/* <h4>Project Description blah blah stuff goes here</h4> */}
                        <button href='#' className="btn btn-primary">all Projects</button>
                        <button href='#' className="btn btn-primary">add to team</button>
                        <button href='#' className="btn btn-primary">add task</button>
                    </div>
                </div>
                {/* Larger Column */}
                <div className="col-8">
                    {/* Table of Tasks */}
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider"> {/* add sort if possible */}
                            <tr>
                                <th scope="col">First Title</th>
                                <th scope="col">First Priority</th>
                                <th scope="col">First Status</th> {/* how to update */}
                                <button href='#' className="btn btn-primary">completed</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Inproject;