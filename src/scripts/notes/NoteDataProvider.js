//notesCollection is the notes array
let notesCollection = []

export const useNotes = () => {
    return notesCollection.slice()
}

export const getNote = () => {
    //you can find the fetch local address once you start json in the terminal, it'll provide the address to place into the '' below
    return fetch ('http://localhost:8088/notes')
    //take your unsorted list and by adding the .json() your then going to sort the list to be usable and then make that sorted list equal to the notesCollection empty array - the square brackets [] - on line 2.
    .then(messyNoteList => messyNoteList.json())

    .then(sortedNoteList => {
            // console.table(sortedNoteList)
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

// Add a new method to your note data provider with a fetch that uses the DELETE method:
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
    .then(getNote)
}

//you'll need to add an updateNote function in your provider. This will use the PUT verb to modify an entry in the databaes based on its unique id.
export const updateNote = note => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNote)
}


