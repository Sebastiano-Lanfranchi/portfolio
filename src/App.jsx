
import React from 'react';
import Header from './components/header/Header';
import Homepage from './components/body/Homepage';
import './App.css'


const App = () => {
    return (
        <>
            <Header className="homepagePosition" />
            <Homepage />
        </>
    )
}

export default App