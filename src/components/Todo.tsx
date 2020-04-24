import React from 'react'
import { ITodo } from '../redux/reducers/todos'

type TodoProps = ITodo

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <li className="todo list-group-item">
      <div className="todo-main">
        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox${props.id}`}
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
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  )
}

export default Todo