const express = require('express')
const uuid = require('uuid')
const fs = require('fs')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000

// share html files
app.use(express.static('public'))

// for POST requests
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const dbFile = './db/db.json'

// test data
let noteList = fs.existsSync(dbFile) ? JSON.parse(fs.readFileSync(dbFile)) : 
[{id: "0000-0000-0000-0000", title: 'note1', text: 'note1 text'}]


// Endpoints

// html routes

app.get('/notes', function(req, res){
    res.sendFile(__dirname + "/public/notes.html")
})

app.get('*', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

// read db.json file and return all saved notes
app.get('/api/notes', function(req, res){
    //console.log(noteList)
    res.json(noteList)
})

// add a new notes to db.json
app.post('/api/notes', function(req, res){
    res.send()
})

// should delete note based on id
app.delete('api/notes/:id', function(req, res){
    noteList = []
    //fs.writeFileSync(dbFile, JSON.stringify(noteList))
    res.send({message: 'Oops! Deleted all notes.'})
})

// Listener
app.listen(PORT, function(){
    console.log('Server listening on http://localhost:'+ PORT)
})