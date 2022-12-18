import { useState } from "react"
import React from 'react'

function Name({name, setName}) {
  const [message, setMessage]=useState("")

  const validateName = (e)=>{
    const userName = e.target.value;

    if(userName !== ""){
      setMessage("success")
      setName(userName)
    }else{
      setMessage("Please Enter name...")
    }
  }

  return (
    <div>
    <label htmlFor="name">
        Name
        <input
        required
        className="mb-2"
         type="text"
         value={name}
             placeholder="Your Name"
         onChange={validateName}/>
    </label>
    <span>{message}</span>
    </div>
  )
}

export default Name;