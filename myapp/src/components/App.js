import React, {useState} from 'react';
import './App.css';
import data from '../data/data';
import User from './User';
import Form from './Form';



function App() {
  const [userData, setUserData] = useState(data)
 function handleDataSubmit(newData){
  setUserData([...userData, newData])
 }
  return (
    <div className="App">
      <Form onDataSubmit={handleDataSubmit}/>
      {userData.map(datum =>
        <User key={datum.id} name = {datum.name} email = {datum.email}/>
      )}
  
    </div>
  );
}

export default App;
