import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchWindowPanel } from '../../../actions/smallproductsActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class WindowPanelsDetail extends Component {

 componentWillMount() {
   this.props.fetchWindowPanel(this.props.match.params.id);
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

export default connect(mapStateToProps, { fetchWindowPanel } ) (WindowPanelsDetail);
