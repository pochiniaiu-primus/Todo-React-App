import React from "react";
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from './components/item-status-filter';

const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Build Awesome React App', important: true, id: 3},
        {label: 'Dont forget Spring', important: false, id: 4}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};
const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));