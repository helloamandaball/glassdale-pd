import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js"
import { NoteEditForm } from "./NoteEditForm.js"

export const Note = (note) => {
    return `
        <section id="noteID--${note.id}" class="note-past-list">
            <ul>
                <li>
                    <div class="note-past">
                        <div class="notePastHeaderBox">
                            <div class="notePastDateSuspect">
                                <p><strong>Date:</strong> ${note.noteDate} <strong>&nbsp;&bull;&nbsp; Suspect:</strong> ${note.suspectName}</p>
                            </div>
                            <div class="notePastBtns">
                                <button type="submit" id="editNote--${note.id}" class="noteEditBtn">Edit</button>
                                <button type="submit" id="deleteNote--${note.id}" class="noteDeleteBtn">Delete</button>
                            </div>
                        </div>
                        <p><em>${note.noteText}</em></p>
                    </div>
                </li>
            </ul>
        </section>
    `
}

//Delete & Edit Notes event identifier
    //**works with "body" or "#container", maybe others to try switching out and see what happens
const eventHub = document.querySelector("body")

//Delete Notes 
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteNote")) {
        const idToDelete = eventObject.target.id.split("--")[1]
        deleteNote(idToDelete)
        .then(NoteList)
    }
});

//Edit Notes
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("editNote")) {
        const noteId = +eventObject.target.id.split("--")[1]
        NoteEditForm(noteId)
    }
})


