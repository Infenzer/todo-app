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
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={props.checked}
          onChange={() => {}}
        />
        <p>{props.text}</p>
        <div className="todo-create-date">
          <p>{props.timeCreate}</p>
        </div>
      </div>
      <a className="link-close" href="#" onClick={handleCloseClick}>
        <img className="link-img-close" src="./img/trash-solid.svg"/>
      </a>
    </li>
  )
}

export default Todo