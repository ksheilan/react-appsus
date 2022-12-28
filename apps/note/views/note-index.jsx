const { useState, useEffect, useRef } = React

import { noteService } from "../services/note.service.js"

import { NoteItem } from "../cmps/note-item.jsx"
import { NoteEditor } from "../cmps/note-editor.jsx"

export function NoteIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState([])
    const [isEditorExpanded, setIsEditorExpanded] = useState(false)
    const nodeEditorRef = useRef(null);
    useEffect(() => {
        setIsLoading(true)
        loadNotes()
    }, [isEditorExpanded])
    function loadNotes() {
        noteService.query().then((notesToUpdate) => {
            setNotes(notesToUpdate)
        })
    }

    return <div className="notes-layout" onClick={(ev) => {
        console.log('nodeEditorRef.current', nodeEditorRef.current);
        console.log('ev.target', ev.target);
        if (nodeEditorRef.current && !nodeEditorRef.current.contains(ev.target)) {
            console.log('clicked div');
            setIsEditorExpanded(false);
        }
    }}>
        <NoteEditor
            editorRef={nodeEditorRef}
            isEditorExpanded={isEditorExpanded}
            setIsEditorExpanded={setIsEditorExpanded} />
        <div className="note-gallery grid" onClick={() => setIsEditorExpanded(false)}>
            {notes.map(note => <NoteItem key={note.id} note={note} />)}
        </div>
    </div>

}
