import React, {useState} from 'react'
import axios from 'axios'

function Inputfield() {

  const[files,setFiles] = useState({file:''})

  const inputfile = (e) => {

  // let data = e.target.files[0]
    setFiles(e.target.files[0])
  }

    const uploadClicked = async (e) => {
      
      const formdata = new FormData()
      console.log(files)
      formdata.append("file",files)
       console.log(formdata)
        console.log(formdata.get("file"))
        const options = {
          method:"POST",
          headers:{
            "Content-Type":"Application/Json"
          },
          body:JSON.stringify(formdata)
        }
        const response = await axios.post('http://localhost:4012',formdata)
        console.log(response)
    }
// console.log(files)
  return (
    <>
    <input onChange = {inputfile} id = "file" type = "file" accept = "image/*" placeholder='select a file' />
    <button onClick = {uploadClicked }>upload btn</button>
    </>
  )
}

export default Inputfield