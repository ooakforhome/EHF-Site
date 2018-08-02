import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWindowHardware } from '../../../actions/smallproductsActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class WindowHardwareDetail extends Component {

 componentWillMount() {
   this.props.fetchWindowHardware(this.props.match.params.id);
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

export default connect(mapStateToProps, { fetchWindowHardware } ) (WindowHardwareDetail);
