console.log('May the Node be with you')
const express = require('express')
const app = express()

app.listen(3000, function () {
    console.log('Listening on 3000, starchief')
})


app.get('/', (req,res) => {     //determines what will go on the web page
    res.send('Hello, world')
})
