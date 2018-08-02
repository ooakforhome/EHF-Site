import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../../../actions/petActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';
// import _ from "lodash";
// import { Link } from 'react-router-dom';

class PetProducts extends Component {

  componentWillMount(){
    this.props.fetchPets();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/Pet_Products/'+ e.target.value;
  }

  render(){
    const NPlist = ({products}) => (
      <div>
        {products.map((product, i) =>
          <NPrender key={i}
                  {...product}
                  handleClick={this.handleClick.bind(this)}
                  />
        )}
      </div>
    )
    return(
      <div>
        <h1>Pet Products</h1>
        <div>
          <NPlist products = {this.props.petItems}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  petItems: state.petItems.items
});

export default connect(mapStateToProps, { fetchPets })(PetProducts);
