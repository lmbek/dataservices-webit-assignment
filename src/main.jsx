import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/index.jsx';
import Navbar from "./components/navbar/navbar.jsx";
import About from "./pages/about/index.jsx";
import Contact from "./pages/contact/index.jsx";
import News from "./pages/news/index.jsx";
import Admin from "./pages/admin/index.jsx";
import RandomFacts from "./pages/random-facts/index.jsx";
import Photos from "./pages/photos/index.jsx";
import Todo from "./pages/todo/index.jsx";

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <React.StrictMode>
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/random-facts" element={<RandomFacts />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>

            </>
        </Router>
    </React.StrictMode>,
);
