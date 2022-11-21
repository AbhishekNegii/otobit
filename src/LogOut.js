import React from 'react'
import { useHistory } from 'react-router-dom'
import "./LogOut.css"

const LogOut = () => {
    const history=useHistory()
    const logoutHandler=()=>{
        localStorage.removeItem('userData')
        history.replace('/')
    }
  return (
    <div className='bn3637'>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default LogOut
