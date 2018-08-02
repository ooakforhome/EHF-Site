import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGardens } from '../../../actions/smallproductsActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';
// import _ from "lodash";
// import { Link } from 'react-router-dom';

class GardenBarrelsPage extends Component {

  componentWillMount(){
    this.props.fetchGardens();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/Garden_Barrels/'+ e.target.value;
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
        <h1>Garden Barrels</h1>
        <div>
          <NPlist products = {this.props.smallItems}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  smallItems: state.smallItems.items
});
// rewrite the block bc it's in different format
export default connect(mapStateToProps, { fetchGardens })(GardenBarrelsPage);
