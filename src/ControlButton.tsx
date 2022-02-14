import React from 'react';
import {FilterValuesType} from "./App";

type ControlButtonType = {
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
            <button onClick={onClickSetFilter("all")}>All</button>
            <button onClick={onClickSetFilter("active")}>Active</button>
            <button onClick={onClickSetFilter("completed")}>Completed</button>
        </div>
    );
};

export default ControlButton;