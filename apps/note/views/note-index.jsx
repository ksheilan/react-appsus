const { useState, useEffect } = React

import { noteService } from "../services/note.service.js"

export function NoteIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        setIsLoading(true)
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then((notesToUpdate) => {
            console.log('notesToUpdate', notesToUpdate)
            // Set state is asynchronious
            // setCars(carsToUpdate)
            // setIsLoading(false)
            // console.log('cars', cars)
        })
    }

    return <div>note app</div>

}
