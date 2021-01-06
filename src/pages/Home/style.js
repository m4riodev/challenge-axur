import styled from 'styled-components';

export const ContainerStyled = styled.div`
    overflow: hidden;
    padding: 2em;
    background-color: #000;

    > h2 {
        font-size: 2em;
        color: #fff;
    }

    aside {
        float: right;
        margin: 0 0 2em 2em;
        border-radius: .3em;
        padding: 1em .5em;
        width: 400px;
        background-color: #fff;

        h3 {
            padding-left: .8em;
        }
    }

    @media only screen and (max-width: 768px) {
        aside {
            width: 300px;
        }
    }

    @media only screen and (max-width: 700px) {
        padding: 1em;
        
        aside {
            float: none;
            margin-left: 0;
            width: calc(100% - 1em);
            display: grid;
            grid-template-columns: 1fr 1fr;

            form {
                padding-top: 1em;
            }
        }
    }

    @media only screen and (max-width: 500px) {
        aside {
            float: none;
            margin-left: 0;
            width: calc(100% - 1em);
            display: block;

            form {
                padding-top: 0;
            }
        }
    }
`;