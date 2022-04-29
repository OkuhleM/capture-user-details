import React from 'react';
import { useState } from 'react'

function UserDetails() {

const [inputValue, setInputValue] = useState({"name":"","surname":"","date of birth":"","grade":""})
const [usersList, setUsers] = useState([])
console.log('inputValue', inputValue)

const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...usersList, inputValue])
   
  
}
console.log("submit",usersList)



const handleChange = (e) => {
    setInputValue({...inputValue,[e.target.name]: e.target.value})
    // setFormInfo({ ...formInfo, [e.target.name]: e.target.value })

}

  return (
    <div>
        <form>
            <input type="text" placeholder="Name" value={inputValue.name} 
           onChange={handleChange}  name="name"/>
            <input type="text" placeholder="Surname" value={inputValue.surname} 
            name='surname' onChange={handleChange}/>
            <input type="date" placeholder="Date Of Birth" value={inputValue.dateOfBirth} 
            name='dateOfBirth' onChange={handleChange}/>
            <input type="number" placeholder="Grade" name='grade'
            value={inputValue.grade} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>

        <div>
                <ul>{usersList.map((users, index) => {
                    return (
                        <div key={index} className="votersList">
                            <p>{users.name}</p>
                            <p>{users.surname}</p>
                            <p>{users.dateOfBirth}</p>
                            <p>{users.grade}</p>

                            {/* <p><Delete onClick={()=>handleDelete()} /></p> */}
                            
                        </div>

                    )
                })}</ul>
            </div>
    </div>
  )
}

export default UserDetails