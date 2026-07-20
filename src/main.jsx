import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Tambahkan import ini
import './index.css'
import App from './App.jsx'
import Navbar from './Component/Navbar.jsx'
import NoteForm from './Component/NoteForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Bungkus semua komponen dengan BrowserRouter */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)