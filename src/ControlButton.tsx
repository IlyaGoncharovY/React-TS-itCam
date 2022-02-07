import React from 'react';
import {FilterValuesType} from "./App";

type ControlButtonType ={
    changeFilter: (filter: FilterValuesType) => void
}


const ControlButton = (props: ControlButtonType) => {
    return (
        <div>
            <button onClick={()=>props.changeFilter("all")}>All</button>
            <button onClick={()=>props.changeFilter("active")}>Active</button>
            <button onClick={()=>props.changeFilter("completed")}>Completed</button>
        </div>
    );
};

export default ControlButton;