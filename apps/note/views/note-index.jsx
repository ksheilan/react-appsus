const { useState, useEffect } = React

import { noteService } from "../services/note.service.js"

import { NoteItem } from "../cmps/note-item.jsx"

export function NoteIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        setIsLoading(true)
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then((notesToUpdate) => {
            setNotes(notesToUpdate)
        })
    }

    return <div className="note-gallery grid">
        {notes.map(note => <NoteItem key={note.id} note={note} />)}
    </div>

}
