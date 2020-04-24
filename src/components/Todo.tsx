import React from 'react'
import { ITodo } from '../redux/reducers/todos'

type TodoProps = ITodo & {
  onDeleteClick: (id: number) => any
  onToggleTodo: (id: number) => any
}

const Todo: React.FC<TodoProps> = (props) => {
  const handleCloseClick = () => {
    props.onDeleteClick(props.id)
  }
  
  const handleToggleClick = () => {
    props.onToggleTodo(props.id)
  }

  return (
    <li className="todo list-group-item">
      <div className="todo-main" onClick={handleToggleClick}>
        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox${props.id}`}
            checked={props.checked}
            onChange={handleToggleClick}
          />
          <label
            className="custom-control-label" 
            htmlFor={`checkbox${props.id}`}
          > {props.text} </label>
        </div>
        <div className="todo-create-data">
          <p>{props.timeCreate}</p>
        </div>
      </div>
      <button type="button" className="close" onClick={handleCloseClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  )
}

export default Todo