import { useState } from 'react'
import React from 'react'

function Name({ name, setName }) {
  const [message, setMessage] = useState('')

  const validateName = (e) => {
    const userName = e.target.value

    if (userName !== '') {
      setMessage('Valid Name')
      setName(userName)
    } else {
      setMessage('Please Enter name...')
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="name">
        <input
          className="mb-2 rounded outline-none"
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={validateName}
        />
      </label>

      <span className="w-44 text-center mb-2 text-black-100 bg-green-400 rounded text-xs flex flex-row items-center justify-center">
        {message}
      </span>
    </div>
  )
}

export default Name
