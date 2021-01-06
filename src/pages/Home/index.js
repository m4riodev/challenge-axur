import React, { useEffect, useState } from 'react';
import { getData } from '../../api';
import { ContainerStyled } from './style';
import Summary from '../../components/Summary';
import Filter from '../../components/Filter';
import Posts from '../../components/Posts';

const Home = () => {
    const [appState, setAppState] = useState({
        publications: [],
        filtered: [],
        authors: [],
        order: 'newest'
    });

    useEffect(() => {
        const getPublications = async () => {
            const response = await getData();
            setAppState({
                ...appState, 
                publications: response.publications,
                authors: response.authors
            });
        }

        getPublications();
    }, [setAppState]);

    const filterSubmit = (e, data) => {
        if(e) e.preventDefault();

        let items = appState.publications;

        if(data.title)
            items = items.filter(pub => pub.title === data.title);
        else if(data.author)
            items = items.filter(pub => pub.author === data.author);

        if(data.order === 'older')
            items = items.slice().sort((a, b) => a.metadata.publishedAt - b.metadata.publishedAt);
        else if(data.order === 'newest')
            items = items.slice().sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt);

        setAppState({...appState, filtered: items });
    }

    return (
        <ContainerStyled>
            <aside>
                <Filter 
                    data={appState.authors} 
                    callback={filterSubmit}
                />
                <div>
                    <h3>Últimas publicações</h3>
                    <Summary 
                        items={appState.publications} 
                        callback={filterSubmit}
                    />
                </div>
            </aside>
            <Posts 
                items={
                    appState.filtered.length ? 
                    appState.filtered : 
                    appState.publications
                } 
            />
            {appState.filtered.length && <button type="button" onClick={() => setAppState({...appState, filtered: [] })}>Voltar</button>}
        </ContainerStyled>
    );
}

export default Home;