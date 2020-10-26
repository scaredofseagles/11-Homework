const express = require('express')
const uuid = require('uuid')
const fs = require('fs')
const app = express()
const path = require('path')
//import { v4 as uuidv4 } from uuid

const PORT = process.env.PORT || 3000

// share html files
app.use(express.static('public'))

// for POST requests
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const dbFile = './db/db.json'

// test data
//let noteList = fs.existsSync(dbFile) ? JSON.stringify(fs.readFileSync(dbFile)) : []

let noteList = []
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
    let readFile = JSON.stringify(fs.readFileSync(dbFile))
    console.log(readFile)
    res.send(noteList)
})

// add a new notes to db.json
app.post('/api/notes', function(req, res){
    let id = uuid.v4()
    let newNote = req.body
    newNote.id = id
    noteList.push(newNote)
    //fs.writeFileSync(dbFile, JSON.stringify(noteList), "utf-8")
    console.log(noteList)
    res.json(noteList)
})

// should delete note based on id
app.delete('api/notes/:id', function(req, res){
    let deleteId = req.params.id
    noteList = noteList.filter(note => note.id !==deleteId)
    res.send({message: 'Deleted note'})
})

// Listener
app.listen(PORT, function(){
    console.log('Server listening on http://localhost:'+ PORT)
})