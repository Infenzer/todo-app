import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="header">
      <a className="logo" href="#">
        <img className="logo-img" src="/img/list-ul-solid.svg"/>
        <h2 className="logo-text">Todo List</h2>
      </a>
    </div>
  )
}

export default Header