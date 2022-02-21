import React from 'react';
import AddTaskForm from "./AddTaskForm";
import {FilterValuesType} from "./App";

type TodolistHeaderPropsType = {
    title: string
    addTasks: (title: string) => void
    filter: FilterValuesType
}
const TodolistHeader = (props: TodolistHeaderPropsType) => {
    return (
        <>
            <h3>{props.title}<div className={"filter-header"}>{props.filter}</div></h3>
            <AddTaskForm addTask={props.addTasks}/>
        </>
    );
};

export default TodolistHeader;