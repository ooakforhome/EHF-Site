import React from 'react';

const handleClick=(e)=>{
  e.preventDefault();
    console.log('click it');
    window.location ='/productdetail/'+ e.target._id
  }

export const Prender = ({_id, name, image, color, shipping_weight, product_weight, pkg_width, pkg_height, pkg_depth, actual_width, actual_height, actual_depth, onClick}) => (
    <div key={_id} className="item_container">
      <div className="innerBody">
        <div className="item_img">
          <img className="tImg" alt={name} src={image}/>
        </div>
        <div><p>Furniture</p></div>
        <div className="item_info_box">
          <p className="item_name">Product Name: {name}</p>
          <p className="item_color"> Color: {color}</p>
          <p className="item_weight"> Shipping Weight: {shipping_weight} </p>
          <p className="item_weight"> Product Weight: {product_weight} </p>
          <p className="item_size"> Package Dimensions: {pkg_width}W x {pkg_height}H x {pkg_depth}D </p>
          <p className="item_size"> Actural Dimensions: {actual_width}W x {actual_height}H x {actual_depth}D </p>
        </div>
        <div key={_id} className="edit_box">
        <hr />
        <button className="item_edit_button" onClick={handleClick}>
          Detail
        </button>
        </div>
      </div>
    </div>
)


// export const Plist = ({products}) => (
//   <div>
//     {products.map((product, i) =>
//       <Prender  key={i}
//               {...product}/>
//     )}
//   </div>
// )
