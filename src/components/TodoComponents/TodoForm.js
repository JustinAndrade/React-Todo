import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: ''
        }
    }

    changeHandler = e => {
        this.setState({ taskText: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addTodo(this.state.taskText)
    }
    render() {
        console.log(this.props)

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' placeholder='New Task' value={this.state.taskText} onChange={this.changeHandler} />
                    <button type='submit'>Add Task</button>
                </form>
            </div>
        )
    }
}

export default TodoForm