import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: false},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: true},
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all")


    const removeTask = (taskID: string, /*isDone: boolean*/) => {
        const filterTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filterTasks)
    }

    const addTask = (title: string) => {
        /*        const newTask: TaskType = {
                    id: v1(), title: title, isDone: false
                }
                const updatedTasks = [newTask, ...tasks]
                setTasks(updatedTasks)*/ //или так
        setTasks([{
            id: v1(), title: title, isDone: false
        }, ...tasks])
    }

    const changeTaskStatus = (taskID: string) => {
        setTasks(tasks.map(t => t.id === taskID
            ? {...t, isDone: !t.isDone}
            : t))
    }

    const changeFilter = (filter: FilterValuesType) => {
        /*debugger*/
        setFilter(filter)
    }

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(t => t.isDone === true)
            case "active":
                return tasks.filter(t => t.isDone === false)
            default:
                return tasks
        }
    }

    const filteredTasksForRender = getFilteredTasksForRender()
    /*    if (!filteredTasksForRender.length) {
            changeFilter("completed")
        }*/
    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={filteredTasksForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      filter={filter}
                      changeTaskStatus={changeTaskStatus}
            />

        </div>
    );
}

export default App;
