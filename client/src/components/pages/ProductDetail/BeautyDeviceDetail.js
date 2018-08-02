import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBeautyDevice } from '../../../actions/smallproductsActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class BeautyDeviceDetail extends Component {

 componentWillMount() {
   this.props.fetchBeautyDevice(this.props.match.params.id);
 }

  render(){

    return (
      <div className="detailPage">
        <DetailPage item={this.props.smallItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    smallItem: state.smallItems.item
  });

export default connect(mapStateToProps, { fetchBeautyDevice } ) (BeautyDeviceDetail);
