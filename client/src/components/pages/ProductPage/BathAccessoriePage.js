import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBathAccessories } from '../../../actions/bathActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';
// import _ from "lodash";
// import { Link } from 'react-router-dom';

class BathroomAccessories extends Component {

  componentWillMount(){
    this.props.fetchBathAccessories();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/Bath_Accessories/'+ e.target.value;
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
        <h1>Bath Accessories</h1>
        <div>
          <NPlist products = {this.props.bathItems}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  bathItems: state.bathItems.items
});
// rewrite the block bc it's in different format
export default connect(mapStateToProps, { fetchBathAccessories })(BathroomAccessories);
