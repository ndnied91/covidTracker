//this will be the server that will run the entire backend of the program

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
      app.use(bodyParser.json())


app.get('/' ,  (req,res)=>{
  res.send('test')
})


const PORT = process.env.PORT || 5000

app.listen(PORT , ()=> console.log('running'))
