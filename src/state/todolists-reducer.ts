
import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer=(state: TodolistType[], action: todolistsReducerType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el=>el.id !== action.payload.todolistId)
        }
        case "ADD-TODOLIST" :{
            let newTodolistId = v1();
            // let newTodolistId: TodolistType = [{id: newTodolist, title: action.payload.title, filter:"all"},...state]
            return [{id: newTodolistId, title: action.payload.title, filter:"all"},...state]
        }
        case "CHANGE-TODOLIST-TITLE" : {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
        case "CHANGE-TODOLIST-FILTER":{
            return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.filter}: el)
        }
        default: return state
    }
}

type todolistsReducerType = removeTodolistACType | addTodolistACType | changeTodolistTitleType | changeFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC =(todolistId: string)=>{
    return {
        type: "REMOVE-TODOLIST",
        payload: {todolistId}
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string)=> {
    return {
        type: "ADD-TODOLIST",
        payload: {title}
    }as const
}

type changeTodolistTitleType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        payload: {id, title}

    }as const
}


type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        payload: {id, filter}
    }as const
}