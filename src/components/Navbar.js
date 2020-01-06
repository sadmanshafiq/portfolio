import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components'

const Nav = styled.nav`
    position:fixed;
    z-index: 100;
    top:3em;
    width:90%;
    text-align: right;
    
    
    li{
        display: inline-block;
        cursor: pointer;
    }
    
    li .link{
        text-decoration: none;
        color: black;
        padding:1em;
        opacity: 0.5;
        transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
    }
    li .link:hover{
        opacity: 1;
    }
    
    .active{
        color:black;
        opacity: 1;
      }
`

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (<Nav>
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="homw"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Work</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </ul>
        </Nav> );
    }
}
 
export default Navbar;