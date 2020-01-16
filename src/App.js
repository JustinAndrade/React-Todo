import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const arr = [
  {
    task: 'Build a React App',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Create Todo List',
    id: Date.now() + 1,
    completed: false
  },
  {
    task: 'Finish MVP',
    id: Date.now() + 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: arr
    }
  }

  addTodo = (newTodo) => {
    const newTask = {
      task: newTodo,
      id: Date.now(),
      completed: false
    }
    this.setState({ todoList: [...this.state.todoList, newTask] })
  }

  toggleTask = (task) => {
    task.completed = !task.completed
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggle={this.toggleTask} list={this.state.todoList} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
