import React from 'react'
import Perfil from '../Perfil/Perfil'
import './Galeria.css'
const Galeria = () => {
  return (
    <div>
        <h2 className='titulo-galeria'>Galeria</h2>
          < div className='contenedor-fotos' >
            <Perfil/>
            <Perfil/>
        </div>
   </div>

  )
}

export default Galeria