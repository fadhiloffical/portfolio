import React from 'react';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import MainPage from "../components/MainPage/MainPage";
import About from  "../components/About/About"
import Portfolio from  "../components/Portfolio/Portfolio"
import Contact from  "../components/Contact/Contact"
import Error from  "../components/Error/Error"

import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';


const Layout = () => {
    
    return ( 
        <HashRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route path="*" component={Error}/>
                </Switch>
            <Footer/>
        </HashRouter>
     );
}
 
export default Layout;