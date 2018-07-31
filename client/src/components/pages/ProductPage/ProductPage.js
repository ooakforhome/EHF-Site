import React, { Component } from "react";
import CategoriesNav from '../../componentParts/Nav/CategoriesNav';
import { Link } from 'react-router-dom';
import "./allproduct.css";

//SPD to AllProductPage
export class ProductPage extends Component {

  handleClickthenav = (e) => {
    e.preventDefault();
    const theName = e.target.id.split(' ').join('_');
    console.log(theName)
    window.location = '/productpage/'+theName;
  }
// Body of visual part
  render() {
    return(
      <div>
        <CategoriesNav clickthenav = {this.handleClickthenav.bind(this)} />
        <Link to="/newproductform">
          <button>Add Product</button>
        </Link>
      </div>
    );
  }
}
