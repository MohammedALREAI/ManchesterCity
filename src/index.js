import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import './firebase';
import Layout from "./HOC/Layout";

import Home from './Components/home/index'
import SignIn from './Components/singin/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
              <Layout>
                   <Switch>
                        <Route exact component={Home} path="/" />
                        <Route  component={SignIn} path="/sign_in" />
                   </Switch>
              </Layout>        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

