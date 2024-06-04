console.log('May the Node be with you')
const express = require('express')
const app = express()

app.listen(3000, function () {
    console.log('Listening on 3000, starchief')
})


app.get('/', (req,res) => {     //determines what will go on the web page
    res.sendFile(__dirname + '/index.html')
})

app.get('/foo', (req,res) => {
    res.sendFile(__dirname + '/foo.html')
})
