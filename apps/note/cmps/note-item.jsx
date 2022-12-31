const { useState, useEffect } = React

import { noteService } from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"

import { NoteTxt } from "./note-txt.jsx"
import { NoteTitle } from "./note-title.jsx"
import { NoteImg } from "./note-img.jsx"

export function NoteItem({ note, onRemoveNote }) {
    function processNoteProp(key, val) {
        const id = utilService.makeId();
        switch (key) {
            case 'txt':
                return <NoteTxt key={id} val={val} />
            case 'img':
                return <NoteImg key={id} imgUrl={val} />
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
            className="note-item flexC align-center space-between"
            style={note.style || { backgroundColor: '#fff', border: '1px solid #d1d1d1' }}>
            <span className="fa fa-trash" style={{ cursor: 'pointer' }} onClick={() => onRemoveNote(note.id)}></span>
            {note.title && <NoteTitle val={note.title} />}
            {Object.keys(note.info).map(key => processNoteProp(key, note.info[key]))}
        </div>
    )

}


