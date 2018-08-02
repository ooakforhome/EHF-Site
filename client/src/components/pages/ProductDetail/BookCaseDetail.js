import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBookCase } from '../../../actions/smallproductsActionCreator';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class BookCaseDetail extends Component {

 componentWillMount() {
   this.props.fetchBookCase(this.props.match.params.id);
 }

  render(){

    return (
      <div className="detailPage">
        <DetailPage item={this.props.smallItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    smallItem: state.smallItems.item
  });

export default connect(mapStateToProps, { fetchBookCase } ) (BookCaseDetail);
