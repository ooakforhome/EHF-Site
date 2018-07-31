import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPet } from '../../../actions/petActionCreator';
import './detail.css'

class PetProductDetail extends Component {

 componentWillMount() {
   this.props.fetchPet(this.props.match.params.id);
 }

  render(){
    const {petItem} = this.props;
    return (
      <div className="detailPage">

        <div>
          <div className="top_general">
            <img src={`http://__/${petItem.images}`} alt={petItem.Product_Name} className="detail_image"/>
            <h1> {petItem.category_type} </h1>
            <h2> {petItem.Product_Name} </h2>
            <h2> {petItem.SKU} </h2>
          </div>
          <div classNmae="all_product_general">
            <p>Color : {petItem.Color} </p>
            <p>Materials : {petItem.Materials} </p>
            <p>Product Shipping Weight : {petItem.Product_Shipping_Weight} LB</p>
            <p>Carton Width : {petItem.Packing_Carton_Width} W</p>
            <p>Carton Length : {petItem.Packing_Carton_Length} L</p>
            <p>Carton Height : {petItem.Packing_Carton_Height} H</p>
            <p>Product Weight : {petItem.Product_Weight} </p>
            <p>Actual Width : {petItem.Actual_Product_Width} W</p>
            <p>Actual Length : {petItem.Actual_Product_Length} L</p>
            <p>Actual Height : {petItem.Actual_Product_Height} H</p>
          </div>
          <div className="description">
            <p>Feature 1 : {petItem.Feature_1} </p>
            <p>Feature 2 : {petItem.Feature_2} </p>
            <p>Feature 3 : {petItem.Feature_3} </p>
            <p>Feature 4 : {petItem.Feature_4} </p>
            <p>Feature 5 : {petItem.Feature_5} </p>
            <p>Feature 6 : {petItem.Feature_6} </p>
            <p>Feature 7 : {petItem.Feature_7} </p>
            <p>Feature 8 : {petItem.Feature_8} </p>
            <p>Feature 9 : {petItem.Feature_9} </p>
            <p>Product Description: {petItem.Product_Description} </p>
          </div>
        </div>

      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    petItem: state.petItems.item
  });

export default connect(mapStateToProps, { fetchPet } ) (PetProductDetail);
