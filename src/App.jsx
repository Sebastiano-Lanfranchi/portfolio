
import React from 'react';
import Header from './components/header/Header';
import Homepage from './components/body/Homepage';
import './App.css'


const App = () => {
    return (
        <div className="fade-in-left">
            <Header className="homepagePosition" />
            <Homepage />
        </div>
    )
}

export default App