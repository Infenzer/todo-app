import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import addTodo from '../redux/actions/addTodo'

const AddTodo: React.FC<any> = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    dispatch(addTodo(value))
    setValue('')
  }

  return(
    <form className="form-row">
      <div className="col">
        <input 
          className="form-control form-control-lg" 
          type="text" 
          placeholder="Введите название заметки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="col-2 d-flex align-items-center">
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={(e) => handleClick(e)}
        >Создать</button>
      </div>
    </form>
  )
}

const connector = connect(null)

export default connector(AddTodo)