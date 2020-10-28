# Note-Taker

## Description

A web application used to keep track of tasks to complete that can read, write, and delete notes.

## Technnologies

* JavaScript
* Node.js
* Express.js

## Installation

````
npm install express fs path uuid
````

## Goal of the Project

**Create a web application that can read, write and delete notes**

As a note-taking web application, I needed to set html and api routes to be able to modify notes while rendering html files in a single-page application. Furthermore, I used the "fs" module to write to an .json file to save notes.

## Usage

The following image is an example of the web application's appearance and functionality:

![Image]()

## What I Did

#### Set API Endpoints

````
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/api/notes', function(req, res){
    res.send(noteList)
})
````

#### Provide a Unique ID

````
let id = uuid.v4()
let newNote = req.body
newNote.id = id
````

#### Write to File

````
let noteList = JSON.parse(fs.readFileSync(dbFile, "utf-8"))
fs.writeFileSync(dbFile, JSON.stringify(noteList))
````

## URL

See the web application [here]()

## License

MIT License

Copyright (c) 2020 Dailey Kaze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.