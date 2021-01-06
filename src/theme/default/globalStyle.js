import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #000;
        font-family: 'Inter', sans-serif;

        button {
            border: none;
            border-radius: .3em;
            padding: 0 3em;
            line-height: 3;
            background-color: rgb(255, 88, 36);
            text-transform: uppercase;
            letter-spacing: .2em;
            font-weight: 700;
            color: #fff;
            outline: none;
            cursor: pointer;
            transition: all 0.25s ease 0s;

            &:hover {
                background-color: rgb(242, 66, 12);
            }
        }
    }

    @media only screen and (max-width: 500px) {
        body {
            font-size: 14px;
        }
    }
`;
 
export default GlobalStyle;