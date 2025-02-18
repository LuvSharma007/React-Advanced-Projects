import React from 'react'
import ContextProvider from "./context/ContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <ContextProvider>
        <Login/>
        <Profile/>
    </ContextProvider>
  )
}

export default App