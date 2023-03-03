import React, { useState } from 'react'

const CambiarImagen = () => {
    const imagen  = {
        img1: "http://via.placeholder.com/111x111",
        img2: "http://via.placeholder.com/222x222",
        img3: "http://via.placeholder.com/333x333",
    }
    const[button, setButton] = useState("")
    
    const handleClickButton =(img)=>{
        setButton (imagen[img]) 
    }
  return (
    <div>
        <button onClick={()=>handleClickButton('img1')}>Imagen 1</button>
        <button onClick={()=>handleClickButton('img2')}>Imagen 2</button>
        <button onClick={()=>handleClickButton('img3')}>Imagen 3</button>
        <p>{button}</p>
        <img src={button} alt='' />
    </div>
    
  )
}

export default CambiarImagen
