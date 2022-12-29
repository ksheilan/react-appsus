const { useState, useEffect, useRef } = React

import { noteService } from "../services/note.service.js"

import { NoteItem } from "../cmps/note-item.jsx"
import { NoteEditor } from "../cmps/note-editor.jsx"

export function NoteIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState([])
    const [isEditorExpanded, setIsEditorExpanded] = useState(false)
    const noteEditorRef = useRef(null);

    useEffect(() => {
        setIsLoading(true)
        loadNotes()
    }, [isEditorExpanded])

    function loadNotes() {
        noteService.query().then((notesToUpdate) => {
            setNotes(notesToUpdate)
        })
    }

    return <div className="notes-layout full" onClick={(ev) => {
        if (noteEditorRef.current && !noteEditorRef.current.contains(ev.target)) {
            setIsEditorExpanded(false);

        }
    }}>
        <NoteEditor
            editorRef={noteEditorRef}
            isEditorExpanded={isEditorExpanded}
            setIsEditorExpanded={setIsEditorExpanded} />
        <div className="note-gallery grid" onClick={() => setIsEditorExpanded(false)}>
            {notes.map(note => <NoteItem key={note.id} note={note} />)}
        </div>
    </div>

}
