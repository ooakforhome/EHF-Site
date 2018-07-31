import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productsActions';
import {Prender} from '../../componentParts/PageList/Plist';
import { Link } from 'react-router-dom';
import "./allproduct.css";

//SPD to AllProductPage
class AllProductPage extends Component {

//mount Redux data info.
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const Plist = ({products}) => (
      <div>
        {products.map((product, i) =>
          <Prender  key={i}
                  {...product}/>
        )}
      </div>
    )
    return(
      <div>
        <h1>Products ALL</h1>
        <Link to="/newproductform">
          <button>Add Product</button>
        </Link>
        <Plist products = {this.props.kposts}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  kposts: state.kposts.items
});

export default connect(mapStateToProps, { fetchProducts })(AllProductPage);
