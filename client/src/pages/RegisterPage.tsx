import React, { useState } from 'react'
import axios from 'axios'

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    axios.post('/api/auth/register', {
      email,
      password
    }).then(res => {
      console.log(res)
    }).catch(res => {
      console.log(res)
    })

    setEmail('')
    setPassword('')
  }

  return(
    <div className="wrapper register-page">
      <div id="formContent">
        <h2>Регистрация</h2>
        <form>
          <input 
            type="email"
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Пароль" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Повторите пароль" 
          />
          <input 
            type="submit" 
            className="btn btn-primary"
            value="Регистрация" 
            onClick={(e) => handleClick(e)}
          />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="/">Уже есть аккаунт?</a>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage