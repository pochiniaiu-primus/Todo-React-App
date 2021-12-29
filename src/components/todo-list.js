import React from "react";
import TodoListItem from './todo-list-item';

const TodoList = () => {

    return (
        <ul>
            <li><TodoListItem label="Drink Coffee"/></li>
            <li><TodoListItem label="Learn React"
                              important/></li>
            <li><TodoListItem label="Build React App"
                              important/></li>
            <li><TodoListItem label="Dont forget Spring"/></li>
        </ul>
    );
};

export default TodoList;