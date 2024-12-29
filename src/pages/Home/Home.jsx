import React, { useRef,useEffect, useState } from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import ProjectView from '../../components/ProjectView/ProjectView';
import linkdinLogo from "../../assets/icons/linkedin.png";
import gmailLogo from "../../assets/icons/gmail.png";
import githubLogo from "../../assets/icons/github.png";
import introImg from "../../assets/images/pexels-holodna-28434542.jpg"
const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const introRef = useRef();
  const projRef = useRef();
  const scrollToIntro = () => {
    introRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProj = () => {
    projRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className='wrapper'>
      <video autoPlay loop muted className='vid-bg  '>
        <source src="https://videos.pexels.com/video-files/1722882/1722882-hd_1920_1080_25fps.mp4" />
      </video>
      <Navbar scrolled={scrolled} scrollToIntro={scrollToIntro} scrollToProj={scrollToProj}/>
      <div className='name-container'>
        <h1>PARTH</h1>
        <h1 className='last-name'>PASSI</h1>
      </div>
      


      <div className={`contact-container ${scrolled ? 'hide-icons' : 'show-icons'}`}>
        <a href='https://www.linkedin.com/in/parth-passi-a422b4234/'><img className='contact-logo' src={linkdinLogo} alt="Linkdin"/></a>
        <a href='mailto:parthpassi28@gmail.com'><img className='contact-logo' src={gmailLogo} alt="Gmail"/></a>
        <a href='https://github.com/Kr1mson'><img className='contact-logo' src={githubLogo} alt="Github"/></a>
        
        
        
      </div>
      <div className='intro-container' ref={introRef}>
        <img src={introImg} alt="intro"/>
        <div>
          <p className='p1'>
            A passionate AI/ML developer with a knack for crafting innovative solutions, specializing in building intelligent systems and predictive models.  
          </p>
          <p className='p2'>
            With expertise in Python, TensorFlow, and machine learning algorithms, they excel in transforming data into actionable insights.  
          </p>
          <p className='p3'>
            Driven by curiosity, they thrive on solving complex problems and are committed to advancing technology for real-world applications.  
          </p>

        </div>
        

        
        

      </div>
      <h1 className='project-header' ref={projRef}>PRO<span>JECTS</span></h1>
      <div className='project-container'>
        <ProjectView title="WinVision" 
          stack={["Artificial Intelligence","Machine Learning","Web Development","Python","Data Analysis"]} 
          desc="F1-podium Predictor" 
          type="site" 
          link="https://winvision.netlify.app/" 
          bgLink="https://videos.pexels.com/video-files/16605636/16605636-uhd_3840_2160_60fps.mp4"
          // bgLink="https://images.pexels.com/photos/29252114/pexels-photo-29252114/free-photo-of-high-speed-formula-1-race-car-on-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          bgType="vid"
          time="June 2024"
          sourceLink="https://github.com/Kr1mson/Winvision"
          detailed="A Formula 1 web application for predicting F1 podium with 96.8% accuracy and detailed analysis of teams and drivers. User friendly design and dynamically updating team and driver statistics."
        />
        <ProjectView title="Set2Act" 
          stack={["Artificial Intelligence","Machine Learning","Python"]} 
          desc="Recipe Suggestion Web Application" 
          type="none"
          link="" 
          bgLink="https://videos.pexels.com/video-files/5515586/5515586-hd_1920_1080_25fps.mp4"
          bgType="vid"
          time="November 2024"
          sourceLink=""
          detailed="A web application for recipe suggestions that recommends similar recipes and provides robust filtering options for a personalized user experience."
        />
        <ProjectView title="VoiceVersa" 
          stack={["Android Studio","Firebase ML Kit","Java","GTTS","Speech Recognition"]} 
          desc="Indian Language Translation and Captioning Mobile App" 
          type="none" 
          link="" 
          bgLink="https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          bgType="img"
          time="April 2024"
          sourceLink="https://github.com/Kr1mson/VoiceVersa"
          detailed="Realtime translation and captioning application built in Android Studio with Firebase ML kit for Indian regional language translation. Speech to text and text to speech capabilities for ease of access. Achieved rank 65/319 in University-Level Smart India Hackathon (August 2024)."
        />
        <ProjectView title="Raksha" 
          stack={["Android Studio","Firebase","Java","Google Maps API"]} 
          desc="Emergency Relief and Geolocation Mobile App" 
          type="none" 
          link="" 
          bgLink="https://portfolio-40015.web.app/project_imgs/raksha.png"
          bgType="img"
          time="January 2024"
          sourceLink="https://github.com/Kr1mson/SIH_1717"
          detailed="Geolocation and Emergency relief mobile application for rescue agency cooperation designed in Android Studio with Firebase realtime database for realtime tracking and geolocation. Ranked 82/250 in Smart India Hackathon (September 2023). "
        />
        <ProjectView title="Fiora" 
          stack={["React Native","E-Commerce","Expo"]} 
          desc="Delivery time prediction E-commerce app" 
          type="app"
          link="https://expo.dev/artifacts/eas/hzUSDe6QJMVuWoh2S6b5ef.apk" 
          bgLink="https://videos.pexels.com/video-files/7680111/7680111-uhd_4096_2160_25fps.mp4"
          bgType="vid"
          time="October 2024"
          sourceLink="https://github.com/Kr1mson/Fiora"
          detailed="A React Native-based e-commerce mobile application featuring delivery time estimation tailored to the user's location and provider details for a seamless shopping experience."
        />
        <ProjectView title="Netflix Clone" 
          stack={["ReactJs","TMDB APi","Tailwind"]} 
          desc="Netflix Clone built in ReactJS" 
          type="site"
          link="https://netfl1x-clon3.netlify.app/" 
          bgLink="https://videos.pexels.com/video-files/4231453/4231453-hd_1920_1080_25fps.mp4"
          bgType="vid"
          time="December 2023"
          sourceLink="https://github.com/Kr1mson/netflix-clone"
          detailed="A Netflix clone built with ReactJS, leveraging the TMDB API to enable users to browse the latest shows and movies, view detailed information, and watch trailers."
        />
        
      </div>
      
    </div>
  )
}

export default Home
