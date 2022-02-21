import React from 'react';
import {FilterValuesType} from "./App";

type ControlButtonType = {
    filter: FilterValuesType
    changeFilter: (filter: FilterValuesType) => void
}


const ControlButton = (props: ControlButtonType) => {
    const onClickSetFilter = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }
/*

            const onClickSetAllFilter = () => props.changeFilter("all")
            const onClickSetActiveFilter = () => props.changeFilter("active")
            const onClickSetCompletedFilter = () => props.changeFilter("completed")

    */
    return (
        <div>
            <button
                className={props.filter === "all" ? "button-active" : ""}
                onClick={onClickSetFilter("all")}>All</button>
            <button
                className={props.filter === "active" ? "button-active" : ""}
                onClick={onClickSetFilter("active")}>Active</button>
            <button
                className={props.filter === "completed" ? "button-active" : ""}
                onClick={onClickSetFilter("completed")}>Completed</button>
        </div>
    );
};

export default ControlButton;