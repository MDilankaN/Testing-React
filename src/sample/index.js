import { useState } from "react"
import React from 'react'

const Form = () => {
    const [name, setName] = useState('');// useState
    // on click function this will show a alert according to useState empty or not
    const FormSubmit = () =>{
        if(name === ""){
            alert("input Name"); // if empty string this alert will popup
        } else{
            alert("Welcome " + name);// if not empty string this alert will popup
        }
    }
    //returns a form with title, input field and submit button
    return (
        <div>
            <form onSubmit={FormSubmit} data-testid='form-tag'>
                <h3 data-testid='title-field'>Test Input Form</h3>
                <input data-testid='input-field' 
                    type='text' 
                    name='name' 
                    placeholder='Input Name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                <button data-testid='submit-btn' type='submit'>Submit</button>
            </form>
        </div>
)}
export default Form;

