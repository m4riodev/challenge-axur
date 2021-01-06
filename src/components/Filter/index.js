import React, { useState } from 'react';
import { ContainerStyled } from './style';

const Filter = ({ data, callback }) => {
    const [dataState, setDataState] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataState({...dataState, [name]: value });
    }

    return (
        <ContainerStyled onSubmit={(e) => callback(e, dataState)}>
            <fieldset>
                <legend>Filtro</legend>
                <label htmlFor="author">Autor: </label>
                <select name="author" onChange={handleChange}>
                    <option value="">Selecione</option>
                    {data.map((author, index) => (
                        <option key={index} value={author.name}>{author.name}</option>
                    ))}
                </select>
                <label htmlFor="order">Ordem: </label>
                <select name="order" onChange={handleChange}>
                    <option value="newest">Mais recentes</option>
                    <option value="older">Mais antigos</option>
                </select>
                <button type="submit">Filtrar</button>
            </fieldset>
        </ContainerStyled>
    )
}

export default Filter;