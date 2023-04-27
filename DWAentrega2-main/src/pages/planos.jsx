import React from 'react';
import Title from '../components/Title/index';
import Card from '../components/Card/index';

function Planos() {
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} 
            />
            <Card/>
        </div>
    )
}

export default Planos;