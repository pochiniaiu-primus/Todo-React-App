import React from "react";
import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                {/*<TodoListItem label={item.label}*/}
                {/*              important={item.important}/>*/}
                <TodoListItem {...itemProps}/>
            </li>)
    });
    return (
        <ul>
            {elements}
        </ul>
    );
};

export default TodoList;