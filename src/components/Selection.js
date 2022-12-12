import React from 'react'

function Selection(career) {
  return (
    <div>
    {/* career selection */}
    <label htmlFor="occupation">Select Occupation:</label>
    {career.map(career=><select>{career.occupations}</select>)}

    {/* state selection */}
    <label htmlFor="state">Select State:</label>
    <select></select>
    </div>
  )
}

export default Selection