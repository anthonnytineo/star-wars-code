import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components2/Navbar";
import Footer from "./components2/Footer";
import Index2 from "./components2/Index2";
import InfoCard from "./components2/InfoCards";
import InfoPlanets from "./components2/InfoPlanets";
import injectContext from "./store/appContext";
import "./App.css";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index2} />
          <Route exact path="/infocard/:id" component={InfoCard} />
          <Route exact path="/infoplanets/:id" component={InfoPlanets} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default injectContext(App);
