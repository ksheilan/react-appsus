const { useState, useEffect, Fragment } = React

// For now, we are using utilService to make a unique ID for each todo
import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"
import { uploadService } from "../../../services/upload.service.js"

export function NoteEditor({ editorRef, isEditorExpanded, setIsEditorExpanded, addNote }) {
    const [editorForm, setEditorForm] = useState([])
    const [answersMap, setAnswersMap] = useState({})
    const [newNote, setNewNote] = useState(noteService.createEmptyNote())

    useEffect(() => {
        loadEditorForm()
        // if (!isEditorExpanded && newNote.info) {
        //     addNote(newNote)
        // }
    }, [])

    function loadEditorForm() {
        setEditorForm(noteService.getEditorForm(isEditorExpanded))
    }
    function onAddImage(val) {
        const newNoteInfo = { ...newNote.info }
        setNewNote({
            ...newNote,
            info: {
                ...newNoteInfo,
                img: val.src
            }
        })
    }
    function onSetBackgroundColor(val) {
        setNewNote({
            ...newNote,
            style: {
                backgroundColor: val
            }
        })
    }
    function onChangeVal(input, val) {
        const answersToSave = { ...answersMap }
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

    function onChangeTitle(val) {
        setNewNote({ ...newNote, title: val })
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


    return <div className="note-editor" ref={editorRef} style={newNote.style || { backgroundColor: '#fff' }}>
        {
            editorForm.map(input => <div key={input.id}>
                {processInput(input)}
            </div>)
        }
        {isEditorExpanded &&
            <div className="editor-actions flex space-between align-center">
                < _NoteEditorButtons setBackgroundColor={onSetBackgroundColor} addImage={onAddImage} />
                <span onClick={() => {
                    setAnswersMap({})
                    addNote(newNote)
                    }}>Save</span>
            </div>
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

function _NoteEditorButtons({ setBackgroundColor, addImage }) {
    const [currColor, setCurrColor] = useState('#fff')
    return <div className="editor-buttons">
        <label>
            <input style={{ display: 'none' }} type="color" onChange={(event) => {
                setCurrColor(event.target.value)
                setBackgroundColor(event.target.value)
            }}></input>
            {/* <span className="color-picker" style={{ backgroundColor: currColor }}></span> */}
            <span className="fa fa-palette" style={{ fontSize: '1.5625em', cursor: 'pointer' }}></span>
        </label>
        <label>
            <input style={{ display: 'none' }} type="file" accept="image/*" onChange={(ev) => uploadService.loadImageFromInput(ev, addImage)} />
            <span className="fa fa-upload" style={{ fontSize: '1.5625em', cursor: 'pointer' }}></span>
        </label>
    </div>
}