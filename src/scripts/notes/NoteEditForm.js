import { useNotes, updateNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js";

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".print-list")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info (similar layout to the NoteForm in NoteForm.js)
    contentTarget.innerHTML = `
        <div class="noteEditFormContainer">
        <h2>Edit Note</h2>
        <div class="note-form-container">
            <input type="hidden" id="note-ID" value="${noteWeWantToEdit.id}"/>
            <input type="date" id="note-date" value="${noteWeWantToEdit.noteDate}"/>
            <input type="text" value="${noteWeWantToEdit.suspectName}" id="note-suspect-name"/>
            <textarea id="note-text" name="note-text" rows="4" cols="50">${noteWeWantToEdit.noteText}</textarea>
            <button id="saveNoteChanges-${noteId}" class="saveNoteBtn">Save Changes</button>
        </div>
        </div>
    `
}

// const eventHub = document.querySelector("body") //**<--dont need this bc we have the contentTarget variable we declared on line 5 that went to .print-list, so we change on line 32 from eventHub to contentTarget

contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        // Make a new object representation of a note
        const editedNote = {
            // how can you get the note's id? Created a <input type="hidden"> above to go wth this code:
            id: document.querySelector("#note-ID").value,
            //or--> id: event.target.id.split("-")[1] and remove the <input type="hidden"> above
            // get value of date from input
            noteDate: document.querySelector("#note-date").value,
            // get value of suspect from input
            suspectName: document.querySelector("#note-suspect-name").value,
            // get value of text from input
            noteText: document.querySelector("#note-text").value
        }
        // Send to json-server and refresh the list
        updateNote(editedNote)
        .then(NoteList)
    }
})
