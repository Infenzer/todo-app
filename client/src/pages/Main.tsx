import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from '../components/Header'
import VisibleAlert from '../containers/VisibleAlert'

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className='container main'>
        <VisibleAlert/>
        <AddTodo/>
        <VisibleTodoList/>
      </div>
    </React.Fragment>
  )
}

export default Main