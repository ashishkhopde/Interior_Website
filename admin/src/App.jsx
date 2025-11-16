import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminNavbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Message from './pages/Message';


export default function App() {
  return (
    <BrowserRouter>
      <AdminNavbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/message" element={<Message/>}/>
      </Routes>
    </BrowserRouter>
  )
}
