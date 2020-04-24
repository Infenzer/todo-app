import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import addTodo from '../redux/actions/addTodo'

const AddTodo: React.FC<any> = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    //console.log(value.trim())

    const date = new Date()
    const dateString = `${date.toDateString()}, (${date.toLocaleTimeString()})`

    dispatch(addTodo(value, dateString))
    setValue('')
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