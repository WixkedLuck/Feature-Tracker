// Table of the singular task
// Same exact page as where the task is going to show up 

// Workspace shows the projects
// InProject needs to show the tasks
// ProjectList has ProjectItems & Project Item has TaskList & taskList has TaskItems



// IMPORTS
import React from "react";
// import Navbar from "../components/Nav";
// import TaskList form "../components/TaskList";
// Probably don't need ProjectItem


// Page Setup
    // Navbar
        // Description of Project on Left Side
        // List out Task itself
        // ? List out Assignees 
        // List out Status (Seen, InProgress, Testing, Released, Closed) ??
        // List out Priority (Low, Medium, High)
        // Update Task btn? (or does this go to task itself)
        // delete task btn? (or does this go to task itself)
        // back btn to go back to InProject.js
// 

function Task () {
    return (
        <div className="container text-center">
            <div className="row">
                {/* Smaller Column */}
                <div className="col-4">
                    <div className="project-info">
                        <h2>Project Name</h2>
                        <a href='#' className="btn btn-primary">Go Back to all Projects</a>
                    </div>
                </div>
                {/* Larger Column */}
                <div className="col-8">
                    {/* Table of Tasks */}
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Comment</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Status</th>
                                <th scope="col">Contacts</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <th scope="row">1</th>
                            
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default Task; 