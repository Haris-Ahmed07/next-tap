import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FormComponent.css";
import { HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GoChevronDown } from "react-icons/go";
import shipping01 from "../../assets/shipping01.svg";
import shipping02 from "../../assets/shipping02.svg";
import shipping03 from "../../assets/shipping03.svg";
import card1 from "../../assets/custom-card/card1.svg";
import card2 from "../../assets/custom-card/card2.svg";
import card3 from "../../assets/custom-card/card3.svg";
import card4 from "../../assets/custom-card/card4.svg";
import mainCard from "../../assets/custom-card/main-card.svg";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../states/index.js";
import { useSelector } from "react-redux";
import { cards } from "../../data.js";
const FormComponent = () => {
  const dispatch = useDispatch();
  const { addToCart, removeFromCart } = bindActionCreators(actions, dispatch);

  const subItems = [card1, card2, card3, card4];
  const items = [card1, card3];
  const [currentSlide, setCurrentSlide] = useState(items[0]);

  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [cardType, setCardType] = useState("Custom Card");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Black");
  const cart = useSelector((state) => state.cart);
  const noOfCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  const location = useLocation();

  const submitHandler = async (event) => {
    event.preventDefault();

    // Extract the path name from the location
    const currentPath = location.pathname;

    // Define the info object based on the URL path
    let info = {};

    // Check if the URL includes "customization"
    if (currentPath.includes("/customization")) {
      info = {
        id: uuidv4(),
        cardType,
        quantity,
        color,
        price: cardType === "Custom Card" ? "$20" : "$30",
        cardImg: color === "White" ? "/src/assets/custom-card/card1.svg" : color === "Black" ? "/src/assets/custom-card/card3.svg" : null,
      };
    }
    // Check if the URL includes "card-overview" followed by a number
    else if (currentPath.includes("/card-overview/")) {
      const pathParts = currentPath.split("/");
      const overviewNumber = pathParts[pathParts.length - 1]; // Extract the number after "card-overview/"
      const item = cards.find((item) => overviewNumber === item.id);
      info = {
        id: item.id,
        cardType,
        quantity,
        color: item.color,
        price: item.price,
        cardImg: item.image,
      };
    }

    addToCart(info);
    console.log(info);
  };

  return (
    <div className="bg-white w-full xxl:pt-0 xl:pt-0 lg:pt-0 md:pt-8 sm:pt-5 xs:pt-5">
      <section className="xxl:px-[8%] xl:px-[3%] lg:px-[2%] md:px-[2%] sm:px-[2%] xs:px-[2%] w-full flex xxl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center mx-auto  xxl:space-x-[4rem] xl:space-x-[4rem] lg:space-x-[2rem] md:space-y-[2rem]  sm:space-y-[1.5rem] xs:space-y-[1.5rem]">
        {/* Left Side */}
        <div className="xxl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] xs:w-[100%] xxl:pt-28 xl:pt-28 lg:pt-28 flex flex-col mx-auto items-start">
          <div className="w-full md:h-[55%]  flex  xxl:space-x-[2rem]  xl:space-x-[2rem] lg:space-x-[1rem] md:space-x-[1rem] sm:space-x-[1rem] xs:space-x-[1rem] items-center justify-center">
            <div className="h-full w-[20%] flex flex-col justify-start gap-y-3 ">
              {subItems.map((card) => (
                <div>
                  {card === card1 ? (
                    <img
                      src={card}
                      alt="card"
                      onClick={() => setCurrentSlide(card1)}
                    />
                  ) : card === card3 ? (
                    <img
                      src={card}
                      alt=""
                      onClick={() => setCurrentSlide(card3)}
                    />
                  ) : (
                    <img src={card} alt="" />
                  )}
                </div>
              ))}
            </div>
            <div className="xs:h-[250px] sm:h-[330px] md:h-[330px] lg:h-[330px] xl:h-[330px] xxl:h-[330px] w-[70%] overflow-hidden ">
              <div className="h-full w-full overflow-hidden">
                <Swiper
                  className="flex items-center xs:w-[250px] sm:w-[400px] md:w-[500px] lg:w-[350px] xl:w-[400px] xxl:w-[400px]"
                  style={{
                    "--swiper-navigation-size": "20px",
                    fontWeight: "bold",
                  }}
                  modules={[Pagination, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={true}
                  loop={true}
                  onSlideChange={(swiper) => {
                    setTimeout(() => {
                      const nextIndex = (swiper.realIndex + 1) % items.length;
                      const newSlide = items[swiper.realIndex];
                      const nextSlide = items[nextIndex];

                      if (
                        newSlide === currentSlide &&
                        nextSlide !== currentSlide
                      ) {
                        setCurrentSlide(nextSlide);
                      } else {
                        setCurrentSlide(newSlide);
                      }
                    }, 90);
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {items.map((item, index) => (
                    <SwiperSlide
                      className="flex justify-center items-center"
                      key={index}
                    >
                      <div className="w-full h-auto flex items-center justify-center mt-1 backdrop-blur-md">
                        <img
                          className="object-contain w-[380px] h-[280px]"
                          src={currentSlide}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="xxl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] flex flex-col justify-center  xxl:items-start xl:items-start lg:items-start  md:items-center sm:items-center xs:items-center xxl:px-0 xl:px-0 lg:px-0 md:px-[5%] sm:px-[5%] xs:px-[2%] ">
          <h1 className="font-montserrat font-semibold xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px]">
            NFC Custom Card
          </h1>
          <div className="flex flex-row items-center gap-x-2">
            <div className="flex flex-row items-center py-1">
              <HiStar className="text-blue " size={20} />
              <HiStar className="text-blue " size={20} />
              <HiStar className="text-blue " size={20} />
              <HiStar className="text-blue " size={20} />
              <HiStar className="text-blue " size={20} />
            </div>
            <div className="text-gray-700 xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]">
              Based on 50+ Reviews
            </div>
          </div>
          <div className=" xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]font-normal text-gray-900 py-2">
            $29.99
          </div>
          <div className=" xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-normal text-gray-500 py-2">
            Color:{" "}
            <span className="text-gray-900  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]">
              {color}
            </span>
          </div>
          <form onSubmit={submitHandler} className="w-full">
            <div className="my-2 flex flex-row xxl:justify-start xl:justify-start lg:justify-start  md:justify-center sm:justify-center xs:justify-center ">
              <input
                type="radio"
                className="white"
                name="color"
                value="White"
                onChange={(e) => {
                  setColor(e.target.value);
                  setCurrentSlide(card1);
                }}
              ></input>
              <label className="ps-2 pe-6  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]">
                White
              </label>

              <input
                type="radio"
                className="black"
                defaultChecked="true"
                name="color"
                value="Black"
                onChange={(e) => {
                  setColor(e.target.value);
                  setCurrentSlide(card3);
                }}
              ></input>
              <label className="px-2  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]">
                Black
              </label>
            </div>

            <div className="input-group w-full flex flex-col xxl:items-start xl:items-start lg:items-start  md:items-center sm:items-center xs:items-center ">
              <div className=" xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-normal text-gray-500 py-2 ">
                Quantity:
              </div>
              <div className="flex flex-row border  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] border-gray-200 rounded-2xl py-2 px-5 gap-x-16  w-[200px]">
                <button
                  type="button"
                  className="input-group-text"
                  onClick={handleDecrement}
                >
                  -{" "}
                </button>
                <div className="form-control text-center  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]">
                  {quantity}
                </div>
                <button
                  type="button"
                  className="input-group-text"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>

            <div className="my-2 mt-2 gap-y-2 flex flex-col items-start w-full ">
              <div className="flex justify-between  w-full border border-gray-200 rounded-xl py-4 px-6">
                <div className="flex items-center justify-start rounded-xl">
                  <input
                    type="radio"
                    className="white"
                    defaultChecked="true"
                    name="cardType"
                    value="Custom Card"
                    onChange={(e) => {
                      setCardType(e.target.value);
                    }}
                  ></input>
                  <label className="px-5  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-semibold">
                    Custom Card
                  </label>
                </div>
                <div className=" xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-semibold text-gray-900">
                  $20.00
                </div>
              </div>
              <div className="flex justify-between w-full border border-gray-200 rounded-xl py-4 px-6">
                <div className="flex items-center justify-start rounded-xl">
                  <input
                    type="radio"
                    className="white"
                    name="cardType"
                    value="Premium Custom Card"
                    onChange={(e) => {
                      setCardType(e.target.value);
                    }}
                  ></input>
                  <label className="px-5  xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-semibold">
                    Premium Custom Card
                  </label>
                </div>
                <div className=" xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-semibold text-gray-900">
                  $30.00
                </div>
              </div>
              <div className="flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col w-full xxl:gap-x-2 xl:gap-x-2 lg:gap-x-2 md:gap-x-2 sm:gap-y-1 xs:gap-y-[5px] justify-between">
                <button
                  type="submit"
                  className=" bg-darkBlue w-full text-white font-semibold xxl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[10px] xs:text-[10px] leading-[30px] rounded-2xl  px-4 xxl:py-3 xl:py-3 lg:py-3 md:py-2 sm:py-2 xs:py-2 "
                >
                  CHECKOUT
                  {noOfCartItems === 0 ? (
                    ""
                  ) : (
                    <span className=" bg-red-500 text-white rounded-full mx-4 px-2 py-1 text-md font-bold">
                      {noOfCartItems}
                    </span>
                  )}
                </button>
                <Link
                  to="/make-your-own-card"
                  className=" bg-darkBlue w-full text-white font-semibold  xxl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[10px] xs:text-[10px] leading-[30px] rounded-2xl px-4 xxl:py-3 xl:py-3 lg:py-3 md:py-2 sm:py-2 xs:py-2 text-center"
                >
                  <button type="submit">CREATE YOUR OWN</button>
                </Link>
              </div>
            </div>
          </form>
          <div className="w-full  py-3 px-2 rounded-md border border-gray-200 text-black font-thin xxl:text-[22px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]">
            Shipping to
            <br />
            Order today, and you'll receive your package between Jul 23 - Jul 26
          </div>
          <div className="flex flex-row w-full mt-2 px-0 rounded-sm border border-gray-200">
            <div className="flex flex-col justify-center my-3 items-center border-r border-gray-200  w-[33%]">
              <img src={shipping01}></img>
              <h4 className="xxl:text-[15px] xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[10px] xs:text-[10px] font-bold text-black">
                Order Today
              </h4>
              <h4 className="xxl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[8px] xs:text-[8px] font-thin text-gray-700">
                Jul 18
              </h4>
            </div>
            <div className="flex flex-col  my-3 justify-center items-center border-r border-gray-200 w-[33%] px-3">
              <img src={shipping02}></img>
              <h4 className="xxl:text-[15px] xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[10px] xs:text-[10px] font-bold text-black text-center">
                Custom Printing Process Time
              </h4>
              <h4 className="xxl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[8px] xs:text-[8px] font-thin text-gray-700">
                Jul 19 - Jul 22
              </h4>
            </div>
            <div className="flex flex-col  my-3  justify-center items-center  w-[33%]">
              <img src={shipping03}></img>
              <h4 className="xxl:text-[15px] xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[10px] xs:text-[10px] font-bold text-black">
                Estimated Delivery
              </h4>
              <h4 className="xxl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[8px] xs:text-[8px] font-thin text-gray-700">
                Jul 23 - Jul 26
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormComponent;
