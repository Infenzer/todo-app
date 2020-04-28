import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    axios.post('/api/auth/login', {
      email,
      password
    })
  }
  return (
    <div className="auth-page wrapper">
      <div id="formContent">
        <h2>Авторизация</h2>
        <form>
          <input 
            type="email"
            placeholder="Email" 
            onChange={e => setEmail(e.target.value)} 
            value={email}
          />
          <input 
            type="password" 
            placeholder="Пароль" 
            onChange={e => setPassword(e.target.value)} 
            value={password}
          />
          <input 
            type="submit" 
            className="btn btn-primary"
            value="Войти" 
            onClick = {(e) => handleClick(e)}
          />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="/register">Создать аккаунт</a>
        </div>
      </div>
    </div>
  )
}

export default AuthPage