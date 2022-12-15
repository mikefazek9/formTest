import { useEffect, useState } from 'react';
import './App.css';
import Email from './components/Email'
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
  const [occupations, setOccupation] = useState("");
  const [state, setState] = useState("");
  const [messages, setMessages] = useState("");

  let handleSubmit =  (e) => {
    e.preventDefault();
    try {
      let res =  fetch("https://frontend-take-home.fetchrewards.com/form", {
        method: "POST",
        body: JSON.stringify( {
            name: "",
            email:"",
            occupation: "",
            state: "",
        }),
      });
      let resJson =  res.json();
      if (resJson.status === 200) {
        setName("");
        setEmail("");
        setOccupation("")
        setState("")
        setMessages("User created successfully");
      } else {
        setMessages("Some error occured");
      }
    } catch (err) {
      console.log(err)
      setMessages("bad POST response")
    }
  };

  return (
    <div className="App">
  <form onSubmit={handleSubmit}>
        <Name name={name} messages={messages}/>
            <Email email={email} messages={messages}/>
            <Selection data={data}  occupations={occupations} state={state} messages={messages}/>
            <button type="submit">Submit</button>
            <div className="message"><span>{messages}</span></div>
  </form>
  
    </div>
  );
}

export default App;
