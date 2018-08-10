import React from 'react';
import './style.css';
// import { Link } from 'react-router-dom';

// const handleClick=(e)=>{
//   e.preventDefault();
//     window.location ='/productdetail/'+ e.target.value;
//   }

export const NPrender = ({_id, Product_Name, category_type, images, Color, Product_Shipping_Weight, Product_Weight, Packing_Carton_Width, Packing_Carton_Height, Packing_Carton_Depth, Actual_Product_Width, Actual_Product_Height, Actual_Product_Length, handleClick}) => (
    <div className="item_container">
      <div className="innerBody">
        <div className="item_img">
          <img src={(`${images}` !== 'null')? `http://localhost:3001/api/image/${images}` : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt={Product_Name} className="nprender_image"/>
        </div>
        <div><p>Category: {category_type}</p></div>
        <div className="item_info_box">
          <p className="item_name">Product Name: {Product_Name}</p>
          <p className="item_color"> Color: {Color}</p>
          <p className="item_weight"> Shipping Weight: {Product_Shipping_Weight} </p>
          <p className="item_weight"> Product Weight: {Product_Weight} </p>
          <p className="item_size"> Package Dimensions: {Packing_Carton_Width}W x {Packing_Carton_Height}H x {Packing_Carton_Depth}D </p>
          <p className="item_size"> Actural Dimensions: {Actual_Product_Width}W x {Actual_Product_Height}H x {Actual_Product_Length}D </p>
        </div>
        <div className="edit_box">
        <hr />
          <button value={_id} className="item_edit_button" onClick={handleClick}>
            Detail
          </button>
        </div>
      </div>
    </div>
)
// <button value={_id} className="item_edit_button" onClick={handleClick}>
//   Detail
// </button>

// <Link to={`/productdetail/${_id}`}>
//   <button>
//     Detail
//   </button>
// </Link>
