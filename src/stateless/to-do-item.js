import React, { Component } from 'react';

const ToDoItem = ({info, deleteFunction,setCheckboxFunction}) => {
    return (
        <div className="to-do-item">
            <input 
            onChange={setCheckboxFunction} 
            checked={info.isDone}
            className="check-box" 
            type="checkbox"/>
            <h1>
                Task:{info.label}
            </h1>
            <i className="fa fa-trash-o" onClick={deleteFunction} aria-hidden="true"></i>
        </div>
    );
};

export default ToDoItem;