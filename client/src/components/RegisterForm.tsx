import React, { useState } from 'react'
import { RegisterFormProps } from '../containers/SetRegister'

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()

    props.onRegisterClick(email, password)

    setEmail('')
    setPassword('')
  }

  return(
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
        <a className="underlineHover" href="/login">Уже есть аккаунт?</a>
      </div>
    </div>
  )
}

export default RegisterForm