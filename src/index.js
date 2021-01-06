import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <App>
            <Route path="/" exact={true} component={Home} />
        </App>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);