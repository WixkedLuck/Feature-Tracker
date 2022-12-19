import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PROJECT_TASKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { FaTrashAlt, FaHistory } from "react-icons/fa";
import TaskItem from '../TaskItem';
import { useParams } from "react-router-dom";


export default function TaskList({ id }) {
    const projectId = useParams();
    console.log(projectId)

    const { data } = useQuery(QUERY_PROJECT_TASKS, {
        variables: { id: projectId.id },
      });
    console.log(data?.project?.tasks)

    return (
        !!data?.project?.tasks.length && data?.project?.tasks.map((task) => (
            <tr>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                {/* add task modal button */}
                <td><button type="button" className="btn btn-submit" data-bs-toggle="modal" data-bs-target="#updateTaskModal"><FaHistory /></button></td>
                <td><button className="btn btn-primary btn-pd"><FaTrashAlt /></button></td>
            </tr>
        ))
    );
}