import React, { useEffect, useRef } from 'react'
import linkdinLogo from "../../assets/icons/linkedin.png";
import gmailLogo from "../../assets/icons/gmail.png";
import githubLogo from "../../assets/icons/github.png";

import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = ({scrolled,scrollToIntro,scrollToProj}) => {
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className='navbar' ref={navRef}>
      <div className='center'>
      <p className='header-element' onClick={scrollToTop}>
          Home
        </p>
        <p className='header-element' onClick={scrollToIntro}>
          About
        </p>
        <p className='header-element' onClick={scrollToProj}>
          Projects
        </p>
      </div>
      <div className='right'>
        <a href='https://www.linkedin.com/in/parth-passi-a422b4234/'><img className='contact-logo' src={linkdinLogo} alt="Linkdin"/></a>
        <a href='mailto:parthpassi28@gmail.com'><img className='contact-logo' src={gmailLogo} alt="Gmail"/></a>
        <a href='https://github.com/Kr1mson'><img className='contact-logo' src={githubLogo} alt="Github"/></a>
        
        
        
      </div>
    </div>
  )
}

export default Navbar
