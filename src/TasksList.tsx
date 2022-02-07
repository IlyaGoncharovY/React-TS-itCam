import React from 'react';
import Task from "./Task";
import {TaskType} from "./Todolist";
import ControlButton from "./ControlButton";
import {FilterValuesType} from "./App";

type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask:(taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

const TasksList = (props: TaskListPropsType) => {
    const tasksComponentsList = props.tasks.map(task => {
        return <Task removeTask={props.removeTask} key={task.id} {...task}/>
    })

    return (
        <>
            <ul>
                {tasksComponentsList}
            </ul>
            <ControlButton changeFilter = {props.changeFilter}/>
        </>
    );
};

export default TasksList;