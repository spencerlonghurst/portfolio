import React from 'react'
import '../styling/Contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div id='contact'>
      <h2 className='contact_header'>Contact Me</h2>
      <p className='contact_p_one'>I am currently looking for Front End React.js developer roles. I am always available for a chat on LinkedIn or an Email. Feel free to reach out if you would like to discuss any open roles you may know about!</p>
      <div className='contact_cta'>
        <a className='email' href='mailto:spencersean12@gmail.com'>spencersean12@gmail.com</a>
        <LinkedInIcon className='contact_icon' onClick={() => window.open('https://www.linkedin.com/in/spencer-longhurst/', "_blank")}/>
      </div>
    </div>
  )
}

export default Contact