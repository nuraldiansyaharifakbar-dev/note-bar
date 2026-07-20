import NoteKard from "./NoteKard";

export default function NoteList ({notes, deleteNote, setEditNote}) {
    console.log(notes);
    return (
        <div className="notelist">
            {notes.map((note) => (
                <NoteKard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    created_at={note.created_at}
                    content={note.content}
                    categori={note.categori}
                    deleteNote={deleteNote}
                    setEditNote={setEditNote}
                />
            ))}
        </div>
    )
}