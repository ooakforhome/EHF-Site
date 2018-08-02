import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShowerCurtains } from '../../../actions/smallproductsActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';
// import _ from "lodash";
// import { Link } from 'react-router-dom';

class ShowerCurtainPage extends Component {

  componentWillMount(){
    this.props.fetchShowerCurtains();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/Shower_Curtain/'+ e.target.value;
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
        <h1>Shower Curtain</h1>
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
export default connect(mapStateToProps, { fetchShowerCurtains })(ShowerCurtainPage);
