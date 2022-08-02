import React from 'react'
import Help from '../Help/Help'
import Slider from './Slider/Slider'
import './style.css'

const Testimonios = () => {

  return (
    <section className='testimonials_wrapper'>
        <Slider/>
        <Help/>
    </section>
  )
}

export default Testimonios