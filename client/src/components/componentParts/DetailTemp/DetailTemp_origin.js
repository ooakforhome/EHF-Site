import React from 'react';
import './style.css';

export const DetailPage = ({item}) => (
  <div>
    <div className="top_general">
      <img src={(`${item.images}` !== 'undefined')? `http://localhost:3001/api/image/${item.images}` : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg` } alt={item.Product_Name} className="detail_image"/>
      <h1> {item.category_type} </h1>
      {(item.Product_Name === "")? "" :<h2>Product Name: {item.Product_Name}</h2>}
      {(item.SKU === "")? "" : <h2>SUK: {item.SKU} </h2>}
    </div>
    <div className="all_product_general">
      {(item.Color === "")? "" : <p>Color : {item.Color} </p>}
      {(item.Materials === "")? "" : <p>Materials : {item.Materials} </p>}
      {(item.Product_Shipping_Weight === "")? "" : <p>Product Shipping Weight : {item.Product_Shipping_Weight} LB</p>}
      {(item.Packing_Carton_Width === "")? "" : <p>Carton Width : {item.Packing_Carton_Width} W</p>}
      {(item.Packing_Carton_Depth === "")? "" : <p>Carton Length : {item.Packing_Carton_Depth} L</p>}
      {(item.Packing_Carton_Height === "")? "" : <p>Carton Height : {item.Packing_Carton_Height} H</p>}
      {(item.Product_Weight === "")? "" : <p>Product Weight : {item.Product_Weight} </p>}
      {(item.Actual_Product_Width === "")? "" : <p>Actual Width : {item.Actual_Product_Width} W</p>}
      {(item.Actual_Product_Length === "")? "" : <p>Actual Length : {item.Actual_Product_Length} L</p>}
      {(item.Actual_Product_Height === "")? "" : <p>Actual Height : {item.Actual_Product_Height} H</p>}
    </div>
    <div className="description">
      {(item.Feature_1 === "")? "" : <p>Feature 1 : {item.Feature_1} </p>}
      {(item.Feature_2 === "")? "" : <p>Feature 2 : {item.Feature_2} </p>}
      {(item.Feature_3 === "")? "" : <p>Feature 3 : {item.Feature_3} </p>}
      {(item.Feature_4 === "")? "" : <p>Feature 4 : {item.Feature_4} </p>}
      {(item.Feature_5 === "")? "" : <p>Feature 5 : {item.Feature_5} </p>}
      {(item.Feature_6 === "")? "" : <p>Feature 6 : {item.Feature_6} </p>}
      {(item.Feature_7 === "")? "" : <p>Feature 7 : {item.Feature_7} </p>}
      {(item.Feature_8 === "")? "" : <p>Feature 8 : {item.Feature_8} </p>}
      {(item.Feature_9 === "")? "" : <p>Feature 9 : {item.Feature_9} </p>}
      {(item.Product_Description === "")? "" : <p>Product Description: {item.Product_Description} </p>}
    </div>
  </div>
)
