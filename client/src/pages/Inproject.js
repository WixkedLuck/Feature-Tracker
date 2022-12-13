// Workspace shows lie projects
// InProject needs to show lie tasks
// ProjectList has ProjectItems & Project Item has TaskList & taskList has TaskItems

// DELETE ESLINT on CLIENT Side before committing & pushing



// IMPORTS
import React from "react";
import TaskList from '../components/TaskItem';
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
                <div className="container col-8">
                    {/* header info - static info */}
                    <div className="row">
                        <div className="col-sm">
                            Title
                        </div>
                        <div className="col-sm">
                            Priority
                        </div>
                        <div className="col-sm">
                            Status
                        </div>
                        <div className="col-sm">
                            Update
                        </div>
                    </div>
                    {/* items mapped over - responsive info */}
                    {/* grab all tasks from user and create list */}
                    {<TaskList />} 
                </div>
            </div>
        </div>
    )
}


export default Inproject;