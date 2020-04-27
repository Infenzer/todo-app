import React from 'react'

const AuthPage: React.FC = () => {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h2>Авторизация</h2>
        </div>
        <form>
          <input type="email" id="login" className="fadeIn second" name="login" placeholder="Email"/>
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="Пароль"/>
          <input type="submit" className="fadeIn fourth" value="Log In"/>
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Забыли пароль?</a>
        </div>
      </div>
    </div>
  )
}

export default AuthPage