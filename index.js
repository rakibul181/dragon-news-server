const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000
app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News APi running')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news',(req, res)=>{
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selected_news = news.find(n => n._id === id);
    res.send(selected_news)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    if (id === '08') {
        res.send(news)
    }
    else {
        const filteredCategory = news.filter(n => n.category_id === id)
        res.send(filteredCategory)
    }
    // console.log(filteredCategory);
})
app.listen(port, () => {
    console.log('Dragon News Server Running');
})