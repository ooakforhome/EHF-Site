import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBath } from '../../../actions/bathActionCreator';
// import API from '../../../utils/API';
import { Link } from 'react-router-dom';
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';
import './detail.css'
// import { UpdateParts } from '../../componentParts/UpdateProdcutParts/UpdateParts';
// import {ImgUpdate} from '../../componentParts/ImgUpdate/ImgUpdate'

class BathProductDetail extends Component {
 componentWillMount() {
   this.props.fetchBath(this.props.match.params.id);
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

export default connect(mapStateToProps, { fetchBath } ) (BathProductDetail);
