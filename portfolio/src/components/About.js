import React from 'react'
import '../styling/About.css'

function About() {
  return (
    <div className='about'>
      <div className='hello'>Hello, I am</div>
      <div className='name'>
        <div className='first_name'>
          <div className='s'>S</div>
          <div className='p'>p</div>
          <div className='e_1'>e</div>
          <div className='n_1'>n</div>
          <div className='c'>c</div>
          <div className='e_2'>e</div>
          <div className='r'>r</div>
        </div>
        {/* <div className='last_name'>
          <div className='l'>L</div>
          <div className='o'>o</div>
          <div className='2_n'>n</div>
          <div className='s'>g</div>
          <div className='s'>h</div>
          <div className='s'>u</div>
          <div className='s'>r</div>
          <div className='s'>s</div>
          <div className='s'>t</div>
        </div> */}
      </div>
    </div>
  )
}

export default About