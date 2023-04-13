import React from 'react'
import Pagina from '../components/Pagina'

const array = () => {

  const carros = ['Opala', 'Classic', 'Ka', 'Omega', 'Fuscão']

  return (
    <>
      <Pagina titulo="Arrays">

        <ol>
          {carros.map(item => (
            <li>{item}</li>
          ))}
        </ol>

      </Pagina>
    </>
  )
}

export default array