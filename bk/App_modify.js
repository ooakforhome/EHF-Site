import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage'
import  AllProduct from './components/pages/ProductPage/AllProductPage'
import  BathroomFurniture  from './components/pages/AllProductPage/BathroomFurniture/BathroomFurniture'
import  NewProductForm  from './components/pages/NewProductForm/NewProductForm'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'
import NProductDetail from './components/pages/ProductDetail/NProductDetail'
import { UploadImg } from './components/pages/UploadImgs/UploadImgs'


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = { HomePage } />
        <Route path="/productpage" component = { AllProduct } />
        <Route path="/productpage/all" component = { AllProduct } />
        <Route path="/productpage/bathroom_furniture" component = { BathroomFurniture } />
        <Route exact path="/newproductform" component = { NewProductForm } />
        <Route exact path="/productdetail/:id" component = { ProductDetail } />
        <Route exact path="/nproductdetail/:id" component = { NProductDetail } />
        <Route exact path="/uploadimg" component = { UploadImg } />
      </Switch>
    </div>
  </Router>;

export default App;

// getProduct: function(id) {
//   return axios.get("/api/products/" + id);
// },
