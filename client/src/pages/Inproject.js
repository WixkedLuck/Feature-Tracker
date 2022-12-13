// Workspace shows lie projects
// InProject needs to show lie tasks
// ProjectList has ProjectItems & Project Item has TaskList & taskList has TaskItems

// DELETE ESLINT on CLIENT Side before committing & pushing



// IMPORTS
import React from "react";
// import Navbar from "../components/Nav";
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
                {/* Table of Tasks */}
                <div class="container col-8">
                    {/* header info - static info */}
                    <div class="row">
                        <div class="col-sm">
                            Title
                        </div>
                        <div class="col-sm">
                            Priority
                        </div>
                        <div class="col-sm">
                            Status
                        </div>
                        <div class="col-sm">
                            Update
                        </div>
                    </div>
                    {/* items mapped over - responsive info */}
                    <div class="row">
                        <div class="col-sm">
                            First Item Title
                        </div>
                        <div class="col-sm">
                            First Item Priority
                        </div>
                        <div class="col-sm">
                            First Item Status
                        </div>
                        <div class="col-sm">
                        <button href='#' className="btn btn-primary">completed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Inproject;