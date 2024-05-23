/* eslint-disable no-unused-vars */
import "./App.css"
import React, { Fragment } from 'react'
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';


function App() {
  return (
    <center className='todo-container'>
      <AppName />
      <div className="item-container">
        <AddTodo />
        <TodoItems />
      </div>
    </center>

  )
}

export default App;