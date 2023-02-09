import './App.css';
import Navbar from './Content/Navbar/navbar';
import CardContainer from './Content/CardContainer/CardContainer';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [mode, setMode] = useState('');
  const [progress, setProgress] = useState(10);
  const [modeName, setModeName] = useState('day')
  
  const handleDarkMode = () => {
    if (mode === '') {
      setMode('dark');
      document.body.classList.add('dark');
      setModeName('night')
    }
    else {
      setMode('');
      document.body.classList.remove('dark');
      setModeName('day')
    }
  }
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path='/' element={<CardContainer setProgress={setProgress} key="general" category='general' mode={mode} />} />
          <Route exact path='/Entertainment' element={<CardContainer setProgress={setProgress} key="entertainment" category='entertainment' mode={mode} />} />
          <Route exact path='/Sports' element={<CardContainer setProgress={setProgress} key="sports" category='sports' mode={mode} />} />
          <Route exact path='/Science' element={<CardContainer setProgress={setProgress} key="science" category='science' mode={mode} />} />
          <Route exact path='/Business' element={<CardContainer setProgress={setProgress} key="business" category='business' mode={mode} />} />
          <Route exact path='/Health' element={<CardContainer setProgress={setProgress} key="health" category='health' mode={mode} />} />
          <Route exact path='/Technology' element={<CardContainer setProgress={setProgress} key="technology" category='technology' mode={mode} />} />
        </Routes>
        <div className={`${mode}btnContainer`}><button id={`${mode}btnMode`} onClick={handleDarkMode}></button>{modeName}</div>
        <Navbar mode={mode} siteName='NewsDaily'/>
      </Router>
    </>
  );
}

export default App;
