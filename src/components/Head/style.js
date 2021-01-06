import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

export const ContainerStyled = styled.header`
    padding: 0 2em;
    background-color: #fff;
    overflow: hidden;

    h1 {
        background: url(${logo}) no-repeat center left;
        text-indent: -5000em;
    }

    @media only screen and (max-width: 700px) {
        padding: 0 1em;
    }
`;