import React from 'react'
import '../styling/Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='projects'>
      <h2 className='project_header'>Projects</h2>
      <div className='project_cards'>
        <ProjectCard
          title={'Amazon Clone (In Progress)'}
          description={'Created a front end and back end clone of Amazon.com. Developed full functionality of login, cart creation and Stripe payments. Used Firebase for authentication of login and registration of new users'}
          languages={'React.js, Node.js, Express.js, Firebase'}
          github={'https://github.com/spencerlonghurst/amazon_clone'}
          website='https://clone-6c11d.web.app/'
        />
        <ProjectCard
          title={'Youtube Clone (In Progress)'}
          description={'Using React.js and CSS, created a front end copy of Youtube’s homepage and a search bar. Deployed the project through Firebase'}
          languages={'React.js, Node.js, Express.js, Firebase'}
          github={'https://github.com/spencerlonghurst/youtube_clone'}
          website='https://clone-bc4cd.web.app/'
        />
        <ProjectCard
          title={'LinkedIn Clone (In Progress)'}
          description={'Utilized React.js, CSS and Material UI to create a front end clone of LinkedIn. I want a dark and light mode toggle to be available in the nav bar, so I will be building that alongside the rest of the website'}
          languages={'React, CSS, Vercel'}
          github={'https://github.com/spencerlonghurst/linkedin-clone'}
          website='https://linkedin-clone-spencerlonghurst.vercel.app/'
        />
        <ProjectCard
          title={'NASA photo of the day'}
          description={'Used Axios and React.js state to use the NASA API to create a webpage displaying the Astronomy Photo of the Day. Implemented styled components for my CSS styling'}
          languages={'React, Node, Express'}
          github={'https://github.com/spencerlonghurst/nasa-photo-of-the-day'}
          website='https://nasa-photo-of-the-day-fawn.vercel.app/'
        />
      </div>
    </div>
  )
}

export default Projects