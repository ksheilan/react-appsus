const { useState, useEffect } = React

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"

import { NoteTxt } from "./note-txt.jsx"
import { NoteTitle } from "./note-title.jsx"

export function NoteItem({ note }) {
    const [updatedNote, setUpdatedNote] = useState(note)

    function processNoteProp(key, val) {
        switch (key) {
            case 'txt':
                return <NoteTxt key={utilService.makeId()} val={val} />
        }
    }

    function onEditNoteProp(key, val) {
        let newNote = { ...note }
        newNote.info[key] = val
        setUpdatedNote(newNote)
        noteService.save(newNote)
    }

    return (
        <div
            className="note-item flexC align-center"
            style={note.style || { backgroundColor: '#fff', border: '1px solid #d1d1d1' }}>
            {updatedNote.title && <NoteTitle val={updatedNote.title} />}
            {
                Object.keys(updatedNote.info).map(key => processNoteProp(key, updatedNote.info[key]))
            }
        </div>
    )

}


