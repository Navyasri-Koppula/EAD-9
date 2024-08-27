const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    DOB:
    {
        type:Date,
        required:true
    },
    semester: 
    {
        type: String,
        required: true
    },
    skills: 
   {
        type: Array
    },
    cgpa:
    {
        type: Number,
        required: true
    },
    internship_done:
    {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Student',studentSchema)
