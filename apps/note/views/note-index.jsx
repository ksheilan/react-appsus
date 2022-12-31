const { useState, useEffect, useRef } = React

import { noteService } from "../services/note.service.js"

import { NoteItem } from "../cmps/note-item.jsx"
import { NoteEditor } from "../cmps/note-editor.jsx"

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [isEditorExpanded, setIsEditorExpanded] = useState(false)
    const noteEditorRef = useRef(null);

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then((notesToUpdate) => {
            setNotes(notesToUpdate)
        })
    }
    function onAddNote(note) {
        noteService.save(note).then(() => { loadNotes() })
    }
    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => { loadNotes() })
    }
    return <div className="notes-layout full" onClick={(ev) => {
        if (noteEditorRef.current && !noteEditorRef.current.contains(ev.target)) {
            setIsEditorExpanded(false);

        }
    }}>
        <NoteEditor
            editorRef={noteEditorRef}
            isEditorExpanded={isEditorExpanded}
            setIsEditorExpanded={setIsEditorExpanded}
            onAddNote={onAddNote} />
        <div className="note-gallery grid" onClick={() => setIsEditorExpanded(false)}>
            {notes.map(note => <NoteItem key={note.id} note={note} onRemoveNote={onRemoveNote} />)}
        </div>
    </div>

}
