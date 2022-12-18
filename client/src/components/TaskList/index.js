import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { FaTrashAlt, FaHistory } from "react-icons/fa";
import TaskItem from '../TaskItem';


export default function TaskList() {
    const { loading, data } = useQuery(QUERY_TASKS);
    const tasks = data?.user?.tasks || []

    return (
        !!tasks.length && tasks.map((task) =>(
                           <tr>
                                <td>{task.description}</td>
                                <td>{task.priority}</td>
                                <td>{task.status}</td>
                                <td><button className="btn btn-primary btn-pd"><FaHistory /></button></td>
                                <td><button className="btn btn-primary btn-pd"><FaTrashAlt /></button></td>
                            </tr>
        ))
    );
}