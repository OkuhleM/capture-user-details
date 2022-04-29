import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function UserDetails() {

const [inputValue, setInputValue] = useState({"name":"","surname":"","date of birth":"","grade":""})
const [usersList, setUsers] = useState([])

const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...usersList, inputValue])
   
  
}



const handleChange = (e) => {
    setInputValue({...inputValue,[e.target.name]: e.target.value})

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
                            <p>{users.name}</p><br/>
                            <p>{users.surname}</p><br/>
                            <p>{users.dateOfBirth}</p><br/>
                            <p>{users.grade}</p><br/>

                            
                        </div>

                    )
                })}</ul>
            </div>
            <Link to='listwithnames'><button>See details</button> </Link>

    </div>
  )
}

export default UserDetails