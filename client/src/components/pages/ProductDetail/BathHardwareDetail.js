import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchHardware } from '../../../actions/bathActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class BathHardwareDetail extends Component {

 componentWillMount() {
   this.props.fetchHardware(this.props.match.params.id);
 }

  render(){

    return (
      <div className="detailPage">
        <DetailPage item={this.props.bathItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    bathItem: state.bathItems.item
  });

export default connect(mapStateToProps, { fetchHardware } ) (BathHardwareDetail);
