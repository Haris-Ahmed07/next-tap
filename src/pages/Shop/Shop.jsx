import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Testimonial from "../../components/Testimonials/Testimonials";
import ShopComponent from "../../components/ShopComponent/ShopComponent";
import ShopVideoSection from "../../components/ShopComponent/ShopVideoSection";
import Faqs from "../../components/FAQs/Faqs.jsx";
const Shop = () => {
  return (
    <div className="bg-gray-100">
      <ShopComponent
        title={"On Sale Featured Product"}
        description={
          "Experience the Future of Connectivity with Out NFC Cards Seamlessly Connect, Share and Network with Just a Tap"
        }
        link="/on-sale-products"
        discounted={true}
        discountPercentage="10%"
        even={false}
      />
      <ShopComponent
        title={"NFC enabled smart Business Cards "}
        description={
          "Experience the Future of Connectivity with Out NFC Cards Seamlessly Connect, Share and Network with Just a Tap"
        }
        link="/business-cards"
        discounted={false}
        discountPercentage="10%"
        even={true}
      />
      <ShopComponent
        title={"NFC enabled smart Social Media Promotion Cards"}
        description={
          "Experience the Future of Connectivity with Out NFC Cards Seamlessly Connect, Share and Network with Just a Tap"
        }
        link="/promotion-cards"
        discounted={false}
        discountPercentage="10%"
        even={false}
      />
      <ShopComponent
        title={"NFC enabled smart Wooden Business Cards"}
        description={
          "Experience the Future of Connectivity with Out NFC Cards Seamlessly Connect, Share and Network with Just a Tap"
        }
        link="/wooden-business-cards"
        discounted={false}
        discountPercentage="10%"
        even={true}
      />
      <ShopComponent
        title={"NFC enabled smart Standees"}
        description={
          "Experience the Future of Connectivity with Out NFC Cards Seamlessly Connect, Share and Network with Just a Tap"
        }
        link="/smart-standees"
        discounted={false}
        discountPercentage="10%"
        even={false}
      />
      <ShopVideoSection />
      <Testimonial />
      <Faqs />
    </div>
  );
};

export default Shop;
