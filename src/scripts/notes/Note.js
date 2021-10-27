export const Note = (note) => {
    return `
        <section id="noteID--${note.id}" class="note-past-list">
            <ul>
                <li>
                    <div class="note-past">
                        <p><strong>Date:</strong> ${note.noteDate} <strong>&nbsp;&bull;&nbsp; Suspect:</strong> ${note.suspectName}</p>
                        <p><em>${note.noteText}</em></p>
                    </div>
                    <div class="notePastBtns">
                        <button type="submit" id="noteEditBtn">Edit</button>
                        <button type="submit" id="noteDeleteBtn">Delete</button>
                    </div>
                </li>
            </ul>
        </section>
    `
}