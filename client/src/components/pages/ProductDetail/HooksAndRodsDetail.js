import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchHookNRod } from '../../../actions/smallproductsActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class HooksAndRodsDetail extends Component {

 componentWillMount() {
   this.props.fetchHookNRod(this.props.match.params.id);
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

export default connect(mapStateToProps, { fetchHookNRod } ) (HooksAndRodsDetail);
