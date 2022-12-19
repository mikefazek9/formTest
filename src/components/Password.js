import React, { useState } from 'react'

function Password({ password, setPassword }) {
  const [pswMessage, setPswMessage] = useState('')
  const validatePassword = (e) => {
    const passwordType = e.target.value
    setPassword(passwordType)
    if (passwordType !== ' ' && passwordType.length >= 8) {
      setPswMessage('Valid password')
      setPassword(passwordType)
    } else {
      setPswMessage('invalid password')
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <label
        htmlFor="password"
        className="flex flex-col justify-center items-center"
      >
        <input
          className="rounded outline-none w-44"
          type="password"
          placeholder="password"
          value={password}
          onChange={validatePassword}
        />
        <span className="w-44 text-center mt-2 text-black-100 bg-green-400 rounded text-xs flex flex-row items-center justify-center">
          {pswMessage}
        </span>
      </label>
    </div>
  )
}

export default Password
