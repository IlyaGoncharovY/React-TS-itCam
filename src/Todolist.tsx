import React from 'react';
import TodolistHeader from "./TodolistHeader";
import TasksList from "./TasksList";
import {FilterValuesType} from "./App";


type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <TodolistHeader
                title={props.title}
                addTasks={props.addTask}
            />
            <TasksList changeFilter={props.changeFilter}
                       tasks={props.tasks}
                       removeTask={props.removeTask}
            />
        </div>
    );
};

export default Todolist;