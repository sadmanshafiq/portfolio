import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import styled from 'styled-components'

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    img{
        margin-left: auto;
        margin-right: auto;
        width:400px;
        height:400px;
        object-fit:cover;
        border-radius:50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    } 
`

const AboutContent = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    h1{
        font-family: 'Montserrat', sans-serif;
        font-size: calc(3em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));;
        font-weight: 900;
        text-align: center;
    }
    p{
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        opacity: 50%;
        padding-left: 3em;
        padding-right: 3em;
        padding-bottom: 3em;
        font-size: 1.3em;
        text-align: center;
        width: 100%;
    }
`


class About extends Component {
    state = {  }
    render() { 
        return (
        <AboutDiv>
            <AboutContent>
            <h1><Fade bottom cascade>About</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </AboutContent>
            <Fade bottom>
            {data.ShowAboutImage ? 
            <img src={data.aboutImage} alt="About"></img> 
            : null}
            </Fade>
        </AboutDiv>  
        );
    }
}
 
export default About;