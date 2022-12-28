import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    // getEmptyCar,
    // getDefaultFilter,
}

// CREATE
function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "http://some-img/me",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            }
        ]

        storageService.saveToStorage(NOTE_KEY, notes)
    }

}

// READ
function query() {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            return notes
        })
}

// function getEmptyNote() {
//     return { }
// }

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
    // return axios.get(CAR_KEY, carId)
}
// UPDATE
function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}
// DELETE

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}