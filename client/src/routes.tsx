import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Main from './pages/Main'
import AuthPage from './pages/AuthPage'
import RegisterPage from './pages/RegisterPage'

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path = '/' component = {Main}/>
        <Redirect to = '/'/>
      </Switch>
    )
  }

  return(
    <Switch>
      <Route exact path = '/login' component = {AuthPage}/>
      <Route exact path = '/register' component = {RegisterPage}/>
      <Redirect to = '/login'/>
    </Switch>
  )
}