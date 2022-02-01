import React from 'react';
import Task from "./Task";
import {TaskType} from "./Todolist";
import ControlButton from "./ControlButton";

type TaskListPropsType = {
    tasks: Array<TaskType>
}

const TasksList = (props: TaskListPropsType) => {
    return (
        <>
            <ul>
                <Task {...props.tasks[0]}/>
                <Task {...props.tasks[1]}/>
                <Task {...props.tasks[2]}/>
            </ul>
            <ControlButton/>
        </>
    );
};

export default TasksList;