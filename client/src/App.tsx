import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/Main'
import './style/style.scss'
import AuthPage from './pages/AuthPage'
import RegisterPage from './pages/RegisterPage'
 
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {AuthPage}/>
        <Route path = '/main' component = {Main}/>
        <Route path = '/register' component = {RegisterPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App