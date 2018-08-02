import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBathAccessorie } from '../../../actions/bathActionCreator';
// import { UpdateParts } from '../../componentParts/UpdateProdcutParts/UpdateParts';
import API from '../../../utils/API';
import './detail.css'
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';

class BathAccessorieDetail extends Component {
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
   this.props.fetchBathAccessorie(this.props.match.params.id);
 }

 componentDidMount =()=> {
   this.props.fetchBathAccessorie(this.props.match.params.id);
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
      Product_Name: this.state.Product_Name,
      images: this.state.images,
      Color: this.state.Color,
      Packing_Carton_Width: this.state.Packing_Carton_Width,
      Packing_Carton_Height: this.state.Packing_Carton_Height,
      Packing_Carton_Depth: this.state.Packing_Carton_Depth,
      Actual_Product_Width: this.state.Actual_Product_Width,
      Actual_Product_Height: this.state.Actual_Product_Height,
      Actual_Product_Length: this.state.Actual_Product_Length
    })
      .then(res => window.location.reload())
  }

  render(){

    return (
      <div className="detailPage">
        <DetailPage item={this.props.bathItem}/>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    bathItem: state.bathItems.item
  });

export default connect(mapStateToProps, { fetchBathAccessorie } ) (BathAccessorieDetail);
