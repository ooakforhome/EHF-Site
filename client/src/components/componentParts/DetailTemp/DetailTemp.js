import React from 'react';
import './style.css';

export const DetailPage = ({item}) => (
  <div className="detail_container">
    <div className="top_general">
      <div className="detail_item_image_block w50block">
        <img src={(`${item.images}` === 'undefined' || "a" || "")? `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg` :`http://localhost:3001/api/image/${item.images}`  } alt={item.Product_Name} className="detail_image"/>
      </div>
      <div className="detail_item_info_block w50block">
        {(item.Product_Name === "")? "" :<h1>{item.Product_Name}</h1>}
        {(item.SKU === "")? "" : <h2>SUK: {item.SKU} </h2>}
        <p><b>Category</b> : {item.category_type}</p>
        {(item.Color === "")? "" : <p><b>Color</b> : {item.Color} </p>}
        {(item.Materials === "")? "" : <p><b>Materials</b> : {item.Materials} </p>}
        {(item.Product_Weight === "")? "" : <p><b>Product Weight</b> : {item.Product_Weight} </p>}
        <p><b>Product Size</b>: {item.Actual_Product_Width} W X {item.Actual_Product_Length} L X {item.Actual_Product_Height} H</p>
      </div>
    </div>
    <div className="detail_descriptions">
      {(item.Feature_1 === "")? "" : <p><b>Feature 1</b> : {item.Feature_1} </p>}
      {(item.Feature_2 === "")? "" : <p><b>Feature 2</b> : {item.Feature_2} </p>}
      {(item.Feature_3 === "")? "" : <p><b>Feature 3</b> : {item.Feature_3} </p>}
      {(item.Feature_4 === "")? "" : <p><b>Feature 4</b> : {item.Feature_4} </p>}
      {(item.Feature_5 === "")? "" : <p><b>Feature 5</b> : {item.Feature_5} </p>}
      {(item.Feature_6 === "")? "" : <p><b>Feature 6</b> : {item.Feature_6} </p>}
      {(item.Feature_7 === "")? "" : <p><b>Feature 7</b> : {item.Feature_7} </p>}
      {(item.Feature_8 === "")? "" : <p><b>Feature 8</b> : {item.Feature_8} </p>}
      {(item.Feature_9 === "")? "" : <p><b>Feature 9</b> : {item.Feature_9} </p>}
      {(item.Product_Description === "")? "" : <p><b>Product Description</b>: {item.Product_Description} </p>}
    </div>
    <div className="carton_block w50block">
      <div className="inner_carton_block">
        <img alt="box" src="https://volumeintegration.com/wp-content/uploads/PackageIcon.png" className="carton_block_img" atl={item.Product_Name} />
        {(item.Product_Shipping_Weight === "")? "" : <p><b>Product Shipping Weight</b> : {item.Product_Shipping_Weight} LB</p>}
        <p><b>Carton Width</b> : {item.Packing_Carton_Width} W X {item.Packing_Carton_Depth}L X {item.Packing_Carton_Height} H</p>
      </div>
    </div>


  </div>
)
