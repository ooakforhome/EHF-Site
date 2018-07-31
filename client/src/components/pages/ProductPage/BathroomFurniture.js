import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from "lodash";
// import { Link } from 'react-router-dom';
import { fetchBaths } from '../../../actions/bathActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';

class BathroomFurniture extends Component {

  componentWillMount(){
    this.props.fetchBaths();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/bathroom_furniture/'+ e.target.value;
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
        <h1>Bath Products</h1>
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
export default connect(mapStateToProps, { fetchBaths })(BathroomFurniture);
