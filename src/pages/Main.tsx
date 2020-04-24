import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
import VisibleTodoList from '../containers/VisibleTodoList'

const Main: React.FC = () => {
  return (
    <div className='container'>
      <AddTodo/>
      <VisibleTodoList/>
    </div>
  )
}

export default Main