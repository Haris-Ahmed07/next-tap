import React from 'react'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../../pages/Home/Home.jsx'
import Cart from '../../pages/Cart/Cart.jsx'
import CustomizeYourCard from '../../pages/CustomizeYourCard/CustomizeYourCard.jsx'
import CustomizationPage from "../../pages/Customization/CustomizationPage.jsx"
import LoginPage from '../../pages/Login/LoginPage.jsx'
import SignUpPage from '../../pages/SignUp/SignUpPage.jsx'
import Shop from '../../pages/Shop/Shop.jsx'
import Contact from '../../pages/Contact/Contact.jsx'
import Checkout from '../../pages/Checkout/Checkout.jsx'
import CompatiblePhones from '../../pages/CompatiblePhones/CompatiblePhones.jsx'
import CardOverview from '../../pages/CardOverview/CardOverview.jsx'
import FeatureProducts from '../../pages/FeatureProducts/FeatureProducts.jsx'
import BestSellingProducts from '../../pages/BestSellingProducts/BestSellingProducts.jsx'
import BusinessCardsOverview from "../../pages/Shop/ShopPages/BusinessCardsOverview.jsx"
import OnSaleProductsOverview from "../../pages/Shop/ShopPages/OnSaleFeaturedProductsOverview.jsx"
import PromotionCardsOverview from "../../pages/Shop/ShopPages/PromotionCardsOverview.jsx"
import SmartStandeesOverview from "../../pages/Shop/ShopPages/SmartStandeesOverview.jsx"
import WoodenBusinessCardsOverview from "../../pages/Shop/ShopPages/WoodenBusinessCardsOverview.jsx"

const RoutesConfiguration = () => {
  const { pathname } = useLocation();
      window.scrollTo(0,0)
  useEffect(()=>{

  },{pathname})
  return (
    <div className='w-full'>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/customization" element={<CustomizeYourCard />} />
          <Route path="/make-your-own-card" element={<CustomizationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/compatible-phones" element={<CompatiblePhones/>}/>
          <Route path="/card-overview/:id" element={<CardOverview/>} />
          <Route path="/feature-products" element={<FeatureProducts/>} />
          <Route path="/best-selling-products" element={<BestSellingProducts/>} />
          <Route path="/business-cards" element={<BusinessCardsOverview/>} />
          <Route path="/on-sale-products" element={<OnSaleProductsOverview/>} />
          <Route path="/promotion-cards" element={<PromotionCardsOverview/>} />
          <Route path="/smart-standees" element={<SmartStandeesOverview/>} />
          <Route path="/wooden-business-cards" element={<WoodenBusinessCardsOverview/>} />
        </Routes>
    </div>
  )
}

export default RoutesConfiguration;