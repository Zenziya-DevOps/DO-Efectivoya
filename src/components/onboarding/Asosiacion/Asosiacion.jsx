import React from 'react'
import ADEF from '../../../images/adef.png'
import './style.css'
const Asosiacion = () => {
  return (
    <section className='aso_wrapper'>
        <div className='text_wrapper'>
            <p>Somos Miembros de</p>
        </div>

        <div className='adef_wrapper'>
            <img src={ADEF} alt="adef" />
            <span style={{color:'#ee4524'}}>Asociación Dominicana de Empresas Fintech</span>
        </div>

    </section>
  )
}

export default Asosiacion