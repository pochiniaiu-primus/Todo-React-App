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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build Awesome React App'),
            this.createTodoItem('Dont forget Spring'),
        ],
        term: '',
        filter: 'all'//active, all, done
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

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
        const newItem = this.createTodoItem(text);
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
    };

    toggleProperty(array, id, propName) {
        const idx = array.findIndex((el) => el.id === id);
        //1.update object
        const oldItem = array[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        //2.construct new array
        return [
            ...array.slice(0, idx),
            newItem,
            ...array.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };


    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    search(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label
                .toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter) {//items - array, filter - all/active/done
        switch (filter) {
            case  'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items;
        }
    }

    onSearchChange = (term) => {
        this.setState({term})
    };
    onFilterChange = (filter) => {
        this.setState({filter})
    };

    render() {
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    //todoData is part os state
                    todos={visibleItems}
                    //event listener
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    };
};