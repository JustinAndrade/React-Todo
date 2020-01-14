import React from 'react';

export default function TodoList(props) {
    return (
        <div>
            <h2>My Tasks</h2>
            {props.list.map(todo => {
                return (
                    <p>{todo.task}</p>
                )
            })}
        </div>
    )
}