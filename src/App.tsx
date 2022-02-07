import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: false},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: true},
    ])

    const [filter, setFilter] = useState<FilterValuesType>("completed")


    const removeTask = (taskID: number) => {
        const filterTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filterTasks)
    }

    const changeFilter = (filter: FilterValuesType) => {
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

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={getFilteredTasksForRender()}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
