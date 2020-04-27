import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import addTodo from '../redux/actions/addTodo'
import showAlert from '../redux/actions/showAlert'
import hideAlert from '../redux/actions/hideAlert'

const AddTodo: React.FC<any> = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const date = new Date()
    const dateString = `${date.toDateString()}, (${date.toLocaleTimeString()})`

    if (value.trim() === '') {
      dispatch(showAlert('WARNING', 'Введите название заметки.'))
    } else {
      dispatch(addTodo(value, dateString))
      setValue('')
      dispatch(showAlert('SUCCESS', 'Заметка создана'))
    }

    setTimeout(() => {
      dispatch(hideAlert())
    }, 2000);
  }

  return(
    <form className="form add-todo">
      <div className="input-wrapper">
        <input 
          className="form-control form-control-lg" 
          type="text" 
          placeholder="Введите название заметки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="btn-wrapper">
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={(e) => handleClick(e)}
        >Создать</button>
      </div>
    </form>
  )
}

export default AddTodo