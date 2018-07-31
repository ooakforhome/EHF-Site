import React from 'react';
import { Link } from 'react-router-dom';

export const NPrender = ({item}) => (
    <div className="item_container">
      <div className="innerBody">
        <div className="item_img">
          <img className="tImg" alt={item.Product_Name} src={"http://localhost:3001/api/image/"+ item.images}/>
        </div>
        <div><p>Category: {item.category_type}</p></div>
        <div className="item_info_box">
          <p className="item_name">Product Name: {item.Product_Name}</p>
          <p className="item_color"> Color: {item.Color}</p>
          <p className="item_weight"> Shipping Weight: {item.Product_Shipping_Weight} </p>
          <p className="item_weight"> Product Weight: {item.Product_Weight} </p>
          <p className="item_size"> Package Dimensions: {item.Packing_Carton_Width}W x {item.Packing_Carton_Height}H x {item.Packing_Carton_Depth}D </p>
          <p className="item_size"> Actural Dimensions: {item.Actual_Product_Width}W x {item.Actual_Product_Height}H x {item.Actual_Product_Length}D </p>
        </div>
        <div className="edit_box">
        <hr />
          <button value={item._id} className="item_edit_button" onClick={handleClick}>
            Detail
          </button>
        </div>
      </div>
    </div>
)
