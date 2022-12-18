import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { FaTrashAlt, FaHistory } from "react-icons/fa";
import TaskItem from '../TaskItem';


export default function TaskList() {
    const { data } = useQuery(QUERY_TASKS);
    let tasks;
    const taskData = data?.getTasks || {};
    if (data) {
        tasks = data.tasks
        console.log(tasks)
    }

    return (
            <tr>
        {tasks.map(tasks => <TaskItem {...tasks} />)}

                {/* <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td><button className="btn btn-primary btn-pd"><FaHistory /></button></td>
                <td><button className="btn btn-primary btn-pd"><FaTrashAlt /></button></td> */}
            </tr>
    );
}