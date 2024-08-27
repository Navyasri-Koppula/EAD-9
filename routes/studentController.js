const express = require('express')
const router = express.Router()
const Student = require('../models/studentModel')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await Student.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const student = await Student.findById(req.params.id)
           res.json(student)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const student = new Student
   ({
        name: req.body.name,
        DOB:req.body.DOB,
        semester:req.body.semester,
        skills:req.body.skills,
        cgpa:req.body.cgpa,
        internship_done:req.body.internship_done
    })

    try
   {
        const a1 =  await student.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const student = await Student.findById(req.params.id) 
        student.internship_done = req.body.internship_done
        const a1 = await student.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})

module.exports = router
