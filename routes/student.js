const express = require('express');
const Students = require('../model/Student')
const hashPassword = require('../hash')
const router = express.Router();


router.post('/', (req,res)=>{
    const { firstName, lastName, email, password, comfirmpassword } = req.body
  const hashed = hashPassword.getHashPassword(password)



     if( password === comfirmpassword){
         if(Students.find((student =>student.email === email ))){
             res.render('register_student', {
                 message:'student exists',
                messageClass: 'alert-warning'
             })
         }else{
            Students.push({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashed
            })
            res.render('register_student',{
               message: 'Student Successfully Registered',
               messageClass: 'alert-success'
            })
            console.log(JSON.stringify(Students))
        }
     }else{
        res.render('register_student',{
            message: 'password not matched',
            messageClass: 'alert-success'
         })
     }
});


module.exports = router;