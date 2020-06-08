const express = require('express');
const stafs = require('../model/Staf')
const hashPassword = require('../hash')
const router = express.Router();


router.post('/', (req,res)=>{
    const { firstName, lastName, email, password, comfirmpassword } = req.body
  const hashed = hashPassword.getHashPassword(password)



     if( password === comfirmpassword){
         if(stafs.find((staf =>staf.email === email ))){
             res.render('register_staf', {
                 message:'student exists',
                messageClass: 'alert-warning'
             })
         }else{
            stafs.push({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashed
            })
            res.render('register_staf',{
               message: 'Student Successfully Registered',
               messageClass: 'alert-success'
            })
            console.log(JSON.stringify(stafs))
        }
     }else{
        res.render('register_staf',{
            message: 'password not matched',
            messageClass: 'alert-success'
         })
     }
});


module.exports = router;