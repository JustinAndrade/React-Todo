import React from 'react';
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <div>
            <h2>My Tasks</h2>
            <Todo toggle={props.toggle} list={props.list} />
        </div>
    )
}