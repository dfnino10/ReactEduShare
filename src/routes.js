//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Page404 from './components/Page404/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
            <Route component={Page404}/>
        </Switch>
    </App>

export default AppRoutes;

