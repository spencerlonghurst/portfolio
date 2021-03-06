import React from 'react'
import '../styling/ProjectCard.css';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({title, description, languages, website, github}) {
  return (
    <div className='project_card'>
      <div className='project_insides'>
        <div className='links'>
          <GitHubIcon className='link link_one' onClick={() => window.open(`${github}`, "_blank")}/>
          <WebIcon className='link link_two' onClick={() => window.open(`${website}`, "_blank")}/>
        </div>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
        <div className='languages'>
          <p>{languages}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

//Title
//Description
//Languages
//website
//github link