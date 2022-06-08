import React from 'react'
import '../styling/Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div className='header'>
      <div className='icons'>
      <GitHubIcon className='icon'/>
      <LinkedInIcon className='icon'/>
      </div>
      <div className='header_options'>
        <a className='header_options_a active'>About</a>
        <a className='header_options_a'>Experience</a>
        <a className='header_options_a'>Projects</a>
        <a className='header_options_a'>Contact</a>
      </div>
    </div>
  )
}

export default Header