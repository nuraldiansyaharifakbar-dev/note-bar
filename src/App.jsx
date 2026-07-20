import React, { useState } from 'react'
import NoteForm from './Component/NoteForm'
import NoteList from './Component/NoteList'
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import api from "./Servis/Api";
import { Routes, Route } from "react-router-dom";
import video from "../src/img/pp.mp4";
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import History from './pages/History';


function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);//membuat edit

  useEffect(()=> {
    getNotes();
  }, []);


  const getNotes = async ()=> {
    try {
      const response = await api.get("/notes");
      setNotes(response.data.data)
            // Jika API mengembalikan
            // {status:true,data:[...]}
            // gunakan:
            // setNotes(response.data.data);
      
    }catch (error) {
      console.log(error);
    }
  };

  //tambah catatan
  const addNote = async (newNote) => {
    try {
      await api.post('/notes', newNote);
      getNotes();
    }catch (error) {
      console.log(error);
    }
  };

  //hapus catatan 
  const deleteNote = async (id) => {
  try {
    await api.delete(`/notes/${id}`);

    // Refresh data setelah berhasil dihapus
    getNotes();
  } catch (error) {
    console.log(error);
  }
};

//edit catatan
  const updateNote = async (id, data) => {
    try {
      await api.put(`/notes/${id}`, data);
      setEditNote(null);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
   <>
    {/* <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
    >
        <source src={video} type="video/mp4" />
    </video> */}

    <Navbar>
<Routes>

    <Route
        path="/"
        element={
            <Home
                notes={notes}
                deleteNote={deleteNote}
                setEditNote={setEditNote}
            />
        }
    />

    <Route
        path="/add"
        element={
            <AddNote
                addNote={addNote}
                editNote={editNote}
                updateNote={updateNote}
                setEditNote={setEditNote}
            />
        }
    />

    <Route
        path="/history"
        element={
            <History
            />
        }
    />

</Routes>
    </Navbar>
</>
  )
}

export default App
