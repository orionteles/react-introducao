import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import { Button } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'

const hooks = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(()=>{
        apiDeputados.get('/deputados').then(resultado=>{
            setDeputados(resultado.data.dados)
        })
    }, [])

    return (
        <Pagina titulo="Deputados">
            {deputados.map(item => (
                <img src={item.urlFoto} />
            ))}
        </Pagina>
    )
}

export default hooks