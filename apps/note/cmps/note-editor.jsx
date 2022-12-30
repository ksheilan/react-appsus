const { useState, useEffect, Fragment } = React

// For now, we are using utilService to make a unique ID for each todo
import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"

export function NoteEditor({ editorRef, isEditorExpanded, setIsEditorExpanded }) {
    const [editorForm, setEditorForm] = useState([])
    const [answersMap, setAnswersMap] = useState({})
    const [newNote, setNewNote] = useState(noteService.createEmptyNote())
    useEffect(() => {
        loadEditorForm()
        if (!isEditorExpanded && newNote.info) {
            noteService.save(newNote)
        }
    }, [isEditorExpanded])

    function loadEditorForm() {
        setEditorForm(noteService.getEditorForm(isEditorExpanded))
    }

    function onChangeVal(input, val) {
        const answersToSave = { ...answersMap }
        const isTitle = input.info.label === 'editorTitle'
        const newNoteInfo = { ...newNote.info }
        answersToSave[input.id] = val

        setAnswersMap(answersToSave)
        setNewNote({
            ...newNote,
            info: {
                ...newNoteInfo,
                txt: val
            }
        })
    }

    function onChangeTitle(val){
        setNewNote({...newNote, title: val})
    }
    function processInput(input) {
        switch (input.type) {
            case 'textBox':
                return <_NoteEditorTextBox
                    type={input.type}
                    val={answersMap[input.id] || ''}
                    placeholder="Title"
                    onChangeVal={(val) => {
                        onChangeTitle(val)
                    }}
                />
            case 'textArea':
                return <_NoteEditorTextArea
                    type={input.type}
                    val={answersMap[input.id] || ''}
                    placeholder="Enter text.."
                    onClick={() => setIsEditorExpanded(true)}
                    onChangeVal={(val) => {
                        onChangeVal(input, val)
                    }}
                />
        }
    }


    return <div className="note-editor" ref={editorRef}>
        {
            editorForm.map(input => <div key={input.id}>
                {processInput(input)}
            </div>)
        }
    </div>
}


function _NoteEditorTextBox({ label, val, onChangeVal, placeholder }) {
    return (
        <label htmlFor={label}>
            <input
                className="editor-item"
                type="textBox"
                val={val}
                placeholder={placeholder}
                onChange={(ev) => {
                    onChangeVal(ev.target.value)
                }} />
        </label>
    )
}

function _NoteEditorTextArea({ label, val, onChangeVal, placeholder, onClick }) {
    return (
        <label htmlFor={label}>
            <textarea
                className="editor-item"
                val={val}
                placeholder={placeholder}
                onClick={() => onClick()}
                onChange={(ev) => {
                    onChangeVal(ev.target.value)
                }} />
        </label>
    )
}