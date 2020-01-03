import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
//import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Header/>
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
