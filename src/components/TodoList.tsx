import React from 'react'
import { TodosState } from '../redux/reducers/todos'
import Todo from './Todo'

interface TodoListProps {
  todos: TodosState
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return(
    <div className="todo-list-container">
      <ul className="list-group">
        {props.todos.map(todo => <Todo key={todo.id} {...todo}/>)}
      </ul>
    </div>
  )
}

export default TodoList