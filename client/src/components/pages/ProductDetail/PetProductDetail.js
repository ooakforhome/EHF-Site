import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPet } from '../../../actions/petActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';


class PetProductDetail extends Component {

 componentWillMount() {
   this.props.fetchPet(this.props.match.params.id);
 }

  render(){
    return (
      <div className="detailPage">
        <DetailPage item={this.props.petItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    petItem: state.petItems.item
  });

export default connect(mapStateToProps, { fetchPet } ) (PetProductDetail);
