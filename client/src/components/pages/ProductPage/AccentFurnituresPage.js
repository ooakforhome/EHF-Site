import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from "lodash";
// import { Link } from 'react-router-dom';
import { fetchAccents } from '../../../actions/accentActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';

class AccentFurnitures extends Component {

  componentWillMount(){
    this.props.fetchAccents();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/Accent_Furniture/'+ e.target.value;
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
        <h1>Accent Furnitures</h1>
          <NPlist products = {this.props.accentItems}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  accentItems: state.accentItems.items
});
// rewrite the block bc it's in different format
export default connect(mapStateToProps, { fetchAccents })(AccentFurnitures);
