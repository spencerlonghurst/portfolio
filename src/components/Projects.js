import React from 'react'
import '../styling/Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='projects'>
      <h2 className='project_header'>Projects</h2>
      <div className='project_cards'>
      <ProjectCard 
          title={"Madelyn's Portfolio"}
          description={'A good friend of mine requested a personal portflio to showcase her incredible marketing skills.'}
          languages={'React'}
          github={'https://github.com/spencerlonghurst/MadelynPortfolio'}
          website='https://madelyn-anderson-portfolio.vercel.app/'
        />
      <ProjectCard 
          title={'Hoselines'}
          description={'Firefighters need to calculate accurate numbers when pumping water from the truck to the end of the firehose. This mobile app helps them to calculate accurate numbers within a smooth app'}
          languages={'Swift'}
          github={'https://github.com/spencerlonghurst/hoselines'}
          website='https://apps.apple.com/us/app/hoselines/id6448963580'
        />
        <ProjectCard 
          title={'Amazon Clone'}
          description={'Created a front end and back end clone of Amazon.com. Developed full functionality of login, cart creation and Stripe payments. Used Firebase for authentication of login and registration of new users'}
          languages={'React.js Node.js Express.js Firebase'}
          github={'https://github.com/spencerlonghurst/amazon_clone'}
          website='https://clone-6c11d.web.app/'
        />
        <ProjectCard
          title={'Youtube Clone'}
          description={'Using React.js and CSS, created a front end copy of Youtube’s homepage and a search bar. Deployed the project through Firebase'}
          languages={'React.js Node.js Express.js Firebase'}
          github={'https://github.com/spencerlonghurst/youtube_clone'}
          website='https://clone-bc4cd.web.app/'
        />
        <ProjectCard
          title={'Wheel and Quiz State'}
          description={'Utilized Redux.js to create Action Creators to pass state around the redux store. With React.js, built a bi-directional interactive wheel, a customizable quiz and a form to create new quizzes'}
          languages={'React Redux Axios'}
          github={'https://github.com/spencerlonghurst/web-sprint-challenge-advanced-state'}
          website='https://wheel-and-quiz.herokuapp.com/'
        />
        <ProjectCard
          title={'NASA photo of the day'}
          description={'Used Axios and React.js state to use the NASA API to create a webpage displaying the Astronomy Photo of the Day. Implemented styled components for my CSS styling'}
          languages={'React Node Express'}
          github={'https://github.com/spencerlonghurst/nasa-photo-of-the-day'}
          website='https://nasa-photo-of-the-day-fawn.vercel.app/'
        />
        <ProjectCard
          title={'LinkedIn Clone (-In Progress-)'}
          description={'Utilized React.js, CSS and Material UI to create a front end clone of LinkedIn. I want a dark and light mode toggle to be available in the nav bar, so I will be building that alongside the rest of the website'}
          languages={'React CSS Vercel'}
          github={'https://github.com/spencerlonghurst/linkedin-clone'}
          website='https://linkedin-clone-spencerlonghurst.vercel.app/'
        />
      </div>
    </div>
  )
}

export default Projects