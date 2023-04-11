const express = require('express')
const hbs = require('hbs');
const app = express()
require('dotenv').config()
const port = process.env.PORT



// hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Middelware (contendio estático)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Italo',
        titulo: 'The best'
    })
})

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        nombre: 'Italo',
        titulo: 'The best'
    })
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: 'Italo',
        titulo: 'The best'
    })
})

// app.get('/hola-mundo', function (req, res) {
//     res.send('Hello mundo')
// })

app.get('*', (req, res) => {
    // res.sendFile(__dirname + '/public/404.html')
    res.render('404')
})
// app.get('*', function (req, res) {
//     res.send('404 | page not found')
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
