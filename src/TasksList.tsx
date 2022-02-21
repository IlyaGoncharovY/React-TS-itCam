import React from 'react';
import Task from "./Task";
import {TaskType} from "./Todolist";
import ControlButton from "./ControlButton";
import {FilterValuesType} from "./App";

type TaskListPropsType = {
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask:(taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const TasksList = (props: TaskListPropsType) => {
    const tasksComponentsList = props.tasks.map(task => {
        return <Task
            removeTask={props.removeTask}
            key={task.id}
            {...task}
            changeTaskStatus={props.changeTaskStatus}
        />
    })

    return (
        tasksComponentsList.length
        ? <>
            <ul>
                {tasksComponentsList}
            </ul>
            <ControlButton
                filter={props.filter}
                changeFilter = {props.changeFilter}/>
        </>
            : <span>Tasks List is empty</span>
    );
};

export default TasksList;