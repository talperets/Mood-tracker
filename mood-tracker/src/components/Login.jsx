import React from 'react'

export default function Login() {
  return (
    <div className='login'>
        <h1>Welcome</h1>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
        <button>Submit</button>
        <button>Register</button>
    </div>
  )
}
