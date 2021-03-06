import { getNote, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { NoteForm } from "./NoteForm.js"
import { getCriminals, useCriminals } from "../criminals/CriminalsDataProvider.js"

const htmlContentTarget = document.querySelector(".print-list")

export const NoteList = () => {
    getNote()
    .then(getCriminals)
    .then(() => {
        let notesArray = useNotes();
        let criminals = useCriminals();
        let noteHTML = "";

        notesArray.forEach((singleNoteObject) => {
         let singleCriminal = criminals.find(singleCriminalObject => singleNoteObject.criminalId === singleCriminalObject.id)
            noteHTML += Note(singleNoteObject, singleCriminal)
        })

        htmlContentTarget.innerHTML = `
            <h2>Notes</h2>
            <div class="note-form">
                ${NoteForm(criminals)}
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
    // NoteForm()  
    NoteList()  
    // document.querySelector(".filterMenuContainer").innerHTML = ""
    document.querySelector(".filters__crime").innerHTML = ""
    document.querySelector(".filters__officer").innerHTML = ""
})


///////////////////////////////////////////////////////////////////////
////This code works, it just puts the NoteForm at the bottom of the note past list and had to have a workaround when calling NoteForm() to work after the div was called where it was gonna be inserted from NoteForm.js

// // This may be a slight refactor to what you have in your code. We added a render function to print our criminals to the DOM. You can use the render function as we do in this example, or you can keep your logic in your NoteList function-- it's up to you.

// const render = (noteCollection, criminalCollection) => {
//     htmlContentTarget.innerHTML = noteCollection.map(note => {
//         // Find the related criminal
//         const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
//         // console.log(relatedCriminal)
//         return `
//             <div class="note-past-list-container">
//                  <h3>Suspect: ${relatedCriminal.name}</h3>
//                  <div class="note-list">
//                     <p><em>Note Date: ${note.noteDate}</em></p>
//                     <p>${note.noteText}</p>
//                 </div>
//                 <div class="notePastBtns">
//                     <button type="submit" id="editNote--${note.id}" class="noteEditBtn">Edit</button>
//                     <button type="submit" id="deleteNote--${note.id}" class="noteDeleteBtn">Delete</button>
//                 </div>
//             </div>
//         `
//     }).join("")
//     //.join("") is a work around that creates a string of the code. If it wasn't there, I get a weird comma showing up after the return`...` block of code.
// }

// export const NoteList = () => {
//     getNote()
//         .then(getCriminals)
//         .then(() => {
//             const notes = useNotes()
//             const criminals = useCriminals()
//             render(notes, criminals)
//             htmlContentTarget.innerHTML += `
//                 <div class="note-form">
//                 </div>
//             `
//             NoteForm()
//         })
// }

///////////////////////////////////////////////////////////////////////
//// Previous code prior to Ch.12:
// export const NoteList = () => {
//     getNote()
//     .then(() => {
//         let noteArray = useNotes();
//         let noteHTML = "";

//         noteArray.forEach((singleNoteObject) => {
//             noteHTML += Note(singleNoteObject)
//         })

//         htmlContentTarget.innerHTML = `
//             <div class="note-form">
//                 ${NoteForm()}
//             </div>
//             <div class="note-past-list-container">
//                 <h2>Previous Notes</h2>
//                 <div class="note-list">
//                     ${noteHTML}
//                 </div>
//             </div>
//         `
//     })
// }