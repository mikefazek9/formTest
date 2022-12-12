import { useEffect } from 'react';
import './App.css';
import Form from "../src/components/Form"
function App() {

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
})

  return (
    <div className="App">
  <Form/>
      
    </div>
  );
}

export default App;
