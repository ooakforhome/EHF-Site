import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage';

// component show products pages
import { ProductPage } from './components/pages/ProductPage/ProductPage';
import AllProduct from './components/pages/ProductPage/AllProductPage';
import PetProducts from './components/pages/ProductPage/PetProductPage';
import BathroomFurniture  from './components/pages/ProductPage/BathroomFurniture';
import AccentFurnitures  from './components/pages/ProductPage/AccentFurnituresPage';

// component different pages
import NewProductForm  from './components/pages/NewProductForm/NewProductForm';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import BathProductDetail from './components/pages/ProductDetail/BathProductDetail';
import PetProductDetail from './components/pages/ProductDetail/PetProductDetail';
import AccentProductDetail from './components/pages/ProductDetail/AccentProductDetail';
import { UploadImg } from './components/pages/UploadImgs/UploadImgs';


const App = () =>
  <Router>
    <div>

        <Route exact path="/" component = { HomePage } />
        <Route path="/productpage" component = { ProductPage } />
          <Route path="/productpage/all" component = { AllProduct } />
          <Route path="/productpage/Pet_Products" component = { PetProducts } />
          <Route path="/productpage/bathroom_furniture" component = { BathroomFurniture } />
          <Route path="/productpage/Accent_Furniture" component = { AccentFurnitures } />
        <Route exact path="/newproductform" component = { NewProductForm } />
        <Route exact path="/productdetail/:id" component = { ProductDetail } />
          <Route path="/productdetail/bathroom_furniture/:id" component = { BathProductDetail } />
          <Route path="/productdetail/Pet_Products/:id" component = { PetProductDetail } />
          <Route path="/productdetail/Accent_Furniture/:id" component = { AccentProductDetail } />
        <Route exact path="/uploadimg" component = { UploadImg } />

    </div>
  </Router>;

export default App;

// getProduct: function(id) {
//   return axios.get("/api/products/" + id);
// },
