import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage';

// component show products pages
import { ProductPage } from './components/pages/ProductPage/ProductPage';
import AllProduct from './components/pages/ProductPage/AllProductPage';
import PetProducts from './components/pages/ProductPage/PetProductPage';
import BathroomFurniture  from './components/pages/ProductPage/BathroomFurniture';
import AccentFurnitures  from './components/pages/ProductPage/AccentFurnituresPage';
import BathroomAccessories  from './components/pages/ProductPage/BathAccessoriePage';
import BathroomHardwares  from './components/pages/ProductPage/BathHardwarePage';
import OTD  from './components/pages/ProductPage/OTDPage';
import BookCasePage  from './components/pages/ProductPage/BookCasePage';
import HookNRodPage  from './components/pages/ProductPage/HookNRodPage';
import WindowHardwarePage  from './components/pages/ProductPage/WindowHardwarePage';
import WindowPanelsPage from './components/pages/ProductPage/WindowPanelsPage';
import ShowerCurtainPage from './components/pages/ProductPage/ShowerCurtainPage';
import BeautyDevicePage from './components/pages/ProductPage/BeautyDevicePage';
import GardenBarrelsPage from './components/pages/ProductPage/GardenBarrelsPage';
import OutdoorLightingPage from './components/pages/ProductPage/OutdoorLightingPage';

// component different pages
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import PetProductDetail from './components/pages/ProductDetail/PetProductDetail';
import AccentProductDetail from './components/pages/ProductDetail/AccentProductDetail';
import BathProductDetail from './components/pages/ProductDetail/BathProductDetail';
import BathAccessorieDetail from './components/pages/ProductDetail/BathAccessorieDetail';
import BathHardwareDetail from './components/pages/ProductDetail/BathHardwareDetail';
import BookCaseDetail from './components/pages/ProductDetail/BookCaseDetail';
import OverTheDoorDetail from './components/pages/ProductDetail/OverTheDoorDetail';
import HooksAndRodsDetail from './components/pages/ProductDetail/HooksAndRodsDetail';
import WindowHardwareDetail from './components/pages/ProductDetail/WindowHardwareDetail';
import WindowPanelsDetail from './components/pages/ProductDetail/WindowPanelsDetail';
import ShowerCurtainDetail from './components/pages/ProductDetail/ShowerCurtainDetail';
import BeautyDeviceDetail from './components/pages/ProductDetail/BeautyDeviceDetail';
import GardenBarrelsDetail from './components/pages/ProductDetail/GardenBarrelsDetail';
import OutdoorLightingDetail from './components/pages/ProductDetail/OutdoorLightingDetail';

import { UploadImg } from './components/pages/UploadImgs/UploadImgs';
import NewProductForm  from './components/pages/NewProductForm/NewProductForm';

const App = () =>
  <Router>
    <div>

        <Route exact path="/" component = { HomePage } />
        <Route path="/productpage" component = { ProductPage } />
          <Route path="/productpage/all" component = { AllProduct } />
          <Route path="/productpage/Pet_Products" component = { PetProducts } />
          <Route path="/productpage/bathroom_furniture" component = { BathroomFurniture } />
          <Route path="/productpage/Bath_Accessories" component = { BathroomAccessories } />
          <Route path="/productpage/Bath_Hardware" component = { BathroomHardwares } />
          <Route path="/productpage/Accent_Furniture" component = { AccentFurnitures } />
          <Route path="/productpage/Over_The_Door" component = { OTD } />
          <Route path="/productpage/Book_Case" component = { BookCasePage } />
          <Route path="/productpage/Hooks_And_Rods" component = { HookNRodPage } />
          <Route path="/productpage/Window_Hardware" component = { WindowHardwarePage } />
          <Route path="/productpage/Window_Panels" component = { WindowPanelsPage } />
          <Route path="/productpage/Shower_Curtain" component = { ShowerCurtainPage } />
          <Route path="/productpage/Beauty_Device" component = { BeautyDevicePage } />
          <Route path="/productpage/Garden_Barrels" component = { GardenBarrelsPage } />
          <Route path="/productpage/Outdoor_Lighting" component = { OutdoorLightingPage } />
        <Route exact path="/newproductform" component = { NewProductForm } />
        <Route exact path="/productdetail/:id" component = { ProductDetail } />
          <Route path="/productdetail/bathroom_furniture/:id" component = { BathProductDetail } />
          <Route path="/productdetail/Bath_Accessories/:id" component = { BathAccessorieDetail } />
          <Route path="/productdetail/Bath_Hardware/:id" component = { BathHardwareDetail } />
          <Route path="/productdetail/Pet_Products/:id" component = { PetProductDetail } />
          <Route path="/productdetail/Accent_Furniture/:id" component = { AccentProductDetail } />
          <Route path="/productdetail/Book_Case/:id" component = { BookCaseDetail } />
          <Route path="/productdetail/Over_The_Door/:id" component = { OverTheDoorDetail } />
          <Route path="/productdetail/Hooks_And_Rods/:id" component = { HooksAndRodsDetail } />
          <Route path="/productdetail/Window_Hardware/:id" component = { WindowHardwareDetail } />
          <Route path="/productdetail/Window_Panels/:id" component = { WindowPanelsDetail } />
          <Route path="/productdetail/Shower_Curtain/:id" component = { ShowerCurtainDetail } />
          <Route path="/productdetail/Beauty_Device/:id" component = { BeautyDeviceDetail } />
          <Route path="/productdetail/Garden_Barrels/:id" component = { GardenBarrelsDetail } />
          <Route path="/productdetail/Outdoor_Lighting/:id" component = { OutdoorLightingDetail } />
        <Route exact path="/uploadimg" component = { UploadImg } />

    </div>
  </Router>;

export default App;

// getProduct: function(id) {
//   return axios.get("/api/products/" + id);
// },
