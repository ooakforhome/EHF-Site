import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchOne } from '../../../actions/productsActions';
import { UpdateParts } from '../../componentParts/UpdateProdcutParts/UpdateParts';
import {ImgUpdate} from '../../componentParts/ImgUpdate/ImgUpdate';
import { DetailPage } from '../../componentParts/DetailTemp/DetailTemp';
import API from '../../../utils/API';
import './detail.css'

class ProductDetail extends Component {
  constructor(props){
    super(props)
        this.state = {
        product: [],
      }
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
 }

 componentWillMount() {
   this.props.fetchOne(this.props.match.params.id);
 }

 componentDidMount =()=> {
   this.props.fetchOne(this.props.match.params.id);
 }

 onChanges = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   })
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
   .then(res => {
     console.log("hello");
   })
 }

  submitEdit = (e) => {
    e.preventDefault()
    API.updateProduct(this.props.match.params.id, {
      Product_Name: this.state.Product_Name,
      SKU: this.state.SKU,
      Materials: this.state.Materials,
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
    // const { files } = this.props;
    //
    //     if (!files) {
    //       return <div>Loading...</div>;
    //     }
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
          <ImgUpdate
            _handleSubmit = {this._handleSubmit}
            _handleImageChange = {this._handleImageChange}
          />
        </div>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    newproduct: state.newproducts.item
  });

export default connect(mapStateToProps, { fetchOne } ) (ProductDetail);
