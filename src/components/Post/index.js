import React from 'react';
import Moment from 'react-moment';
import { ContainerStyled } from './style';

const Post = ({ item }) => {
    return (
        <ContainerStyled>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <footer>
                <Moment format="DD/MM/YYYY hh:mm">{item.metadata.publishedAt}</Moment>
                <small> {item.author}</small>
            </footer>
        </ContainerStyled>
    )
}

export default Post;