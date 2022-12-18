import React from 'react'

function Selection({data, occupation, state, setState, setOccupation}) {
  const postSelect = (e)=>{
    const optionsValue = e.target.value;
    setOccupation(optionsValue)
  }

  const postState=(e)=>{
    const stateValue = e.target.value;
    setState(stateValue)
  }
  return (
    <div>
    {/* career selection */}
    <label htmlFor="occupation">Select Occupation:
    {data.occupations ?
    <select value={occupation} onChange={postSelect}>
        {data.occupations.map(( occupation)=>{
            
                return(
                    <option key={occupation} 
                    value={occupation} >
                    {occupation}
                    </option>
                )
            
        })}
    
    </select>
    :null}
    </label>
    {/* state selection */}
    <label htmlFor="state">Select State:</label>
    {data.states ?
    <select value={state.name} onChange={postState}>
        {data.states.map((state)=>{
            
                return(
                    <option key={state} 
                    value={state.name}>
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