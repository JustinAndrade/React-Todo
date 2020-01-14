import React from 'react';

export default function Todo(props) {
    return (
        <div>
            {props.list.map(item =>
                <p>{item.task}</p>
            )}
        </div>
    )
}