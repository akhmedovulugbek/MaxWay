import React from "react";
import Navbar from "./conponents/Navbar/Navbar";
import Header from "./conponents/Header/Header";
import Products from "./conponents/Category/Products";
import Contact from "./conponents/Contact/Contact";
import About from "./conponents/About/About";
import Korzinka from "./conponents/Korzinka/Korzinka";
import Branches from "./conponents/Branches/Branches";
import Footer from "./conponents/Footer/Footer";
import Admin from "./conponents/Admin/Admin";
/* import authProvider from "./conponents/authProvider/authProvider"; */
/* import authProviderApp from "./conponents/authProvider/authProviderApp"; */
/* import * as serviceWorker from "./serviceWorker"; */
import {Switch, Route } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Products />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/branches">
                    <Branches />
                </Route>
                <Route exact path="/admin" >
                    <Admin />
                </Route>
                <Route exact path="/karzinka">
                    <Korzinka />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};


/* ReactDOM.render(
  
    <React.StrictMode>
      <Routing /> 
    </React.StrictMode>   
  ,
    document.getElementById('root')
  );
  
  serviceWorker.unregister(); */


export default Home;