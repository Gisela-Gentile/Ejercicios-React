import React from 'react'

const SuperficieRectangulo = () => {
  const [rectangulo, setRectangulo] = useState({
    base: null,
    altura: null
});

const [area, setArea] = useState(null);

const handleInputBase =(e) =>{
    setRectangulo({
        ...rectangulo,
        base: e.target.value
    })
}

const handleInputAltura =(e) =>{
    setRectangulo({
        ...rectangulo,
        altura: e.target.value
    })
}

const calcularArea =() => {
    let areaTotal = rectangulo.base * rectangulo.altura
    setArea(areaTotal);
}
return (
<div>
    <h3>Calcular area del rectangulo</h3>
    <input type="text" onChange={handleInputBase} placeholder='Base' />
    <input type="text" onChange={handleInputAltura} placeholder='Altura' />
    <button onClick={calcularArea}>Calcular</button>
    <p>Area: {area}</p>
</div>
  )
}

export default SuperficieRectangulo