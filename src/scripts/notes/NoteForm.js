import { useCriminals, getCriminals } from "../criminals/CriminalsDataProvider.js"
import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"

// const contentTarget = document.querySelector(".print-list")

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        let criminalsArray = useCriminals()
        render(criminalsArray)
    })
}

const render = criminalNameId => {
    document.querySelector(".note-form").innerHTML += `
            <h2>Notes</h2>
            <div class="note-form-container">
                <input type="date" id="note-date">
                <select id="noteForm--criminal" class="criminalSelect">
                <option value="0">Please select a criminal...</option>
                    ${
                        criminalNameId.map(criminal => {
                            return `<option value="${criminal.id}">${criminal.name}</option>`
                        })
                    }
                </select>
                <textarea id="note-text" name="note-text" rows="4" cols="50" placeholder="Enter Notes Here"></textarea>
                <button id="saveNote" class="saveNoteBtn">Save Note</button>
            </div>
        `
}

//This code is before adding the one-to-many code in Ch.12
// export const NoteForm = () => {
//     return `
//         <h2>Notes</h2>
//         <div class="note-form-container">
//             <input type="date" id="note-date">
//             <input type="text" id="note-suspect-name" placeholder="Enter Suspect Name">
//             <textarea id="note-text" name="note-text" rows="4" cols="50" placeholder="Enter Notes Here"></textarea>
//             <button id="saveNote" class="saveNoteBtn">Save Note</button>
//         </div>
//     `
// }

// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // // Make a new object representation of a note
            const newNote = {
                // Key/value pairs here
                noteDate: document.querySelector("#note-date").value,
                // suspectName: document.querySelector("#note-suspect-name").value,
                noteText: document.querySelector("#note-text").value,
                criminalId: +document.querySelector("#noteForm--criminal").value
            }
            // console.log(newNote)
            //below clears the "note-text", etc. fields
            document.querySelector("#note-date").value = ""
            // document.querySelector("#note-suspect-name").value = ""
            document.querySelector("#note-text").value = ""
            document.querySelector("#noteForm--criminal").value = ""


        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})