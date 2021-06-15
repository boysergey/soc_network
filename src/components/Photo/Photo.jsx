import React from "react";
import DialogItem from "../Dialogs/Dialogitem/Dialogsitem";

export default function Photo(props) {
    const collectDialogs = () => {
        const dialogs = [];
        for (let i = 0; i < 4; i++) {
            dialogs.push(<DialogItem name={props.dialogsData[i].name} id={props.dialogsData[i].id}/>)
        }
        return dialogs;
    }
    return (
        <div>
            {collectDialogs()}
        </div>
    )
}