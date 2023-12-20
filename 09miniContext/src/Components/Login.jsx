import React ,{useState,useContext}from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function hendleSubmit(e){
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Lofin</h2>
        <input type="text"
         placeholder='username'
         value={username}
         
         onChange={(e)=> setUsername(e.target.value)}
        />
        {" "}
        <input type="text" 
        placeholder='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        {" "}
        <button onClick={hendleSubmit}>Submit</button>
    </div>
  )
}

export default Login