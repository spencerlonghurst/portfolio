import React from 'react'
import '../styling/About.css';

function About() {
  return (
    <div id='about'>
      <h2 className='about_header'>About Me</h2>
      <div className='about_content'>
      <span>
        <p className='my_description'>Howdy! My name is Spencer and I am from the great state of Wyoming! I have over a year of experience in Web Development and have spent some time learning about Mobile Development.</p>

        <p className='my_details'>I am a car enthusiast, enjoy weight lifting, and love ripping around on a dirtbike.</p>

        <div className='all_my_languages'>
          <p className='my_languages'>Here are some languages I have worked with:</p>
          <div className='all_languages'>
            <div className='languages_first'>
              <p>• JavaScript</p>
              <p>• React.js</p>
              <p>• SQL</p>
            </div>
            <div className='languages_second'>
              <p>• HTML</p>
              <p>• CSS</p>
              <p>• Swift</p>
            </div>
          </div>
        </div>
      </span>
      <img className='my_image' src='https://avatars.githubusercontent.com/u/94577635?v=4' alt='Spencer'/>
      </div>

    </div>
  )
}

export default About