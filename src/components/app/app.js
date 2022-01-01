import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import './app.css'

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Learn React', important: true, id: 2},
            {label: 'Build Awesome React App', important: true, id: 3},
            {label: 'Dont forget Spring', important: false, id: 4}
        ]
    };
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            //the index of the element we want to delete
            const idx = todoData.findIndex((el) => id === el.id);
            const before = todoData.slice(0, idx);//all work good
            const after = todoData.slice(idx + 1)
            const newArray = [...before, ...after];
            return {
                todoData: newArray
            };
        });
    };
    addItem = (text) => {
        //generate id
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        //add element to array
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            };
        });
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    //todoData is part os state
                    todos={this.state.todoData}
                    //event listener
                    onDeleted={this.deleteItem}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    };
};