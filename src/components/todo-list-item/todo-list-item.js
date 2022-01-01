import React from 'react';
import {Component} from "react";

import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        // console.log(`Done: ${this.props.label}`);
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };
    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };

    render() {
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';//must be a space
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={this.onLabelClick}>
                   {label}
                </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"//add event listener onClick
              onClick={onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
    </span>
        );
    };
}
