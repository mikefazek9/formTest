import { useEffect, useState } from 'react';
import './App.css';
import Email from './components/Email'
import Name from './components/Name'
import Selection from './components/Selection'

function App() {

  const user={
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}

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

  

  return (
    <div className="App">
  <form>
        <Name/>
            <Email/>
            <Selection data={data} user={user}/>
  </form>
      
    </div>
  );
}

export default App;
