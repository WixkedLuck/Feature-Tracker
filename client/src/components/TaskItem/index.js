import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from "../../utils/queries";


function TaskItem(item) {


    return (
        <div className="row">
            <div className="col-sm">
                description
            </div>
            <div className="col-sm">
                priority
            </div>
            <div className="col-sm">
                status
            </div>
            <div className="col-sm">
                <button href='#' className="btn btn-primary">completed</button>
            </div>
        </div>
    );
}

export default TaskItem;