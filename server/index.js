const express = require('express');
const mongoose = require('./model/mongoose');
// const { UserDetails } = require('../capture-user-details/src/Components/UserDetails');

var app = express();
const port = 4001

app.use(express.json())

app.post ('/get-names',(req,res)=>{
    const {name , surname, dateOfBirth,grade} = req.body
    if(name == "" || surname == "" || dateOfBirth == "" || grade == ""){
        return res.send(400)
    }
    const UserDetails =  new mongoose({name ,surname, dateOfBirth, grade }) 
            const value =   UserDetails.save()   
            console.log(value, UserDetails)      
            res.send(value)
    })


    app.get('/get-names',(req,res)=>{
        const userDetails = mongoose.find()
        res.send(userDetails)
        console.log(userDetails)
    })

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
    });