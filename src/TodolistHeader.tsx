import React from 'react';
import AddTaskForm from "./AddTaskForm";

type TodolistHeaderPropsType = {
    title: string
    addTasks: (title: string) => void
}
const TodolistHeader = (props: TodolistHeaderPropsType) => {
    return (
        <>
            <h3>{props.title}</h3>
            <AddTaskForm addTask={props.addTasks}/>
        </>
    );
};

export default TodolistHeader;