import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/productsActions';
import { NPrender } from '../../componentParts/PageList/NPlist';
import "./allproduct.css";

//SPD to AllProductPage
class AllProductPage extends Component {

//mount Redux data info.
  componentWillMount() {
    this.props.fetchProducts();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/'+ e.target.value;
  }

  render() {
    const NPlist = ({products}) => (
      <div>
        {products.map((product, i) =>
          <NPrender key={i}
                  {...product}
                  handleClick={this.handleClick.bind(this)}
                  />
        )}
      </div>
    )
    return(
      <div>
        <h1>Products ALL</h1>
        <div>
          <NPlist products = {this.props.newproducts}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  newproducts: state.newproducts.items
});

export default connect(mapStateToProps, { fetchProducts })(AllProductPage);
