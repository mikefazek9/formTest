import React, { useState } from 'react'
import validator from 'validator'

function Email({ email, setEmail }) {
  const [message, setMessage] = useState('')
  const validateEmail = (e) => {
    const email = e.target.value
    setEmail(email)
    if (validator.isEmail(email)) {
      setMessage('Valid Email')
    } else {
      setMessage("ooops! Email doesn't look to be vaild...")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="Email">
        <input
          className="mb-2 outline-0 rounded"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => validateEmail(e)}
          value={email}
        />
      </label>

      <span className="w-44 text-center mb-2 text-black-100 bg-green-400 rounded text-xs flex flex-row items-center justify-center">
        {message}
      </span>
    </div>
  )
}

export default Email
