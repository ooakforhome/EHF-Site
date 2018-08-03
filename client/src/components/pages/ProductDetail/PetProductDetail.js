import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPet } from '../../../actions/petActionCreator';
import { Link } from 'react-router-dom';
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';
import './detail.css';


class PetProductDetail extends Component {

 componentWillMount() {
   this.props.fetchPet(this.props.match.params.id);
 }

  render(){
    return (
      <div className="detailPage">
        <div className="backNav">
            <Link to="/productpage/all">
              <button className="backButton">BACK TO PRODUCTS PAGE</button>
            </Link>
        </div>
        <DetailPage item={this.props.petItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    petItem: state.petItems.item
  });

export default connect(mapStateToProps, { fetchPet } ) (PetProductDetail);
