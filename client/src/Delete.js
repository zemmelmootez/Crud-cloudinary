import axios from 'axios'
import React, { useRef } from 'react'

function Delete() {
    const deletee=()=>{
        axios.post("http://localhost:8000/api/delete",{name:R1.current.value})
        axios.post()
    }
    const R1=useRef()

  return (
    <div>

        <input type={"text"} placeholder="enter name of user" ref={R1}></input>
       
        <button onClick={deletee}>delete user</button>
      
    </div>
  )
}

export default Delete
