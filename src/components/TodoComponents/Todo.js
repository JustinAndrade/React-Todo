import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
border:1px solid black;
margin: 0 auto;
width: 70%;
padding: 2%;
`


export default function Todo(props) {
    return (
        <div>
            <h1>My Card</h1>
            <CardContainer>
                {props.list.map(item =>
                    <p onClick={props.toggle(item)}>{item.task}</p>
                )}
            </CardContainer>
        </div>
    )
}