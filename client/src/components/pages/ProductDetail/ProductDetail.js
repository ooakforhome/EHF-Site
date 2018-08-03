import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchOne } from '../../../actions/productsActions';
import { UpdateParts } from '../../componentParts/UpdateProdcutParts/UpdateParts';
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';
import API from '../../../utils/API';
import './detail.css'

class ProductDetail extends Component {
  constructor(props){
    super(props)
        this.state = {
        product: [],
      }
      this._handleSubmit = this._handleSubmit.bind(this);
 }

 componentWillMount() {
   this.props.fetchOne(this.props.match.params.id);
 }

  _handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', this.state.file);
    API.uploadImg(formData)
  }

  submitEdit = (e) => {
    e.preventDefault()
    API.updateProduct(this.props.match.params.id, {
      name: this.state.name,
      images: this.state.images,
      color: this.state.color,
      pkg_width: this.state.pkg_width,
      pkg_height: this.state.pkg_height,
      pkg_depth: this.state.pkg_depth,
      actual_width: this.state.actual_width,
      actual_height: this.state.actual_height,
      actual_depth: this.state.actual_depth
    })
      .then(res => window.location.reload())
  }


  render(){
    return (
      <div className="detailPage">
        <div className="item_container" style={{visibility: 'visible'}}>
          <div className="backNav">
              <Link to="/productpage/all">
                <button className="backButton">BACK TO PRODUCTS PAGE</button>
              </Link>
          </div>

           <div className="detailPage">
             <DetailPage item={this.props.newproduct}/>
           </div>

          <div className="updateBlock">
            <UpdateParts
             submitEdit = {this.submitEdit}
             onChanges = {this.onChanges}
             />
          </div>
        </div>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    newproduct: state.newproducts.item
  });

export default connect(mapStateToProps, { fetchOne } ) (ProductDetail);
