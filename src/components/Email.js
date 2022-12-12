import React, { useState } from "react";
import validator from "validator";


function Email() {
    const [message, setMessage] = useState("")
    const validateEmail = (e)=>{
        let email = e.target.value;

        if(validator.isEmail(email)){
            setMessage("oh YEAH! Great EMAIL!")
        }else{
            setMessage("ooops! Email doesn't look to be vaild...")
        }
    }

  return (
   <div>
        
            <label htmlFor="Email">
                Email
                <input type="email" placeholder="mike@fetchrewards.com" onChange={(e)=>validateEmail(e)} />
            </label>
            <span  >{message}</span>

   </div>
  )
}

export default Email