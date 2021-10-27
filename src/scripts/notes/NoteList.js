import { getNote, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { NoteForm } from "./NoteForm.js"

const htmlContentTarget = document.querySelector(".print-list")

export const NoteList = () => {
    getNote()
    .then(() => {
        let noteArray = useNotes();
        let noteHTML = "";

        noteArray.forEach((singleNoteObject) => {
            noteHTML += Note(singleNoteObject)
        })

        htmlContentTarget.innerHTML = `
            <div class="note-form">
                ${NoteForm()}
            </div>
            <div class="note-past-list-container">
                <h2>Previous Notes</h2>
                <div class="note-list">
                    ${noteHTML}
                </div>
            </div>
        `
    })
}

// Nav Bar listener
//this calls the form itself with NoteForm(), the past notes section is called with NoteList()
document.querySelector("#notes-nav-link").addEventListener("click", () => {
    NoteForm()  
    NoteList()  
})

