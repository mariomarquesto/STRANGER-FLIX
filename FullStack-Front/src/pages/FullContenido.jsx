import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Components/Cards/Cards';
import clientAxios from '../config/clientAxios';

const FullContenido = () => {
    const { categoria } = useParams();
    const [contenido, setContenido] = useState([])

    useEffect(() => {
        clientAxios.get(`contenidoCategorias/getFullContenido/${categoria}`)
            .then(response => setContenido(response.data))
    }, [categoria])
    return (
        <>
            <div className="container">
                <p className='fs-1 text-center text-light'>Seccion de {categoria}</p>
                <div className={`row justify-content-around shadow rounded my-3 pb-3`}>
                    {
                        contenido.map((contenido) => {
                            return <Cards contenido={contenido} key={contenido.id} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FullContenido