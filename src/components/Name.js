import { useState } from "react"
import React from 'react'

function Name({name}) {
  const [message, setMessage]=useState("")

  const ValidateName = (e)=>{
    let userName = e.target.value;

    if(userName !== ""){
      setMessage("success")
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
         type="text"
         value={name.name}
             placeholder="Your Name"
         onChange={ValidateName}/>
    </label>
    <span>{message}</span>
    </div>
  )
}

export default Name;