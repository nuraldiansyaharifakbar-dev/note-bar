import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoteForm({ addNote, editNote, updateNote, setEditNote }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [categori, setCategori] = useState("");
    const navigate = useNavigate();

   useEffect(() => {
    if (editNote) {
        setTitle(editNote.title);
        setContent(editNote.content);
        setCategori(editNote.categori);
    }else {
        setTitle("");
        setContent("");
        setCategori("");
    }
}, [editNote]);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        title,
        content,
        categori,
    };

    if (editNote) {
        await updateNote(editNote.id, data);
    } else {
        await addNote(data);
    }
    navigate("/");

    setTitle("");
    setContent("");
    setCategori("");
};

    return (
        <div className="noteform">
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Tulis Judul..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Tulis isi catatan..."
                    rows="10"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="kategori">
                
                <select
                    value={categori}
                    onChange={(e) => setCategori(e.target.value)}
                    className="kategori-select"
                >
                    <option value="">Pilih Kategori</option>
                    <option value="Pribadi">Pribadi</option>
                    <option value="Kuliah">Kuliah</option>
                    <option value="Sekolah">Sekolah</option>
                    <option value="Pekerjaan">Pekerjaan</option>
                    <option value="Ide">Ide</option>
                    <option value="Kegiatan">Kegiatan</option>
                    <option value="Lainnya">Lainnya</option>
                    
                </select>
                </div>

               <button type="submit">
                    {editNote ? "Perbarui" : "Tambah"}
                </button>
                
                {editNote && (
    <button
        type="button"
        onClick={() => {
            setEditNote(null);
            setTitle("");
            setContent("");
            setCategori("");
        }}
    >
        Batal
    </button>)}
            </form>
        </div>
    );
}