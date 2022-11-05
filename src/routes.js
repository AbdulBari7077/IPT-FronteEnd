import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import LandingPage from './pages/Landing/LandingPage';



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/landing" exact component={ LandingPage } />
                <Route path="/details/:type/:id" exact component={Details} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;