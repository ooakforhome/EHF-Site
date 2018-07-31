

export const DetailPage = ({images, Product_Name, category_type, SKU, Product_Shipping_Weight, Product_Weight, Color, Packing_Carton_Width, Packing_Carton_Length, Packing_Carton_Height, Actual_Product_Length, Actual_Product_Width, Actual_Product_Height, Materials, Product_Description, Feature_1, Feature_2, Feature_3, Feature_4, Feature_5, Feature_6, Feature_7, Feature_8, Feature_9 }) => (
  <div>
    <div className="top_general">
      <img src={`http://__/${images}`} alt={Product_Name} className="detail_image"/>
      <h1> {category_type} </h1>
      <h2> {Product_Name} </h2>
      <h2> {SKU} </h2>
    </div>
    <div classNmae="all_product_general">
      <p>Color : {Color} </p>
      <p>Materials : {Materials} </p>
      <p>Product Shipping Weight : {Product_Shipping_Weight} LB</p>
      <p>Carton Width : {Packing_Carton_Width} W</p>
      <p>Carton Length : {Packing_Carton_Length} L</p>
      <p>Carton Height : {Packing_Carton_Height} H</p>
      <p>Product Weight : {Product_Weight} </p>
      <p>Actual Width : {Actual_Product_Width} W</p>
      <p>Actual Length : {Actual_Product_Length} L</p>
      <p>Actual Height : {Actual_Product_Height} H</p>
    </div>
    <div className="description">
      <p>Feature 1 : {Feature_1} </p>
      <p>Feature 2 : {Feature_2} </p>
      <p>Feature 3 : {Feature_3} </p>
      <p>Feature 4 : {Feature_4} </p>
      <p>Feature 5 : {Feature_5} </p>
      <p>Feature 6 : {Feature_6} </p>
      <p>Feature 7 : {Feature_7} </p>
      <p>Feature 8 : {Feature_8} </p>
      <p>Feature 9 : {Feature_9} </p>
      <p>Product Description: {Product_Description} </p>
    </div>
  </div>
)
