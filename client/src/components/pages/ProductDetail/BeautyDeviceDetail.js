import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBeautyDevice } from '../../../actions/smallproductsActionCreator';
import { Link } from 'react-router-dom';
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';
import './detail.css'


class BeautyDeviceDetail extends Component {

 componentWillMount() {
   this.props.fetchBeautyDevice(this.props.match.params.id);
 }

  render(){

    return (
      <div className="detailPage">
        <div className="backNav">
            <Link to="/productpage/all">
              <button className="backButton">BACK TO PRODUCTS PAGE</button>
            </Link>
        </div>
        <DetailPage item={this.props.smallItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    smallItem: state.smallItems.item
  });

export default connect(mapStateToProps, { fetchBeautyDevice } ) (BeautyDeviceDetail);
