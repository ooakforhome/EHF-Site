import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage'
import  AllProductPage  from './components/pages/AllProductPage/AllProductPage'
import  NewProductForm  from './components/pages/NewProductForm/NewProductForm'


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = { HomePage } />
        <Route exact path="/allproductpage" component = { AllProductPage } />
        <Route exact path="/newproductform" component = { NewProductForm } />
      </Switch>
    </div>
  </Router>;

export default App;
