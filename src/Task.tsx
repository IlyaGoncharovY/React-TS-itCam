import React from 'react';
import {TaskType} from "./Todolist";

type TaskPropsType = TaskType & {removeTask: (taskID:number) => void}

const Task = (props: TaskPropsType) => {
   /* console.log(props.removeTask)*/
    return (
        <li>
            <input type="checkbox"
                   checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={() => {props.removeTask(props.id)}}>x</button>
        </li>
    );
};

export default Task;