const express = require('express');
const mongoose = require('./model/mongoose');
const dotenv = require('dotenv')
dotenv.config()

var app = express();
const port = 4001
mongoose.connect("mongodb+srv://okuhle22:Lindokuhle22@cluster0.neoue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
app.use(express.json())

app.post ('/get-names',async (req,res)=>{
    try{
    const {name , surname, dateOfBirth,grade} = req.body
    if(name == "" || surname == "" || dateOfBirth == "" || grade == ""){
        return res.send(400)
    }
    const UserDetails =  new mongoose({name ,surname, dateOfBirth, grade }) 
            console.log(UserDetails)      
            res.send(UserDetails)
}catch(err){
    console.log(err)
    res.send(err)
}
})

    app.get('/get-names_id',(req,res)=>{
        const userDetails = mongoose.find()
        res.send(userDetails)
        console.log(userDetails)
    })

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
    });