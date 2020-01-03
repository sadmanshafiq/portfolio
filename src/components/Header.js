import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'
import styled from 'styled-components'


const HeaderDiv = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  top:4em;
`

const HeadingBackground = styled.h1`
  position: fixed;
  opacity: 0.05;
  font-size: calc(18em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
  z-index: 100;
  color:#9352ae;
`
const HeaderMain = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(1em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 400;  
    padding: 1em;
    margin-right: calc(20em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
  }
`

const HeadiBackground = styled.h1`
`

const HeangBackground = styled.h1`
`

class Header extends Component {
    
    state = {}

    render() {
        return (
        <HeaderDiv>
        <HeadingBackground>DEVELOPER</HeadingBackground>
            <HeaderMain>
                <h1>
                    <Fade bottom cascade>{data.tag}</Fade></h1>
            </HeaderMain>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </HeaderDiv>);
    }
}

export default Header;