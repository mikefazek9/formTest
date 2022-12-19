import React from 'react'

function Selection({ data, occupation, state, setState, setOccupation }) {
  const postSelect = (e) => {
    const optionsValue = e.target.value || null
    setOccupation(optionsValue)
  }

  const postState = (e) => {
    const stateValue = e.target.value || null
    setState(stateValue)
  }
  return (
    <div className="mt-2 flex flex-row outline-none">
      {/* career selection */}
      <label htmlFor="occupation" className="pr-8">
        <span className="text-neutral-100">Select Occupation:</span>
        <br></br>
        {data.occupations ? (
          <select
            required
            value={occupation}
            onChange={postSelect || null}
            className="outline-none rounded"
          >
            <option value="">{`--`}</option>
            {data.occupations.map((occupation) => {
              return (
                <option key={occupation} value={occupation}>
                  {occupation}
                </option>
              )
            })}
          </select>
        ) : null}
      </label>
      {/* state selection */}
      <label htmlFor="state" className="outline-none">
        <span className="text-neutral-100">Select State:</span>
        <br></br>

        {data.states ? (
          <select
            required
            value={state.name}
            onChange={postState || null}
            className="outline-none rounded"
          >
            <option value="">{`--`}</option>
            {data.states.map((state) => {
              return (
                <option key={state} value={state.name}>
                  {state.name}
                </option>
              )
            })}
          </select>
        ) : null}
      </label>
    </div>
  )
}

export default Selection
