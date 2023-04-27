import React, { useState } from 'react';
import Title from '../components/Title/index';
import { Filters } from '../components/Filters/index';
import { Filmes } from '../components/Filmes/index';

function Home() {
    const [title, setTitle] = useState('')
    const [filter, setFilter] = useState('nome')

    const handleTitleChange = (value) => {
        setTitle(value)
    }

    const handleFilterChange = (value) => {
        setFilter(value)
    }

    return (
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
            <Filters onTitleChange={handleTitleChange} onFilterChange={handleFilterChange}/>
            <Filmes filter={filter} findTitle={title}/>
        </div>
    )
}
export default Home;