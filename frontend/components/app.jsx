import React from 'react';
import Connect from './todos/todo_list_container.jsx';



class App extends React.Component{
  render() {
    return (
      <div>
        <h1> This is app </h1>
        <Connect />
      </div>

    );
  }
}


export default App;
