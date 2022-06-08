import React from 'react'
import '../styling/Intro.css'

function Intro() {
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
        <div className='last_name'>
          <div className='l'>L</div>
          <div className='o'>o</div>
          <div className='n_2'>n</div>
          <div className='g'>g</div>
          <div className='h'>h</div>
          <div className='u'>u</div>
          <div className='r_2'>r</div>
          <div className='s_2'>s</div>
          <div className='t'>t</div>
        </div>
      </div>
      <div className='info'>
        <p>I am a frontend software engineer who specializes in React.js and CSS.</p>
      </div>
    </div>
  )
}

export default Intro