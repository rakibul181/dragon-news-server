const express = require('express')
const app = express()
const port = process.env.PORT || 5000


const category = require('./data/categories.json')

app.get('/',(req, res)=>{
    res.send('News APi running')
});

app.get('category',(req,res)=>{
    res.send
})

app.listen(port, ()=>{
    console.log('Dragon News Server Running');
})