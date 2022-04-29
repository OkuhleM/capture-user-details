const mongoose = require('mongoose');

// const { Schema } = mongoose;


const UsersSchema = mongoose.Schema({
name:{
    type: 'string',
    required: true
},

surname:{
    type: 'string',
    required: true
},
grade:{
    type: "number",
    required: true
},
date:{
    type:  Date,
    default: new Date
}
})

module.exports = mongoose.model('users' , UsersSchema)