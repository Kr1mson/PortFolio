import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import downloadIcon from '../../assets/icons/downloads.png';
import visitIcon from '../../assets/icons/external-link.png'
import githubLogo from "../../assets/icons/github.png";
import "./ProjectView.css"
const ProjectView = ({title,stack,desc,type,link,bgLink,bgType,time,sourceLink,detailed}) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    
    <div className='project-wrapper'>
      {bgType === "vid" ? (
          <video
            autoPlay
            loop
            muted
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='bg-project'>
            <source src={bgLink} />
          </video>
        ) : (
          <img className="bg-project" src={bgLink} alt="background" />
        )}
      <p className="time">{time}</p>
      <div className='info-container'>
        <h2>{title}</h2>
        <p>{desc}</p>
        
        <p className="detailed-desc">{detailed}</p>
        <div className='skill-container'>
          {stack.map((item, index) => (
            <p className='skill' key={index}>{item}</p>
          ))}
        </div>
      </div>
      
      
      <div className='link-container'>
        {type === "none" ? null : (
          <>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {type === "app" ? "Download" : "Visit Site"}
            </a>
            <img src={type === "app" ? downloadIcon : visitIcon} alt={type === "app" ? "download icon" : "visit icon"} />
          </>
        )}
      </div>
      <a className="source-container" href={sourceLink} target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} />
      </a>


      
    </div>
  )
}

export default ProjectView
