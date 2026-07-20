import NoteForm from "../Component/NoteForm";

export default function AddNote({
    addNote,
    editNote,
    updateNote,
    setEditNote
}) {
    return (
        <NoteForm
            addNote={addNote}
            editNote={editNote}
            updateNote={updateNote}
            setEditNote={setEditNote}
        />
    );
}