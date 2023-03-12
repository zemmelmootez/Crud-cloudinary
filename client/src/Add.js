import axios from 'axios'
import React, { useRef } from 'react'

function Add() {
    
    const add=()=>{
        axios.post("http://localhost:8000/api/add",{name:R1.current.value})
    }
    const R1=useRef()
  return (
    <div>

        <input type={"text"} placeholder="enter name of user" ref={R1}></input>
        <button onClick={add}>add new user</button>
      
    </div>
  )
}

export default Add
