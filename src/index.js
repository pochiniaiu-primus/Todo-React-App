import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Build Awesome React App', important: true, id: 3},
        {label: 'Dont forget Spring', important: false, id: 4}
    ];

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