import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import { Link } from 'react-router-dom';
import { fetchBaths } from '../../../actions/bathActionCreator';

class BathroomFurniture extends Component {

  componentWillMount(){
    this.props.fetchBaths();
  }

  renderItems(){
    return _.map(this.props.bathItems, item => {
      return(
        <div className="item_container">
          <div className="innerBody">
            <div className="item_img">
              <img className="tImg" alt={item.Product_Name} src={"http://localhost:3001/api/image/"+ item.images}/>
            </div>
            <div><p>Category: {item.category_type}</p></div>
            <div className="item_info_box">
              <p className="item_name">Product Name: {item.Product_Name}</p>
              <p className="item_color"> Color: {item.Color}</p>
              <p className="item_weight"> Shipping Weight: {item.Product_Shipping_Weight} </p>
              <p className="item_weight"> Product Weight: {item.Product_Weight} </p>
              <p className="item_size"> Package Dimensions: {item.Packing_Carton_Width}W x {item.Packing_Carton_Height}H x {item.Packing_Carton_Depth}D </p>
              <p className="item_size"> Actural Dimensions: {item.Actual_Product_Width}W x {item.Actual_Product_Height}H x {item.Actual_Product_Length}D </p>
            </div>
            <div className="edit_box">
            <hr />
            <Link to={`/productdetail/bathroom_furniture/${item._id}`}>
              <button>
                Detail
              </button>
            </Link>
            </div>
          </div>
        </div>
      )
    })
  }


  render(){
    return(
      <div>
        <h1>Bath Products</h1>
        <div>
          {this.renderItems()}
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  bathItems: state.bathItems.items
});
// rewrite the block bc it's in different format
export default connect(mapStateToProps, { fetchBaths })(BathroomFurniture);
