import axios from 'axios'
import React, { useRef } from 'react'

function Update() {
    const update=()=>{
        axios.post("http://localhost:8000/api/update",{name:R1.current.value,newName:R2.current.value})
    }
    const R1=useRef()
    const R2=useRef()
  return (
    <div>

        <input type={"text"} placeholder="enter name of user" ref={R1}></input>
        <input type={"text"} placeholder="enter new name of user" ref={R2}></input>
        <button onClick={update}>update user</button>
      
    </div>
  )
}

export default Update
