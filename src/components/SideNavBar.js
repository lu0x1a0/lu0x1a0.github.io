import React from "react";
import { StaticImage } from "gatsby-plugin-image"
export default function SideNavBar(){
    return (
      <div className="sidebar">
        <a className="sections active" href="#home">Home</a>
        <a className= 'sections' href="#About">About</a>
        <a className= 'sections' href="#Skills">Skills</a>
        <a className= 'sections' href="#Projects">Project</a>
        <a className= 'sections' href="#Projects">Contact</a>
        <div className = 'bottom'>
          <div className = 'reachout'>
                
            <a href = 'https://www.linkedin.com/in/sean-luo-b4608a15b/'>
              <StaticImage 
                src="../images/linkedin_icon.png" 
                alt="linkedin icon" 
                width={32}
                height={32}
              />
            </a>
            
            <a href = 'https://github.com/lu0x1a0'>
              <StaticImage 
                src="../images/github_icon.png" 
                alt="github icon" 
                width={32}
                height={32}
              />
            </a>
  
          </div>
          <div className = 'credit'>
            Powered by Gatsby
          </div>
        </div>
      </div>
    )
}