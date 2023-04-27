import React, { useState } from 'react';

import './styles.css';

export const Filters = ({ onTitleChange, onFilterChange }) => {
  const [selected, setSelected] = useState('nome')
  const [title, setTitle] = useState('')

  const handleSelectChange = (event) =>{
    setSelected(event.target.value)
    onFilterChange(event.target.value)
  }

  const handleTitle = (event) =>{
    setTitle(event.target.value)
    onTitleChange(event.target.value)
  }
  
  return (
    <div className="container text-center input-group mb-3">
      <input value={title} onChange={handleTitle} type="text" className="form-control" placeholder='Digite o título que deseja buscar...'/>
      <select value={selected} onChange={handleSelectChange} className='rounded-end p-2'>
        <option value="nome">Nome</option>
        <option value="ano">Ano</option>
        <option value="nota">Nota</option>
      </select>
    </div>
  );
};
