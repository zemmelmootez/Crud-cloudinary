import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Consult() {
    const [users,setUsers]=useState()
    const [images, setImages] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/user").then(res=>setUsers(res.data))
    })
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
   
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      axios.post('http://localhost:8000/upload', formData).then((response) => {
        console.log(response);
      });
    };
    useEffect(() => {
      fetch('http://localhost:8000/images')
        .then((response) => response.json())
        .then((images) => setImages(images))
        .catch((error) => console.error(error));
    }, []);
  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>

      {users?users.map(e=><h1>{e.name}</h1>):"loading"}
      {images.map((image) => (
  <img key={image.public_id} src={image.url} alt={image.public_id} />
))}
    </div>
  )
}

export default Consult
