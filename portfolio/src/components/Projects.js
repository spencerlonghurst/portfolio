import React from 'react'
import '../styling/Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='projects'>
      <ProjectCard 
        title={'Amazon Clone'}
        description={'a front end and back end of Amazon'}
        languages={'React Node Express, Firebase'}
        github={'https://github.com/spencerlonghurst/amazon_clone'}
        website='https://clone-6c11d.web.app/'
      />
      {/* <ProjectCard
        title={'Youtube Clone'}
        description={'a front end of Youtube'}
        languages={'React Node Express, Firebase'}
        github={'https://github.com/spencerlonghurst/youtube_clone'}
        website='https://clone-bc4cd.web.app/'
      />
      <ProjectCard
        title={'Wheel and Quiz State'}
        description={'A bi-directional interactive wheel, a customizable quiz and a form to create new quizzes'}
        languages={'React Redux Axios'}
        github={'https://github.com/spencerlonghurst/web-sprint-challenge-advanced-state'}
        website='https://wheel-and-quiz.herokuapp.com/'
      />
      <ProjectCard
      title={'NASA photo of the day'}
      description={'a front end and back end of Amazon'}
        languages={'React Node Express'}
        github={'https://github.com/spencerlonghurst/nasa-photo-of-the-day'}
        website='https://nasa-photo-of-the-day-fawn.vercel.app/'
      /> */}
    </div>
  )
}

export default Projects