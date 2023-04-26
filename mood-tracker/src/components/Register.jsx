import React from 'react'

export default function Register() {
  return (
    <div className='login'>
        <h1>Welcome</h1>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <button>Register</button>
        <button>Log-in</button>
    </div>
  )
}
