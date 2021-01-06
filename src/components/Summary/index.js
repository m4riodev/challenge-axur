import React from 'react';
import { ContainerStyled } from './style';

const Summary = ({ items, callback }) => {
    return (
        <ContainerStyled>
            {items.map((item, index) => (
                <li key={index} onClick={() => callback(null, {title: item.title})}>{item.title}</li>
            ))}
        </ContainerStyled>
    )
}

export default Summary;