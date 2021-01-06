import React from 'react';
import GlobalStyle from './theme/default/globalStyle';
import Head from './components/Head';

const App = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Head />
            { children }
        </>
    )
}

export default App;