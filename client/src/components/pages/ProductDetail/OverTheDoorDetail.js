import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchOtd } from '../../../actions/smallproductsActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class OverTheDoorDetail extends Component {

 componentWillMount() {
   this.props.fetchOtd(this.props.match.params.id);
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

export default connect(mapStateToProps, { fetchOtd } ) (OverTheDoorDetail);
