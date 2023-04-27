import React from 'react';
import Title from '../components/Title/index';

function Sobre() {

    return (
        <div>
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"}
            />
            <div className='container mx-5 text-center row'>
                <div className='col px-5'>
                    <p align="justify">A <b>Notflix</b> é uma empresa focada em distribuição de filmes e séries por um preço acessível para o público geral.</p>
                    <p>Os assinantes podem ver nosso conteúdo em qualquer coisa que tenha uma tela e internet. Nosso ponto forte são as séries disponibilizadas, mas temos ótimos filmes em lançamento, como: A paixão de Cristo, Charles Chaplin: Tempos Modernos e 2001 - Uma Odisséia no Espaço. Aproveite!</p>
                </div>
                <div className='col d-flex align-items-center justify-content-center'>
                    <img src="/assets/images/notflix.png"/>
                </div>
            </div>
        </div>
    )
}

export default Sobre;