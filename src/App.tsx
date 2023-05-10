import React from 'react';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import CustomCursor from './components/CustomCursor';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="bg-white overflow-x-hidden">
            <CustomCursor />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />

                        <Route path="gallery" element={<Gallery />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
