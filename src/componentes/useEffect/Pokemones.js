import React, { useEffect, useState} from 'react';
import './Pokemones.css';
import pokemon from '../../imagenes/pokemon.png';

const Pokemones = () => {
    const [pokemones, setPokemones]= useState([])
    
    const [anterior, setAnterior]= useState (null)
    const [siguiente, setSiguiente]= useState(null)
    const [actual, setActual]= useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
   
    const obtenerPokemones = (url)=>{
      fetch (url)
      .then (response=> response.json())
      .then (data => {console.log(data)
                      setPokemones (data.results)
                      setAnterior(data.previous)
                      setSiguiente(data.next)})
  }
    
    useEffect(()=>{
      
        obtenerPokemones(actual);
    }, [actual])
    
  return (
    
      <div> 
        <img src= {pokemon} alt='pokemones'/>
        <h1> Lista de Pokemones</h1>
         <ul>
        {pokemones.map((pokemon, index)=>{
            return <li key={index}>{pokemon.name}</li>
            
        })}
       </ul>
       
       <button onClick={() => anterior !== null && setActual(anterior)}>Anteriores</button>
       <button onClick={() => siguiente !== null && setActual(siguiente)}>Siguientes</button>

       
       </div>
  
  )
}

export default Pokemones
