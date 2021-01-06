import React from 'react';
import { ContainerStyled } from './style';
import Post from '../Post';

const Posts = ({ items }) => {
    return (
        <ContainerStyled>
            {!items.length && <em>Carregando...</em>}
            {!!items.length && items.map((item, index) => <Post item={item} key={index} />)}
        </ContainerStyled>
    )
}

export default Posts;