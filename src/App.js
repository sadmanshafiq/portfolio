import React from 'react';
import styled, { ThemeProvider,  createGlobalStyle  } from 'styled-components'
//import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,900|Open+Sans:400,600&display=swap');');
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
`

function App() {
  return (
    
    <div className="App">
      <GlobalStyles />
      <Navbar/>
      <Header/>
      <div className='About'>
        <About></About>
      </div>
      <div className='Work'>
        <Work></Work>
      </div>
      <div className='Contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
