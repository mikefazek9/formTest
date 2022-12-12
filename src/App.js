import { useEffect, useState } from 'react';
import './App.css';
import Form from "../src/components/Form"
function App() {
  const user={
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
const [career, setCareer]= useState([])

    useEffect(()=>{
          const url = "https://frontend-take-home.fetchrewards.com/form";
              fetch(url)
                 .then(res =>{
                      if(!res.ok){
                      throw Error("Error")
                    }
                  return res.json();
                })
          .then(data =>{
            console.log(data)
        })
    }, [career, setCareer])

  return (
    <div className="App">
  <Form user={user} careers ={career} setCareer={setCareer}/>
      
    </div>
  );
}

export default App;
