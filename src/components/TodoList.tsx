import React from 'react'
import Todo from './Todo'
import { TodoListProps } from '../containers/VisibleTodoList'

const TodoList: React.FC<TodoListProps> = (props) => {
  return(
    <div className="todo-list-container">
      <ul className="list-group">
        {props.todos.map(todo => {
          return (<Todo
            key={todo.id} 
            {...todo} 
            onDeleteClick={props.deleteTodo}
            onToggleTodo={props.toggleTodo}
          />)
        })}
      </ul>
    </div>
  )
}

export default TodoList