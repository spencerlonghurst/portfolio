import React from 'react'
import '../styling/About.css';

function About() {
  return (
    <div id='about'>
      <h2 className='about_header'>About Me</h2>
      <div className='about_content'>
      <span>
        <p className='my_description'>Howdy! My name is Spencer and I am from the great state of Wyoming! My web developement experience stems from my passion at building things and problem solving. I started learning at an online bootcamp and now here you are, reading my portfolio.</p>

        <p className='my_details'>I am a trumpet player, enjoy weight lifting, and love ripping around on a dirtbike.</p>

        <div className='all_my_languages'>
          <p className='my_languages'>Here are some languages I have worked with:</p>
          <div className='all_languages'>
            <div className='languages_first'>
              <p>• React.js</p>
              <p>• Redux.js</p>
              <p>• Javascript</p>
            </div>
            <div className='languages_second'>
              <p>• Node.js</p>
              <p>• CSS</p>
              <p>• HTML</p>
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