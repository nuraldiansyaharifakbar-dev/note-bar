import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NoteKard({id, title, content, categori, deleteNote, setEditNote, created_at}){

    const navigate = useNavigate();
    const tanggal = new Date (created_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const shortContent = content.length > 100
            ? content.substring(0,100) + "..."
            : content ;
            const [showDetail, setShowDetail] = useState(false);
    return (
        <div className="notekard">
            <div className="card-header">
        <h2>{title}</h2>

        <span className="kategori-v">
            {categori}
        </span>
    </div>
            <p>{shortContent}</p>
            {content.length > 100 && (
                <span
                    className="selengkapnya"
                    onClick={() => setShowDetail(true)}
                >
                    Selengkapnya
                </span>
            )}
            {showDetail && (
            <div className="modal">
                <div className="modal-content">

                    <h2>{title}</h2>

                    <p>{content}</p>

                    <button onClick={() => setShowDetail(false)}>
                        Tutup
                    </button>

                </div>
            </div>
        )}
            <p>📅{tanggal}</p>
            <div className="btn">
                <button onClick={() => {
        setEditNote({
            id,
            title,
            content,
            categori,
        });

        navigate("/add");
    }}>Edit</button>
    
                <button onClick={()=>deleteNote(id)}>Hapus</button>
            </div>
        </div>
    )
}