import React from 'react'

function Selection({data, occupations, state}) {
console.log(data) // returns empty object
  return (
    <div>
    {/* career selection */}
    <label htmlFor="occupation">Select Occupation:
    {data.occupations ?
    <select value={occupations.occupation}>
        {data.occupations.map(( occupation)=>{
            
                return(
                    <option key={occupation} 
                    value={occupation}>
                    {occupation}
                    </option>
                )
            
        })}
    
    </select>
    :null}
    </label>
    {/* state selection */}
    <label htmlFor="state">Select State:</label>
    {data.occupations ?
    <select value={state.state}>
        {data.states.map(( state)=>{
            
                return(
                    <option key={state} 
                    value={state}>
                    {state.name}
                    </option>
                )
            
        })}
    </select>
    :null}
    </div>
  )
}

export default Selection