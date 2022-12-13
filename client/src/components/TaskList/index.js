import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';


export default function TaskItem() {
    const { data } = useQuery(QUERY_TASKS);
    let task;

    if (data) {
        task = data.task
    }

    return (
        <div className="row">
            <div className="col-sm">
                {task.description}
            </div>
            <div className="col-sm">
            {task.priority}
            </div>
            <div className="col-sm">
            {task.status}
            </div>
            <div className="col-sm">
                <button href='#' className="btn btn-primary">completed</button>
            </div>
        </div>
    );
}