import React, { Component } from 'react';
//import Project from './Project';
import Fade from 'react-reveal/Fade';
//import data from '../yourdata';
import styled, { css } from 'styled-components';

const remy = px => `${px / 16}rem`

const LayoutWrapper = styled.div`
  position: relative;
  top: 15em;

  // Fix for applying proper box-sizing
  html:not(&) {
    box-sizing: border-box;

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body:not(&) {
    font: 16px / 1.618 Montserrat, Open-Sans, sans-serif;
  }
  
  h1{
    font-family: 'Montserrat', sans-serif;
    font-size: calc(3em + (26 - 14) * ((100vw - 300px) / (1600 - 300)));;
    text-align: center;    
  }
`

// Grid container
const GridContainer = styled.div`
  
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  // Breakpoint for tablets
  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  // Breakpoint for small desktops
  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  // Breakpoint for medium desktops
  @media (min-width: 992px) {
    max-width: ${remy(960)};
  }

  // Breakpoint for large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`

// Grid row
const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: auto;
  grid-gap: ${remy(50)};
  
`

// Grid columns
//  const GridColumn = styled.div`
//
//   padding: ${remy(15)};
//   margin: ${remy(15)};
//   // Columns for mobile
//   ${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
//   ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

//   // Columns for tablets
//   @media (min-width: 576px) {
//     ${({ sm }) => sm && getFlex(sm)};
//     ${({ sm }) => sm && getWidth(sm)};
//   }

//   // Columns for small desktops
//   @media (min-width: 768px) {
//     ${({ md }) => md && getFlex(md)};
//     ${({ md }) => md && getWidth(md)};
//   }

//   // Columns for medium desktops
//   @media (min-width: 992px) {
//     ${({ lg }) => lg && getFlex(lg)};
//     ${({ lg }) => lg && getWidth(lg)};
//   }

//   // Columns for large desktops and HD devices
//   @media (min-width: 1200px) {
//     ${({ xl }) => xl && getFlex(xl)};
//     ${({ xl }) => xl && getWidth(xl)};
//   }`

const Card = styled.article`
  position: relative;;
  min-width: ${remy(500)};
  min-height: ${remy(500)};
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  border-radius: ${remy(50)};

  &:focus,
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  &.flipped {
    & > div:first-of-type { // Front side of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type { // Back side of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`

// Card sides
const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: ${remy(24)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all .25s ease-in-out;
`

// Card side - front
const CardFront = styled.div`
  ${CardSide};
  font-weight: bold;
  text-align: center;
  .img-wrapper {  
    width: auto;
    height: auto;
    overflow: hidden; 
    border-radius: 20px;
  }
  
  .inner-img {
    transition: 0.3s;
    
  }
  
  .inner-img:hover {
    transform: scale(1.1);
  }
`

// Card side - back
const CardBack = styled.div`
  ${CardSide};
  text-align: center;
  transform: rotateY(-180deg);
`

// Card content
const CardNumber = styled.span`
  display: block;
  font-size: ${remy(24)};
  font-family: 'Open Sans', sans-serif;

`

const CardDescription = styled.span`
  font-size: ${remy(16)};
`

// Create layout component
class Work extends Component {
  flipCard(event) {
    event.currentTarget.classList.toggle('flipped')
  }
  state = {  }
  render() {
    return (
      <LayoutWrapper>
        <h1><Fade bottom cascade>Work</Fade></h1>
        <GridContainer>
          <Fade bottom cascade>
          <GridRow>
            
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <div class="img-wrapper">
                    <img class="inner-img" src="./bom.png" alt="" width="600px" />
                  </div>
                  <CardNumber>Software Developer @ BOM</CardNumber>
                  
                </CardFront>

                <CardBack>
                  <CardDescription>Location: Docklands, Melbourne<br />Duration: 2018-2019<br />Scope: Agile Management,Web, Database<br />Stack:Django, Docker, Java, Jenkins, Jira, React<br /> Worked with the flood forecasting division in Bureau of Meteorology to develop web products for both backend and frontend use.</CardDescription>
                </CardBack>
              </Card>
            

              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                <div class="img-wrapper">
                    <img class="inner-img" src="./varcp.png" alt="" width="600px" />
                  </div>
                  <CardNumber>Lead Developer @ VACRP</CardNumber>
                </CardFront>

                <CardBack>
                  <CardDescription>Location: Hawthorn, Melbourne<br />Duration: 2019<br />Scope: Agile Management,Android, Mobile App<br />Stack:Unreal-Engine, C++, AR Core, Jira<br /> Worked with a small team to develop a Drone Visualization tool to be used by Defence Science and Technology Group.</CardDescription>
                </CardBack>
              </Card>

              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                <div class="img-wrapper">
                    <img class="inner-img" src="./h3.jpg" alt=""  width="600px" />
                  </div>
                  <CardNumber>UN Habitat III Delegate @ Global Voices</CardNumber>
                </CardFront>

                <CardBack>
                  <CardDescription>Location: Quito, Ecuador<br />Duration: 2016<br />Scope: United Nations Habitat III, Housing Discussion, Architecture<br />Stack: Research Paper, Report Generation<br /> Wrote a Research Paper and travelled to the conference to discuss potential solutions to the problems arising from growing population and immigration crises.<a href="https://globalvoices.org.au/s/Sadman-Shafiq-Habitat-III-Policy-Paper-copy.pdf">Paper Here</a></CardDescription>
                </CardBack>
              </Card>

              {/* <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <CardNumber>Director @ Indie Film Project</CardNumber>

                </CardFront>

                <CardBack>
                  <CardDescription>Produced a  <a href="https://vimeo.com/142484733">Video Here</a></CardDescription>
                </CardBack>
              </Card> */}
          </GridRow>
          </Fade>
        </GridContainer>
      </LayoutWrapper>
    )
  }
}

// class Work extends Component {
//     state = {}
//     render() {
//         return (<WorkDiv>
//             <h1><Fade bottom cascade>Work</Fade></h1>
//             <WorkContent>
//                 {data.projects.map((project) => (
//                     <Project key={project.id}
//                         title={project.title}
//                         service={project.service}
//                         imageSrc={project.imageSrc}
//                         url={project.url}
//                     ></Project>
//                 ))}
//             </WorkContent>
//         </WorkDiv>
//         );
//     }
// }
 
export default Work;