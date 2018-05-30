import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchOne } from '../../../actions/productsActions';

class ProductDetail extends Component {
  componentWillMount() {
    this.props.fetchOne(this.props.match.params.id);
  }


  render(){
      const { post } = this.props;
    return (
      <div>
        <div className="item_container" style={{visibility: 'visible'}}>
           <div className="backNav">
              <Link to="/allproductpage">
                <button className="backButton">BACK TO PRODUCTS PAGE</button>
              </Link>
           </div>
           <hr />
           <div className="innerBody">
              <div className="item_img">
                 <img className="tImg" src="##.jpg"/>
              </div>
              <div>
                 <p>{post.cattype}</p>
              </div>
              <div className="item_info_box">
                 <p className="item_name">Product Name: {post.name}</p>
                 <p className="item_color"> Color: {post.color}</p>
                 <p className="item_weight"> Shipping Weight: {post.shipping_weight} </p>
                 <p className="item_weight"> Product Weight: {post.product_weight} </p>
                 <p className="item_size"> Package Dimensions: {post.pkg_width}W x {post.pkg_height}H x {post.pkg_depth}D </p>
                 <p className="item_size"> Actural Dimensions: {post.actual_width}W x {post.actual_height}H x {post.actual_depth}D </p>
              </div>
           </div>
        </div>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    post: state.posts.item
  });

export default connect(mapStateToProps, { fetchOne } ) (ProductDetail);
