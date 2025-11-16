import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminNavbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Message from './pages/Message';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Services from './pages/Services';


export default function App() {
  return (
    <BrowserRouter>
      <AdminNavbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  )
}
