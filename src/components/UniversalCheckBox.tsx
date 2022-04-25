import React, {ChangeEvent} from 'react';

type UniversalCheckBoxType = {
    callBack: (checkedValue: boolean) => void
    checked: boolean
}

export const UniversalCheckBox = (props: UniversalCheckBoxType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked)
    }

    return (
        <input type="checkbox" onChange={onChangeHandler} checked={props.checked}/>
    );
};

