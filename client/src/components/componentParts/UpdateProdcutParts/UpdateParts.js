import React, { Component } from 'react';
import './style.css';

export class UpdateParts extends Component{
 render(){
   return(
     <div className='productEditClass'>
       <h2>EDIT SECTION</h2>

       <div>
        <div className="md">
           <p className='editInput'>Name</p>
           <input
            className='editInput'
             value = {this.props.Product_Name}
             onChange = {this.props.onChanges}
             name = "Product_Name"
             placeholder = "Change Item's Name"
           />
         </div>
         <div className="md">
           <p className='editInput'>SKU</p>
           <input
            className='editInput'
             value = {this.props.SKU}
             onChange = {this.props.onChanges}
             name = "SKU"
             placeholder = "Change SKU"
           />
         </div>
         <div className="md">
           <p className='editInput'>Materials</p>
           <input
            className='editInput'
             value = {this.props.Materials}
             onChange = {this.props.onChanges}
             name = "Materials"
             placeholder = "Change Materials  "
           />
         </div>
         <div className="md">
           <p className='editInput'>Color</p>
           <input
            className='editInput'
             value = {this.props.Color}
             onChange = {this.props.onChanges}
             name = 'Color'
             placeholder = "change color"
           />
         </div>

        <div className="lg">
          <div className="sm">
             <p className='editInput'>pkg_width</p>
             <input
              className='editInput'
               value = {this.props.Packing_Carton_Width}
               onChange = {this.props.onChanges}
               name = 'Packing_Carton_Width'
               placeholder = "pkg_width"
             />
          </div>
          <div className="sm">
             <p className='editInput'>pkg_height</p>
             <input
              className='editInput'
               value = {this.props.Packing_Carton_Height}
               onChange = {this.props.onChanges}
               name = 'Packing_Carton_Height'
               placeholder = "pkg_height"
             />
          </div>
          <div className="sm">
             <p className='editInput'>pkg_depth</p>
             <input
              className='editInput'
               value = {this.props.Packing_Carton_Depth}
               onChange = {this.props.onChanges}
               name = 'Packing_Carton_Depth'
               placeholder = "pkg_depth"
             />
          </div>
          <div className="sm">
             <p className='editInput'>actual_width</p>
             <input
              className='editInput'
               value = {this.props.Actual_Product_Width}
               onChange = {this.props.onChanges}
               name = 'Actual_Product_Width'
               placeholder = "actual_width"
             />
          </div>
          <div className="sm">
             <p className='editInput'>actual_height</p>
             <input
              className='editInput'
               value = {this.props.Actual_Product_Height}
               onChange = {this.props.onChanges}
               name = 'Actual_Product_Height'
               placeholder = "actual_height"
             />
          </div>
          <div className="sm">
             <p className='editInput'>actual_depth</p>
             <input
              className='editInput'
               value = {this.props.Actual_Product_Length}
               onChange = {this.props.onChanges}
               name = 'Actual_Product_Length'
               placeholder = "actual_depth"
             />
          </div>
        </div>
         <br/>
         <button onClick={this.props.submitEdit}>
           submit
         </button>
       </div>
     </div>
   )
 }
}
