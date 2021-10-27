//notesCollection is the notes array
let notesCollection = []

export const useNotes = () => {
    return notesCollection.slice()
}

export const getNote = () => {
    return fetch ("http://localhost:8088/notes")

    .then(messyNoteList => messyNoteList.json())

    .then(sortedNoteList => {
            console.table(sortedNoteList)
            notesCollection = sortedNoteList
        }
    )
}

export const saveNote = (note) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNote) // After we add a note, get them all again so our new note appears in our collection
}

