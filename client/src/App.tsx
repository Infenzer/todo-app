import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './style/style.scss'
import { useRoutes } from './routes'
 
const App: React.FC = () => {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

export default App