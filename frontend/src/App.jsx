import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import VisionPage from './pages/VisionPage.jsx';
import EndpointsPage from './pages/EndpointsPage.jsx';

const App = () => {
    return (
        <Router>
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                <Link to="/vision" style={{ color: '#fff', textDecoration: 'none' }}>Vision</Link>
                <Link to="/endpoints" style={{ color: '#fff', textDecoration: 'none' }}>Endpoints</Link>
            </nav>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/vision" element={<VisionPage />} />
                <Route path="/endpoints" element={<EndpointsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
