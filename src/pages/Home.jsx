import { useState } from "react";
import NoteList from "../Component/NoteList";
import "../css/Home.css";

export default function Home({ notes, deleteNote, setEditNote }) {

    const [search, setSearch] = useState("");

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase()) ||
        note.categori.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="sec">
                <h2>Selamat datang di NoteApp</h2>
                <p>Tempat anda mencatat kegiatan anda agar lebih produktif</p>

                <input
                    type="text"
                    className="search"
                    placeholder="🔍 Cari catatan..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <NoteList
                notes={filteredNotes}
                deleteNote={deleteNote}
                setEditNote={setEditNote}
            />
        </div>
    );
}