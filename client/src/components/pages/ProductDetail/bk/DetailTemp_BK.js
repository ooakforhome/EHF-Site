import React from 'react';

export const DetailPage = ({item}) => (
  <div>
    <div className="top_general">
      <img src={`http://__/${item.images}`} alt={item.Product_Name} className="detail_image"/>
      <h1> {item.category_type} </h1>
      <h2> {item.Product_Name} </h2>
      <h2> {item.SKU} </h2>
    </div>
    <div classNmae="all_product_general">
      <p>Color : {item.Color} </p>
      <p>Materials : {item.Materials} </p>
      <p>Product Shipping Weight : {item.Product_Shipping_Weight} LB</p>
      <p>Carton Width : {item.Packing_Carton_Width} W</p>
      <p>Carton Length : {item.Packing_Carton_Length} L</p>
      <p>Carton Height : {item.Packing_Carton_Height} H</p>
      <p>Product Weight : {item.Product_Weight} </p>
      <p>Actual Width : {item.Actual_Product_Width} W</p>
      <p>Actual Length : {item.Actual_Product_Length} L</p>
      <p>Actual Height : {item.Actual_Product_Height} H</p>
    </div>
    <div className="description">
      <p>Feature 1 : {item.Feature_1} </p>
      <p>Feature 2 : {item.Feature_2} </p>
      <p>Feature 3 : {item.Feature_3} </p>
      <p>Feature 4 : {item.Feature_4} </p>
      <p>Feature 5 : {item.Feature_5} </p>
      <p>Feature 6 : {item.Feature_6} </p>
      <p>Feature 7 : {item.Feature_7} </p>
      <p>Feature 8 : {item.Feature_8} </p>
      <p>Feature 9 : {item.Feature_9} </p>
      <p>Product Description: {item.Product_Description} </p>
    </div>
  </div>
)
