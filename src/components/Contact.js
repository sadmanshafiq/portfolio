import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

import data from '../yourdata';
import Emoji from './Emoji'

const ContactDiv = styled.div`
    position: relative;
    text-align: center;
    margin-left: -3em;
    margin-top: 30em;
    h1{
      font-family: 'Montserrat', sans-serif;
      font-size: calc(3em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));;;
      text-align: center;
    }
    h2{
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      color: #303030;
      font-size: calc(2em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));;
      text-align: center;
      margin: auto;
      width: 100%;
    }
    .amazing-color{
      color:#1c181f;
      opacity: 0.5;
      transition: all .25s ease-in-out;
    }
    &:hovor{
      color:#9352ae;
      opacity: 1;
    }
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
    button:hover {
      opacity: 0.8;
    }
    button a{
      color: white;
      font-family: 'Open-Sans', sans-serif;
      font-weight: 600;
      font-size: 1em;
      text-decoration: none;
    }
    li{
      display: inline-block;
      margin-top:0;
      margin-bottom: 0;
      margin-right: 1em;
      margin-left: 0;
    }
    li a{
      text-decoration: none;
      color:black;
    }
`
const ColorSpan = styled.span`
  color:#422ae2;
  display:block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: calc(2em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));;
  text-align: center;
  margin: auto;
  width: 100%;
  opacity: 0.5;
  transition: all .25s ease-in-out;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;

`

const FooterSpan = styled.span`
    position: relative;
    top:2em;
    padding: 1em;

    a{
        text-decoration: none;
        color:#2c59fb;
      }

`

class Contact extends Component {
    state = {  }
    render() { 
        return (
        <ContactDiv>
        <Fade bottom cascade>
        <h2>
        Let’s create your next<br></br></h2>
        <ColorSpan>experience together</ColorSpan>
          <button><a href={`mailto:${data.contactEmail}`}>Get in Touch</a></button>
        <ul>
            {data.social.map((link,index)=>(
                <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
            ))}   
        </ul>
        </Fade>
        
            <FooterSpan>
                Made With <Emoji symbol="🎇"/> by <a href="http://sadmanshafiq.com/">Sadman Shafiq</a>
            </FooterSpan>
        </ContactDiv>
        );
    }
}
 
export default Contact;