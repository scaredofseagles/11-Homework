const express = require('express')
const uuid = require('uuid')
const fs = require('fs')
const app = express()

const PORT = process.env.PORT || 3000

// share html files
app.use(express.static('public'))

// for POST requests
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const dbFile = './db/db.json'

// test data
let noteList = [{id: "0000-0000-0000-0000", title: 'note1', text: 'note1 text'}]

// Endpoints

// 
app.get('/api/notes', function(req, res){
    res.send(noteList)
})

// 
app.post('/api/notes', function(req, res){
    res.send()
})

// 
app.delete('api/notes/:id', function(req, res){
    noteList = []
    fs.writeFileSync(dbFile, JSON.stringify(noteList))
    res.send({message: 'Oops! Deleted all notes.'})
})

// Listener
app.listen(PORT, function(){
    console.log('Server listening on http://localhost:'+ PORT)
})