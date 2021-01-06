import styled from 'styled-components';

export const ContainerStyled = styled.article`
    margin-bottom: 3em;

    h2 {
        text-transform: uppercase;
    }

    footer {
        display: grid;
        grid-template-columns: 180px auto;
        font-style: italic;
        color: rgb(255, 88, 36, .7);

        small {
            font-size: 1em;
        }
    }

    @media only screen and (max-width: 375px) {
        footer {
            grid-template-columns: 140px auto;
        }
    }
`;