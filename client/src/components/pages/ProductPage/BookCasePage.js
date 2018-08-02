import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookCases } from '../../../actions/smallproductsActionCreator';
import { NPrender } from '../../componentParts/PageList/NPlist';

class BookCasePage extends Component {

  componentWillMount(){
    this.props.fetchBookCases();
  }

  handleClick=(e)=>{
      e.preventDefault();
        window.location ='/productdetail/Book_Case/'+ e.target.value;
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
        <h1>Book Cases</h1>
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
export default connect(mapStateToProps, { fetchBookCases })(BookCasePage);
