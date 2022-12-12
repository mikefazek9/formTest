import React from 'react'
import Email from './Email'
import Name from './Name'
import Selection from './Selection'
function Form() {
    

  return (
    <div>
        <form>
        <Name/>
            <Email/>
            <Selection/>
        </form>
    </div>
  )
}

export default Form