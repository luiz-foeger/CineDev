import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './paginas/home';
import Filme from './paginas/filme';
import Search from './paginas/search';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />} />
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<Filme />} />
                <Route path='search' element={<Search />} />
            </Routes>
            <App />
        </BrowserRouter>
    </React.StrictMode >
);

// <App />

