const express = require('express');
const exhbs = require('express-handlebars');

const studentRouter = require('./routes/student')
const staffRouter = require('./routes/staf')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.use('/registers', studentRouter)
app.use('/register_staf', staffRouter)
app.engine('handlebars', exhbs({defaultLayout:'main', partialsDir:"views/partials"}))
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    res.render('home', {
        title: 'Home Page'
    })
})

app.get('/registers', (req,res)=>{
    res.render('register_student', {
      title: 'student page'
    })
})

app.get('/detailss', (req,res)=>{
    res.render('student_details', {
      title: 'student page'
    })
})

app.get('/registerstaf', (req,res)=>{
    res.render('register_student', {
      title: 'Stafs page'
    })
})

app.listen(8080, (er)=>{
    if(er) throw  er;
   console.log('Server running on port: 8080')
})