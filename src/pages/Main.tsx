import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from '../components/Header'

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className='container'>
        <AddTodo/>
        <VisibleTodoList/>
      </div>
    </React.Fragment>
  )
}

export default Main