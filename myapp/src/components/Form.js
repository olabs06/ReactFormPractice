import React, {useState} from 'react';
import {nanoid} from 'nanoid';



function Form({onDataSubmit}) {
  const [formData, setFormData] = useState({id:nanoid(5), name:"", email:""})
  function handleInputChange (event){
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]:value})
  }
  const newData = {
    id: nanoid(5),
    name: formData.name,
    email: formData.email,
  }

  function handleSubmit(event){
    event.preventDefault()
    onDataSubmit(newData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name = "name" value={formData.name} onChange={handleInputChange}/></label>
        <label>Email: <input type="text" name = "email" value={formData.email} onChange={handleInputChange}/></label>
        <button type="submit">Submit</button>
      </form>     
    </div>
  );
}

export default Form;