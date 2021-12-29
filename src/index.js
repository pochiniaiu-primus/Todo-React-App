import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Learn React', important: true},
        {label: 'Build Awesome React App', important: true},
        {label: 'Dont forget Spring', important: false},
    ]

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};
const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));