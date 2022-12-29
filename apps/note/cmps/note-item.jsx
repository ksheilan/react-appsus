const { useState, useEffect } = React

import { noteService } from "../services/note.service.js"

import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"

export function NoteItem({ note }) {
    const [updatedNote, setUpdatedNote] = useState(note)

    function processNote(updatedNote) {
        switch (updatedNote.type) {
            case 'note-txt':
                return <NoteTxt {...updatedNote} />
            case 'note-img':
                return <NoteImg {...updatedNote} />
            case 'note-todos':
                return <NoteTodos {...updatedNote} />
        }
    }

    function processNoteProp(key, val) {
        console.log(key, val);
        // switch (key) {
        //     case 'txt':
        //         return <p>blabla</p>
        //     case 'img': return <NoteImg val={val} />
        // }
    }

    function onEditNoteProp(key, val) {
        let newNote = { ...note }
        newNote.info[key] = val
        setUpdatedNote(newNote)
        noteService.save(newNote)
        console.log('newNote', newNote)
    }

    return (
        <div
            onClick={() => onEditNoteProp('testProp', 'testVal')}
            className="note-item flexC align-center"
            style={note.style || { backgroundColor: '#fff', border: '1px solid #d1d1d1' }}>
            {
                Object.keys(updatedNote.info).map(key => <p>prop element</p>)
            }
        </div>
    )

}


