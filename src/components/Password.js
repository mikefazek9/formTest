import React, {useState} from "react"

function Password({password, setPassword}) {
   
    const [pswMessage, setPswMessage] = useState("")
	const validatePassword = (e)=>{
        const passwordType = e.target.value;
        setPassword(passwordType)
        if( passwordType !=="" && passwordType.length >= 8){
            setPswMessage("Valid password")
            setPassword(passwordType)
    }else{
        setPswMessage("invalid password")
    }
}

  return (
    <div>
        <label htmlFor="password">password:
            <input type="password" placeholder="password" value={password} onChange={validatePassword} />
            <span>{pswMessage}</span>
        </label>
    </div>
  )
}

export default Password