import React from 'react';

function TaskItem( description, priority, status ) {


    return (
        <div className="row">
            <div className="col-sm">
                {description}
            </div>
            <div className="col-sm">
                {priority}
            </div>
            <div className="col-sm">
                {status}
            </div>
            <div className="col-sm">
                <button href='#' className="btn btn-primary">completed</button>
            </div>
        </div>
    );
}

export default TaskItem;