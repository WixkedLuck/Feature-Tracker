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
                {/* Card 1 */}
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">Project 1 Tasks</p>
                            <a href="#" className="card-link">Tasks List</a>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">Project 1 Tasks</p>
                            <a href="#" className="card-link">Tasks List</a>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">Project 1 Tasks</p>
                            <a href="#" className="card-link">Tasks List</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Inproject;