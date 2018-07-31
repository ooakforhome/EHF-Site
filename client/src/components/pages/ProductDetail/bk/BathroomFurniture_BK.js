import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBaths } from '../../../actions/bathActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';

class BathroomFurniture extends Component {

  componentWillMount(){
    this.props.fetchBaths();
  }

  render(){

    const NPlist = ({products}) => (
      <div>
        {products.map((product, i) =>
          <NPrender  key={i}
                  {...product}/>
        )}
      </div>
    )

    return(
      <div>
        <h1>Bath Furnitures</h1>
        <NPlist products = {this.props.bathItems}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bathItems: state.bathItems.items
});
// rewrite the block bc it's in different format
export default connect(mapStateToProps, { fetchBaths })(BathroomFurniture);
