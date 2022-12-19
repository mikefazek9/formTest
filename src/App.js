import { useEffect, useState } from 'react'
import './App.css'
import Email from './components/Email'
import Password from './components/Password'
import Name from './components/Name'
import Selection from './components/Selection'
import validator from 'validator'

function App() {
  // UseEffect to get Data and passes down to child in selection component
  const [data, setData] = useState({})
  useEffect(() => {
    const url = 'https://frontend-take-home.fetchrewards.com/form'
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Error')
        }
        return res.json()
      })
      .then((api) => {
        setData(api)
      })
  }, [setData])

  // Fetch Post //
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [occupation, setOccupation] = useState('')
  const [state, setState] = useState('')
  const [message, setMessage] = useState('')

  const isValid =
    name !== '' &&
    validator.isEmail(email) &&
    password.length >= 8 &&
    occupation !== ' ' &&
    state !== ''
  const handleSubmit = async function (e) {
    e.preventDefault()
    if (isValid) {
      try {
        const response = fetch(
          'https://frontend-take-home.fetchrewards.com/form',
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',

            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
              occupation: occupation,
              state: state,
            }),
          },
        )

        const awaitResponse = await response

        if (awaitResponse.status === 201) {
          setName('')
          setEmail('')
          setPassword('')
          setOccupation('')
          setState('')
          setMessage('User created successfully')
        } else {
          setMessage('Some error occured')
        }
      } catch (err) {
        setMessage('Oops... something went wrong on our end.')
      }
    } else {
      setMessage('Please Check all fields...')
    }
  }

  return (
    <div className="App">
      <div className="bg-slate-700 h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-slate-400 font-bold text-xl">Fetch Form</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center m-4"
        >
          <Name name={name} setName={setName} />
          <Email email={email} setEmail={setEmail} />
          <Password password={password} setPassword={setPassword} />
          <Selection
            data={data}
            occupation={occupation}
            setOccupation={setOccupation}
            state={state}
            setState={setState}
            message={message}
          />
          <button
            type="submit"
            className="rounded-full bg-amber-500 text-neutral-100 font-bold w-24 mt-4 hover:bg-amber-400"
          >
            Submit
          </button>
          <div className="message">
            <span className="w-64 text-center mt-4 text-black-100 font-semibold bg-green-400 rounded text-lg flex flex-row items-center justify-center">
              {message}
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
