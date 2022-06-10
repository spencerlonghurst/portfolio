import React from 'react'
import '../styling/Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div id='contact'>
      <h2 className='contact_header'>Contact Me</h2>
      <p>I am currently looking for Front End React.js developer roles. I am always available for a chat on LinkedIn</p>
      <p>Feel free to reach out if you would like to discuss any open roles you may know about!</p>
      <div className='contact_icons'>
        <GitHubIcon className='contact_icon'/>
        <LinkedInIcon className='contact_icon'/>
      </div>
    </div>
  )
}

export default Contact