import React, { useState } from 'react'
import '../styling/Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  
  return (
    <div id='header'>
      <div className='icons'>
      <GitHubIcon className='icon' onClick={() => window.open('https://github.com/spencerlonghurst', "_blank")}/>
      <LinkedInIcon className='icon' onClick={() => window.open('https://www.linkedin.com/in/spencer-longhurst/', "_blank")}/>
      </div>
      <div className='header_options'>
        <a className='header_options_a active' href='#intro'>Home</a>
        <a className='header_options_a' href='#about'>About</a>
        <a className='header_options_a' href='#projects'>Projects</a>
        <a className='header_options_a' href='#contact'>Contact</a>
      </div>
    </div>
  )
}

export default Header