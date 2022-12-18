import React, { useState } from "react";
import validator from "validator";


function Email({email, setEmail}) {
    const [message, setMessage] = useState("")
    const validateEmail = (e)=>{
        const email = e.target.value;
        setEmail(email)
        if(validator.isEmail(email)){
            setMessage("Success")
            
        }else{
            setMessage("ooops! Email doesn't look to be vaild...")
        }
    }

  return (
   <div>
        
            <label htmlFor="Email">
                Email
                <input className="mb-2" type="email" placeholder="mike@fetchrewards.com" onChange={(e)=>validateEmail(e)} value={email}/>
            </label>
            <span  >{message}</span>

   </div>
  )
}

export default Email