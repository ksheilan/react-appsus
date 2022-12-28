const { useEffect } = React

import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteTodos } from "./note-todos.jsx"

export function NoteItem({ note }) {
    useEffect(() => {
        console.log('noteprops', { ...note.info });
    }, [])

    function processNote(note) {
        console.log('processNote', note);
        switch (note.type) {
            case 'note-txt':
                return <NoteTxt {...note} />
            case 'note-img':
                return <NoteImg {...note} />
            case 'note-todos':
                return <NoteTodos {...note} />
        }
    }

    return (
        <div className="note-item flexC align-center" style={note.style || { backgroundColor: '#fff', border: '1px solid #d1d1d1' }}>
            {processNote(note)}
        </div>
    )

}


