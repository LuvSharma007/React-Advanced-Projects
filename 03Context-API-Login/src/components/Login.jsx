import React, {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username....'  
        className='border-2'
        />
        {" "}
        <input type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password....' 
        className='border-2 m-4'
        />
        <button onClick={handleSubmit} className='border-2 bg-blue-400 m-4' >Submit</button>
    </div>
  )
}

export default Login