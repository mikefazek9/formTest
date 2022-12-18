import { useEffect, useState } from 'react';
import './App.css';
import Email from './components/Email'
import Password from './components/Password'
import Name from './components/Name'
import Selection from './components/Selection'

function App() {
  // UseEffect to get Data and passes down to child in selection component
const [data, setData] = useState({})
useEffect(()=>{
  const url = "https://frontend-take-home.fetchrewards.com/form";
  fetch(url)
    .then(res =>{
          if(!res.ok){
          throw Error("Error")
        }
        return res.json()
    })
.then(api =>{
setData(api)
})
    }, [setData])

    // Fetch Post //
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [occupation, setOccupation] = useState("");
  const [state, setState] = useState("");
  const [messages, setMessages] = useState("");

  let handleSubmit =  (e) => {
    // loading setloading then finally 
    e.preventDefault();
    try {
      const res =  fetch("https://frontend-take-home.fetchrewards.com/form", {
        method: "POST",
        mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin' ,

            headers: {
                'content-type': 'application/json'
            },
        body: JSON.stringify( {
            name: name,
            email: email,
            password: password,
            occupation: occupation,
            state: state,
        }),
      });
      let resJson =  res.json();
      if (resJson.status === 201) {
        setName("");
        setEmail("");
        setPassword("")
        setOccupation("")
        setState("")
        setMessages("User created successfully");
      } else {
        setMessages("Some error occured");
      }
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="App">
    <div className="bg-slate-700 h-screen w-full flex flex-col justify-center items-center">
    <h1 className='text-slate-400 font-bold text-xl'>Fetch Form</h1>
  <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center m-4">
        <Name name={name} messages={messages} setName={setName}/>
            <Email email={email} messages={messages} setEmail={setEmail}/>
            <Password password = {password} setPassword={setPassword}/>
            <Selection data={data}  occupation={occupation} setOccupation={setOccupation} state={state} setState={setState} messages={messages}/>
            <button type="submit">Submit</button>
            <div className="message"><span>{messages}</span></div>
  </form>
  </div>
    </div>
  );
}

export default App;
