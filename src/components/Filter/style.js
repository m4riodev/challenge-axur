import styled from 'styled-components';

export const ContainerStyled = styled.form`
    fieldset {    
        border: none;

        legend {
            position: absolute;
            left: -5000em;
        }

        label {
            display: block;
            margin-bottom: .2em;
        }

        select {
            display: block;
            margin-bottom: 1em;
            width: 100%;
            height: 2.5em;
        }
    }
`;