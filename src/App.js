import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
// import TopNav from "./containers/Nevbar/TopNav"
// import Nevbar from "./containers/Nevbar/Nevbar";
import Header from "./containers/Header"
import Footer from "./containers/Footer/Footer"
import HomeSidebar from "./containers/HomeSidebar/HomeSidebar";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import ProductListingWomen from './containers/ProductListingWomen'
import ProductListingMen from './containers/ProductListingMen'
import ProductListingJwel from './containers/ProductListingJwel'
import ProductListingElectronic from './containers/ProductListingElec'
import LowToHigh from './containers/LowToHigh'
import HighToLow from './containers/HighToLow'
import Signup from './containers/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HomeSidebar />
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/product" exact component={ProductListing} />
          <Route path="/product/men" exact component={ProductListingMen} />
          <Route path="/product/women" exact component={ProductListingWomen} />
          <Route path="/product/beauty" exact component={ProductListingJwel} />
          <Route path="/product/desc" exact component={HighToLow} />
          <Route path="/product/asc" exact component={LowToHigh} />
          <Route path="/product/electronic" exact component={ProductListingElectronic} />

          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
