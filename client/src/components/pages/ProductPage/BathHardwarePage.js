import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHardwares } from '../../../actions/bathActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';
// import _ from "lodash";
// import { Link } from 'react-router-dom';

class BathroomHardwares extends Component {

  componentWillMount(){
    this.props.fetchHardwares();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/Bath_Hardware/'+ e.target.value;
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
        <h1>Bath Hardwares</h1>
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
export default connect(mapStateToProps, { fetchHardwares })(BathroomHardwares);
