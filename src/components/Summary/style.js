import styled from 'styled-components';

export const ContainerStyled = styled.ul`
    padding: 0 1em;
    
    li {
        margin-bottom: .5em;
        list-style: none;
        cursor: pointer;

        &:hover {
            color: rgb(255 88 36);
        }
    }
`;