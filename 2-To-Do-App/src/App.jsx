import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

const App = () => {

  [todos, setTodos] = useState([]);
  
  return (
    <>
    <div>
      <h1  className='header'>To-Do-App</h1>

      <TodoList/>
      <TodoCreate/>
    </div>
    </>
  )
}

export default App