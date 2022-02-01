import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

function App() {
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: false},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: true},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, title: "react", isDone: true},
        {id: 2, title: "reactjs", isDone: false},
        {id: 3, title: "JSX", isDone: true},
    ]
    const tasks_3: Array<TaskType> = [
        {id: 1, title: "re", isDone: true},
        {id: 2, title: "rejs", isDone: true},
        {id: 3, title: "JX", isDone: false},
    ]
    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks_1}/>
            <Todolist title={"Hello world"} tasks={tasks_2}/>
            <Todolist title={"By world"} tasks={tasks_3}/>
        </div>
    );
}

export default App;
