const express = require('express')
const app = express()
// let ejs = require('ejs');

app.set('view engine','ejs')
// app.set('views','template/views')
app.get('/',(req,res)=>{
    // res.send('<h1>Learing Nodejs </h1>')

    const post = {
        title:'This is Dummy POST',
        author:'Md Ruhin Mia',
        isPublished:3,
    

    }

    const posts =[
        {title:'post 01',body:'This post1 this is postThis post this is post'},
        {title:'post 02',body:'This post2 this is postThis post this is post'},
        {title:'post 03',body:'This post3 this is postThis post this is post'},
        {title:'post 04',body:'This post4 this is postThis post this is post'},
    ]
    res.render('pages/index',{title:'hello EJS Welcome',msg:'I  am Learning EJS',post,posts})
})

app.get('/about',(req,res)=>{
    res.render('pages/about',{title:'About page'})
})

app.get('/contact',(req,res)=>{
    res.render('pages/contact',{title:'Contact page'})
})

const PORT = process.env.PORT || 8081
app.listen(PORT,()=>{
    console.log(`Server Running at  ${PORT}`)
})