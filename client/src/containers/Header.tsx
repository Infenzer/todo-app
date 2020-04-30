import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/fetchAuth'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div className="header">
      <a className="logo" href="#">
        <img className="logo-img" src="/img/list-ul-solid.svg"/>
        <h2 className="logo-text">Todo List</h2>
      </a>
      <button onClick={handleClick} type="button" className="btn btn-outline-dark">Выйти</button>
    </div>
  )
}

export default Header