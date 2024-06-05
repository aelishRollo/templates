
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function () {
    console.log('Listening on 3000, starchief')
})


app.get('/', (req,res) => {     //determines what will go on the web page
    res.sendFile(__dirname + '/index.html')
})

app.get('/foo', (req,res) => {      //serves foo.html at the endpoint /foo
    res.sendFile(__dirname + '/foo.html')
})

app.post('/quotes', (req,res) => {
    console.log(req.body) // logs the value from the form in the input, as an object. It's req.body
})
