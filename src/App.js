import React from 'react';

const arr = [
  {
    task: 'Build a React App',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Build a React App',
    id: Date.now() + 1,
    completed: false
  },
  {
    task: 'Build a React App',
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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
