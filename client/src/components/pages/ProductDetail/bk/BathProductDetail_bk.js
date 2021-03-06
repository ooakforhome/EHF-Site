import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchBath } from '../../../actions/bathActionCreator';
import { UpdateParts } from '../../componentParts/UpdateProdcutParts/UpdateParts';
import {ImgUpdate} from '../../componentParts/ImgUpdate/ImgUpdate'
import API from '../../../utils/API';
import './detail.css'

class ProductDetail extends Component {
  constructor(props){
    super(props)
        this.state = {
        product: [],
        images: this.props.images
      }
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
 }

 componentWillMount() {
   this.props.fetchBath(this.props.match.params.id);
 }

 componentDidMount =()=> {
   this.props.fetchBath(this.props.match.params.id);
 }

  onChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loadImg = () => {
    API.getLastImg()
      .then( res =>
        this.setState({
          images: res.data
        })
      )
      .catch( err => console.log(err));
  }

  _handleImageChange(e) {
    e.preventDefault();
      this.setState({
        file: e.target.files[0]
      });
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
      const { bathItem } = this.props;
    return (
      <div className="detailPage">
        <div className="item_container" style={{visibility: 'visible'}}>
          <div className="backNav">
              <Link to="/allproductpage">
                <button className="backButton">BACK TO PRODUCTS PAGE</button>
              </Link>
          </div>
          <ImgUpdate
            _handleSubmit = {this._handleSubmit}
            _handleImageChange = {this._handleImageChange}
          />
           <hr />
          <div className="product_box">
            <div className="item_img">
              <img className="tImg"
                 alt={bathItem._id}
                 src={"http://localhost:3001/api/image/"+bathItem.images}
              />
            </div>
            <div>
              <p>Category: {bathItem.category_type}</p>
            </div>
            <div className="item_info_box">
             <p className="item_name">Product Name: {bathItem.Product_Name}</p>
             <p>SKU: {bathItem.SKU}</p>
             <p>Materials: {bathItem.Materials}</p>
             <p className="item_color"> Color: {bathItem.Color}</p>
             <p className="item_size"> Package Dimensions: {bathItem.Packing_Carton_Width}W x {bathItem.Packing_Carton_Height}H x {bathItem.Packing_Carton_Depth}D </p>
             <p className="item_size"> Actural Dimensions: {bathItem.Actual_Product_Width}W x {bathItem.Actual_Product_Height}H x {bathItem.Actual_Product_Length}D </p>
            </div>
          </div>
        </div>

        <div className="updateBlock">
          <UpdateParts
           submitEdit = {this.submitEdit}
           onChanges = {this.onChanges}
           />
        </div>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    bathItem: state.bathItems.item
  });

export default connect(mapStateToProps, { fetchBath } ) (ProductDetail);
