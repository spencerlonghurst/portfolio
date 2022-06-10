import React from 'react'
import '../styling/Intro.css'

function Intro() {
  return (
    <div id='intro'>
      <div className='hello'>Hello, I am</div>
      <div className='name'>
        <div className='first_name'>
          <p className='letter'>S</p>
          <p className='letter'>p</p>
          <p className='letter'>e</p>
          <p className='letter'>n</p>
          <p className='letter'>c</p>
          <p className='letter'>e</p>
          <p className='letter'>r</p>
        </div>
        <div className='last_name'>
          <p className='letter'>L</p>
          <p className='letter'>o</p>
          <p className='letter'>n</p>
          <p className='letter'>g</p>
          <p className='letter'>h</p>
          <p className='letter'>u</p>
          <p className='letter'>r</p>
          <p className='letter'>s</p>
          <p className='letter'>t</p>
          <p className='letter'>.</p>
        </div>
      </div>
      <p className='subheading'>Frontend developer.</p>
      <p className='info'>I specialize in React.js and CSS.</p>
      <a className='resume' href='https://docs.google.com/document/d/1xyJEkF_-0z2FoL0JNzj4nq3SmgLd7NRyMPUJdYMxw_I/export?format=pdf'>Resumé</a>
    </div>
  )
}

export default Intro