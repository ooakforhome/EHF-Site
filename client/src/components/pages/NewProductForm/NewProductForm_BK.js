import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/productsActions';
import TopNav from '../../componentParts/Nav/TopNav';
import {ImgUpload} from '../../componentParts/ImgUpload/ImgUpload';
import API from '../../../utils/API'
import './newProductForm.css';

//Change SpdForm to NewProductForm
class NewProductForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      cattype:'',
      image:'',
      name:'',
      shipping_weight:'',
      product_weight:'',
      color:'',
      cartons:'',
      pkg_width:'',
      pkg_height:'',
      pkg_depth:'',
      actual_width:'',
      actual_height:'',
      actual_depth:'',
      materials:'',
      care_instructions:'',
      assembly_required:'',
      Warranty:'',
      detail_measurement:'',
      features:'',
      shelf_length:'',
      shelf_width:'',
      inches_btw_shelf:'',
      drawer_length:'',
      drawer_width:'',
      drawer_height:'',
      shelf_weight_capacity:'',
      solar_panel:'',
      led_color:'',
      led:'',
      uv:'',
      battery_included:'',
      battery_type:'',
      capacity:''
    }
    this.onChange = this.onChange.bind(this);
    this.handleOnImgChange = this.handleOnImgChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleOnImgChange = e => {
    e.preventDefault();
    this.setState({
      image: e.target.files[0]
    });
  }

  onSubmit() {
      const post = {
        cattype:this.state.cattype,
        image :this.state.image,
        name :this.state.name,
        shipping_weight :this.state.shipping_weight,
        product_weight :this.state.product_weight,
        color :this.state.color,
        cartons :this.state.cartons,
        pkg_width :this.state.pkg_width,
        pkg_height :this.state.pkg_height,
        pkg_depth :this.state.pkg_depth,
        actual_width :this.state.actual_width,
        actual_height :this.state.actual_height,
        actual_depth :this.state.actual_depth,
        materials :this.state.materials,
        care_instructions :this.state.care_instructions,
        assembly_required :this.state.assembly_required,
        Warranty :this.state.Warranty,
        detail_measurement :this.state.detail_measurement,
        features :this.state.features,
        shelf_length :this.state.shelf_length,
        shelf_width :this.state.shelf_width,
        inches_btw_shelf :this.state.inches_btw_shelf,
        drawer_length :this.state.drawer_length,
        drawer_width :this.state.drawer_width,
        drawer_height :this.state.drawer_height,
        shelf_weight_capacity :this.state.shelf_weight_capacity,
        solar_panel :this.state.solar_panel,
        led_color :this.state.led_color,
        led :this.state.led,
        uv :this.state.uv,
        battery_included :this.state.battery_included,
        battery_type :this.state.battery_type,
        capacity :this.state.capacity
      }
      API.addProduct(post)
        .then( res => {
          console.log(res.json())
          // window.location = '/'
        })
          console.log("success")
    };

  render(){
    return(
      <div className="spdFormContainer">
      <TopNav />
      <div className="spdFormInnerContainer">
        <h1>ADD PRODUCT</h1>
        <ImgUpload />
        <form onSubmit={this.onSubmit}>
          <input
              name="cattype"
              value = {this.state.cattype}
              placeholder = "category"
              type="text"
              onChange = {this.onChange}/>
          <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.onChange}
              value={this.state.name} />
          <input
              name="image"
              placeholder = "image"
              type="file"
              onChange = {this.onImgChange}/>
          <input
              type="text"
              name="color"
              placeholder="color"
              onChange={this.onChange}
              value={this.state.color} />
          <input
              type="text"
              name="shipping_weight"
              placeholder="shipping_weight"
              onChange={this.onChange}
              value={this.state.shipping_weight} />
          <input
              type="text"
              name="product_weight"
              placeholder="product_weight"
              onChange={this.onChange}
              value={this.state.product_weight} />
          <input
              name="materials"
              value = {this.state.materials}
              placeholder = "materials"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="cartons"
              value = {this.state.cartons}
              placeholder = "cartons"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="care_instructions"
              value = {this.state.care_instructions}
              placeholder = "care_instructions"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="assembly_required"
              value = {this.state.assembly_required}
              placeholder = "assembly_required"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="Warranty"
              value = {this.state.Warranty}
              placeholder = "Warranty"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="detail_measurement"
              value = {this.state.detail_measurement}
              placeholder = "detail_measurement"
              type="text"
              onChange = {this.onChange}/>

          <div className="formsize">
            <h2>Features</h2>
              <input
                  className="feature"
                  name="features"
                  value = {this.state.features}
                  placeholder = "features"
                  type="text"
                  onChange = {this.onChange}/>
          </div>


          <div className="formsize">
          <h2>Product Size</h2>
          <input
              type="text"
              name="pkg_width"
              placeholder="pkg_width"
              onChange={this.onChange}
              value={this.state.pkg_width} />
          <input
              type="text"
              name="pkg_height"
              placeholder="pkg_height"
              onChange={this.onChange}
              value={this.state.pkg_height} />
          <input
              type="text"
              name="pkg_depth"
              placeholder="pkg_depth"
              onChange={this.onChange}
              value={this.state.pkg_depth} />
          <input
              type="text"
              name="actual_width"
              placeholder="actual_width"
              onChange={this.onChange}
              value={this.state.actual_width} />
          <input
              type="text"
              name="actual_height"
              placeholder="actual_height"
              onChange={this.onChange}
              value={this.state.actual_height} />
          <input
              type="text"
              name="actual_depth"
              placeholder="actual_depth"
              onChange={this.onChange}
              value={this.state.actual_depth} />
          <input
              name="shelf_length"
              value = {this.state.shelf_length}
              placeholder = "shelf_length"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="shelf_width"
              value = {this.state.shelf_width}
              placeholder = "shelf_width"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="inches_btw_shelf"
              value = {this.state.inches_btw_shelf}
              placeholder = "inches_btw_shelf"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="drawer_length"
              value = {this.state.drawer_length}
              placeholder = "drawer_length"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="drawer_width"
              value = {this.state.drawer_width}
              placeholder = "drawer_width"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="drawer_height"
              value = {this.state.drawer_height}
              placeholder = "drawer_height"
              type="text"
              onChange = {this.onChange}/>
          </div>

          <div className="formsize">
          <h2>Other</h2>
          <input
              name="shelf_weight_capacity"
              value = {this.state.shelf_weight_capacity}
              placeholder = "shelf_weight_capacity"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="solar_panel"
              value = {this.state.solar_panel}
              placeholder = "solar_panel"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="led_color"
              value = {this.state.led_color}
              placeholder = "led_color"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="led"
              value = {this.state.led}
              placeholder = "led"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="uv"
              value = {this.state.uv}
              placeholder = "uv"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="battery_included"
              value = {this.state.battery_included}
              placeholder = "battery_included"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="battery_type"
              value = {this.state.battery_type}
              placeholder = "battery_type"
              type="text"
              onChange = {this.onChange}/>
          <input
              name="capacity"
              value = {this.state.capacity}
              placeholder = "capacity"
              type="text"
              onChange = {this.onChange}/>
            </div>
            <br />
          <button type="submit" className="spdForm">Submit</button>
        </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { createPost })(NewProductForm);
