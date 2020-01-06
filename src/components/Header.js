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
  top: 4em;
`

const HeaderMain = styled.header`
  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: calc(1em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 600;  
    padding: 0.5em;
    margin-right: 20em;
    width: 80%;
  }
`

const HeaderTitle = styled.div`
  position: relative;
  margin: 4em;

  button{
    background: black;
    border: 0px;
    padding: 1em 3em;
    transition: all 0.2s ease-out;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    margin: 5em;
    width: 20%;
  }
  
  button:hover{
    opacity: 0.8;
  }
  
  button a{
    font-family: 'Open Sans', sans-serif;
    color:white;
    text-decoration: none;
  }
`

const TopHead = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: calc(3em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));;
  text-align: left;
  margin: auto;
  width: 100%;
`
const SubHead = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  color: #404040;
  font-size: calc(2em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));;
  text-align: left;
  margin: auto;
  width: 100%;
`

class Header extends Component {
    
    state = {}

    render() {
        return (
        <HeaderDiv>
          <HeaderMain>
            <h1><Fade bottom cascade>{data.tag}</Fade></h1>
          </HeaderMain>
            <Fade bottom>
            <HeaderTitle>
              <TopHead>
                {data.headerTagline[0]}<br/>
              </TopHead>
              <SubHead>
                {data.headerTagline[1]}<br/>
                {data.headerTagline[2]}<br/>
              </SubHead>
              <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
            </HeaderTitle>
            </Fade>



        </HeaderDiv>);
    }
}

export default Header;