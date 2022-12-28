const { useState, useEffect, Fragment } = React

// For now, we are using utilService to make a unique ID for each todo
import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"

export function NoteEditor() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [editorForm, setEditorForm] = useState([])
    const [answersMap, setAnswersMap] = useState({})

    useEffect(() => {
        loadEditorForm()
        console.log('editor filtered', noteService.getEditorForm(false))
        console.log('editor not filtered', noteService.getEditorForm(true))
    }, [isExpanded])

    function loadEditorForm() {
        setEditorForm(noteService.getEditorForm(isExpanded))
    }

    function toggleExpanded() {
        console.log("isExpanded", isExpanded);
        setIsExpanded(!isExpanded)
    }
    function onChangeVal(id, val) {
        const answersToSave = { ...answersMap }
        answersToSave[id] = val
        setAnswersMap(answersToSave)
    }
    function processInput(input) {
        switch (input.type) {
            case 'textBox':
                return <_NodeEditorTextBox
                    type={input.type}
                    val={answersMap[input.id] || ''}
                    placeholder="Enter text.."
                    onClick={toggleExpanded}
                    onChangeVal={(val) => {
                        onChangeVal(input.id, val)
                    }}
                />
        }
    }
    return <div className="note-editor">
        {
            editorForm.map(input => <div key={input.id}>
                {processInput(input)}
            </div>)
        }
    </div>
}


function _NodeEditorTextBox({ label, val, onChangeVal, placeholder, onClick }) {
    return (
        <label htmlFor={label}>
            <input type="textBox"
                val={val}
                placeholder={placeholder}
                onClick={() => onClick()}
                onChange={(ev) => {
                    onChangeVal(ev.target.value)
                }} />
        </label>
    )
}

function TextBox({ info, val = '', onChangeVal }) {
    const { label } = info
    return (
        <label>
            {label}
            <input type="text" value={val} onChange={(ev) => {
                onChangeVal(ev.target.value)
            }} />
        </label>
    )

}