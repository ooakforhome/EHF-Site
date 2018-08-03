import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div className="backNav">
            <Link to="/productpage/all">
              <button className="backButton">BACK TO PRODUCTS PAGE</button>
            </Link>
        </div>
        <DetailPage item={this.props.bathItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    bathItem: state.bathItems.item
  });

export default connect(mapStateToProps, { fetchHardware } ) (BathHardwareDetail);
