import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/productsActions';
import { Field, reduxForm } from "redux-form";
// import { ImgUpload } from '../../componentParts/ImgUpload/ImgUpload';
import API from "../../../utils/API";
// import { ShowImg } from "../UploadImgs/ShowImg";
// import { Link } from "react-router-dom";
import './newProductForm.css';


class NewProductForm extends Component {

  constructor (props){
    super(props)
        // this.state = {
        //   images: 'null'
        // }
        // this._handleImageChange = this._handleImageChange.bind(this);
        // this._handleSubmit = this._handleSubmit.bind(this);
  }

  // _handleImageChange = (e) => {
  //   e.preventDefault();
  //     this.setState({
  //       file: e.target.files[0]
  //     });
  // }
  //
  // _handleSubmit = (e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //
  //   formData.append('file', this.state.file);
  //   API.uploadImg(formData)
  //   .then(res => console.log(res.data))
  //   // e.target.reset()
  // }

  onSubmit = (values) => {
    // values.preventDefault();
    // values.images = this.state.images[0].filename;
    API.addProduct(values)
      .then(res => console.log(res))
      // .then(()=> window.location = '/productpage/all')
  }

  renderField = (field) => {
    return(
      <div className={field.className}>
        <p>{field.label}</p>
        <input className="form-control" type="text"
          {...field.input} />
      </div>
    );
  }

  render(){
    const { handleSubmit } = this.props;

      // if(!files){
      //   return <div>wait for image</div>
      // }
    return(
      <div className="spdFormContainer">
        <div className="spdFormInnerContainer">
        <h1>ADD PRODUCT</h1>

        <div className="img_div">


        </div>
        <hr />

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <p>Category Type</p>
            <Field name="category_type" component="select" className="input_box">
                <option />
                  <option value="Accent Furniture">Accent Furniture</option>
                  <option value="Book Case">Book Case</option>
                  <option value="Bathroom Furniture">Bathroom Furniture</option>
                  <option value="Bath Accessories">Bath Accessories</option>
                  <option value="Hooks And Rods">Hooks And Rods</option>
                  <option value="Bath Hardware">Bath Hardware</option>
                  <option value="Over The Door">Over The Door</option>
                  <option value="Window Hardware">Window Hardware</option>
                  <option value="Window Panels">Window Panels</option>
                  <option value="Shower Curtain">Shower Curtain</option>
                  <option value="Beauty Device">Beauty Device</option>
                  <option value="Garden Barrels">Garden Barrels</option>
                  <option value="Outdoor Lighting">Outdoor Lighting</option>
                  <option value="Pet Products">Pet Products</option>
            </Field>
          </div>
          <Field
            label="Product Name"
            name="Product_Name"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="SKU"
            name="SKU"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="Materials"
            name="Materials"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="Color"
            name="Color"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="ship weight"
            name="Product_Shipping_Weight"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="product weight"
            name="Product_Weight"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="# Cartons"
            name="Number_of_Cartons"
            className="input_box_small"
            component={this.renderField}
          />
          <Field
            label="Warranty"
            name="Warranty"
            className="input_box_small"
            component={this.renderField}
          />
          <div className="input_box">
              <label>"Assembly Requir?"</label>
              <div>
                <label className="form_radio">
                  <Field
                    name="Assembly_required"
                    component="input"
                    type="radio"
                    value="YES"
                  />{' '}
                  YES
                </label>
                <label className="form_radio">
                  <Field
                    name="Assembly_required"
                    component="input"
                    type="radio"
                    value="NO"
                  />{' '}
                  NO
                </label>
              </div>
          </div>
          <Field
            label="care_instructions"
            name="Care_Instructions"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="Feature_1"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="Feature_2"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="Feature_3"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="Feature_4"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="Feature_5"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="Feature_6"
            className="input_box"
            component={this.renderField}
          />
          <Field
            label="features"
            name="Feature_7"
            className="input_box"
            component={this.renderField}
          />

          <div className="size_box">
              <Field
                label="pkg_width"
                name="Packing_Carton_Width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="pkg_height"
                name="Packing_Carton_Height"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="pkg_depth"
                name="Packing_Carton_Depth"
                className="input_box_small"
                component={this.renderField}
              />
          </div>
          <div className="size_box">
              <Field
                label="actual_width"
                name="Actual_Product_Width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="actual_height"
                name="Actual_Product_Height"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="actual_depth"
                name="Actual_Product_Length"
                className="input_box_small"
                component={this.renderField}
              />
          </div>
          <div className="size_box">
              <Field
                label="shelf_length"
                name="Shelf_Length"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="shelf_width"
                name="Shelf_Width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="inches_btw_shelf"
                name="Inches_in_between_shelf"
                className="input_box_small"
                component={this.renderField}
              />
          </div>

          <div className="size_box">
              <Field
                label="drawer_length"
                name="Drawer_Length"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="drawer_width"
                name="Drawer_Width"
                className="input_box_small"
                component={this.renderField}
              />
              <Field
                label="drawer_height"
                name="Drawer_height"
                className="input_box_small"
                component={this.renderField}
              />
          </div>
          <div>
            <Field
              label="product description"
              name="Product_Description"
              className="input_box_max"
              component={this.renderField}
            />
          </div>
          <hr className="formHR" />
          <div className="other_box">
              <Field
                label="shelf_weight_capacity"
                name="Maximum_Shelf_Weight_Capacity"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="led"
                name="LED"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="uv"
                name="UV"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="battery included"
                name="Battery_included"
                className="input_box"
                component={this.renderField}
              />
              <Field
                label="Battery type"
                name="Battery_type"
                className="input_box"
                component={this.renderField}
              />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    )
  }
}

function validate(values){
  const errors = {};

  if(!values.category_type) {
    errors.category_type = "What is the category type?";
  }

  return errors;
}


export default reduxForm({
  validate,
  form: "PostsNewProduct"
})(connect(null, { createPost })(NewProductForm));
