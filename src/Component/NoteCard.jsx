export default function NoteCard({note}){
    const tanggal = new Date(note.created_at).toLocaleString("id-ID" ,{
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })

    return (
        <div className="notecard">
            <h2>{note.judul}</h2>
            <p>{note.isi}</p>

            <p>
                <strong>Kategori :</strong> {note.kategori}
            </p>

            <p>
                <strong>Dibuat :</strong> {tanggal}
            </p>

            <br />

            <button>Detail</button>

            <button style={{ marginLeft: "10px" }}>
                Edit
            </button>

            <button style={{ marginLeft: "10px" }}>
                Hapus
            </button>
        </div>
    )
}