import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';
import Comments from '../components/Comments/index';
import axios from 'axios';


function Detalhes() {
    const [filmeEscolhido, setFilmeEscolhido] = useState(null)
    const { id, titulo } = useParams()
    const [erro, setErro] = useState(false)

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then((response) => {
                setFilmeEscolhido(response.data);
            })
            .catch((error) => {
                console.log(error);
                setErro(true)
            });
    }, [id])

    if (erro) {
        return <h3 className='text-center'>Filme não encontrado!</h3>
    }

    if (!filmeEscolhido) {
        return <p className='text-center'>Carregando...</p>;
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <Title
                title={"Detalhes"}
                text="" />
            <div className="container row mb-5 text-center w-100">
                <div className='col'>
                    <img src={filmeEscolhido.poster} alt='poster do filme'/>
                </div>
                <div className='col d-flex flex-column justify-content-center infos'>
                    <h3 className='mb-4'>{filmeEscolhido.titulo}</h3>
                    <div>
                        <p><b>Ano: </b>{filmeEscolhido.ano}</p>
                        <p align="justify"><b>Sinopse: </b>{filmeEscolhido.sinopse}</p>
                        <div className="btn btn-primary">
                            {filmeEscolhido.assistido ? "Assistir Novamente" : "Assistir"}
                        </div>
                    </div>
                </div>
                <Comments id={filmeEscolhido.id}/>
            </div>
        </div>
    )
}

export default Detalhes;