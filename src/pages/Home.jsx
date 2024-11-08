import React, { useEffect, useState } from "react";
import DuckDonutsLogo from "/assets/images/HomePageImages/HomepageFallBackground.jpg";
import ChocolateCoveredStrawberry from "/assets/images/HomePageImages/ChocolateCoveredStrawberry.png";
import MenuDrinks from "/assets/images/HomePageImages/MenuDrinks.png";
import MenuIceCream from "/assets/images/HomePageImages/MenuIceCream.png";
import LemonadeRefreshers from "/assets/images/HomePageImages/LemonadeRefreshers.png";
import MenuSandwiches from "/assets/images/HomePageImages/MenuSandwiches.png";
import ChocolateDonut from "/assets/images/HomePageImages/ChocolateDonut.jpg";
import ChocolateDonutWithSprinkles from "/assets/images/HomePageImages/ChocolateDonutWithSprinkles.jpg";
import ChocolateDonutDrizzled from "/assets/images/HomePageImages/ChocolateDonutDrizzled.jpg";
import FallSeasonalDonuts from "/assets/images/HomePageImages/FallSeasonalDonuts.jpg";
import MenuItemCards from "../components/HomePageComponents/MenuItemCards";
import { Link } from "react-router-dom";

import LazyLoad from "../components/LazyLoad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [duckDonutsInstagramHovered, setDuckDonutsInstagramHovered] =
    useState(false);
  const [selectedMadeToOrderOption, setSelectedMadeToOrderOption] =
    useState("coating");

  const madeToOrderText = () => {
    if (selectedMadeToOrderOption === "coating") {
      return "Select one of our Ducklickous coating options from cinnamon sugar to blueberry icing";
    } else if (selectedMadeToOrderOption === "topping") {
      return "Add one of our Duckadent toppings such as Graham Cracker, Chopped Bacon, and Oreos®";
    } else if (selectedMadeToOrderOption === "drizzle") {
      return "Complete your donut with one of our ducklectable drizzles such as hot fudge, marshmallow, salted caramel, or raspberry";
    }
  };

  const madeToOrderImage = () => {
    if (selectedMadeToOrderOption === "coating") {
      return ChocolateDonut;
    } else if (selectedMadeToOrderOption === "topping") {
      return ChocolateDonutWithSprinkles;
    } else if (selectedMadeToOrderOption === "drizzle") {
      return ChocolateDonutDrizzled;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  return (
    <div className="max-w-[2055px] m-auto z-10 h-auto">
      {/* Warm Delicious Made to Order */}
      {/* h-[6.46rem] */}
      <section
            id="MainstageScroller"
            className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        >
          <div
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
                style={{
                    backgroundImage: `url(${DuckDonutsLogo})`,
                    backgroundSize: showBackground ? "115%" : "cover",
                    opacity: showBackground ? 1 : 0, // Only the background fades in
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            ></div>
        <div className="ml-auto mr-auto w-full max-w-[60rem] font-extrabold italic uppercase relative z-10">
          <div className="text-center">
            <div className="flex flex-col">
              <span className="py-2 text-7xl font-boogaloo" style={{textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5"}}>Warm, Delicious</span>
              <span className="py-4 text-8xl font-boogaloo" style={{textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5"}}>Made to Order</span>
              <div className="flex items-center justify-center mt-4">
                <div
                  className="w-36 h-[0.32rem] bg-white mr-2"
                  style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5" }}
                ></div>
                <div className="text-2xl mx-2 font-bold not-italic font-mono" style={{textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5"}}>
                  CUSTOMIZED BEFORE YOUR EYES
                </div>
                <div
                  className="w-36 h-[0.32rem] bg-white ml-2"
                  style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5" }}
                ></div>
              </div>
              <div className="flex justify-center space-x-10 mt-10">
                <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-60 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400">
                  Order Online
                </button>
                <Link to="/menu/seasonal">
                  <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-60 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400">
                    Seasonal Flavors
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section
        id="MenuProductTypeFeed"
        className="flex items-center justify-center py-20 px-5"
      >
        <div className="max-w-[71.8rem] h-full w-full px-2 grid grid-cols-4 gap-x-4 justify-items-center">
          <MenuItemCards
            image={ChocolateCoveredStrawberry}
            cardTitle={"Fan Favorites"}
            index={0}
            link="/menu/fan-favorites"
          />
          <MenuItemCards
            image={MenuDrinks}
            cardTitle={"Coffee, Espresso & More"}
            index={1}
            link="/menu/coffee-espresso-more"
          />
          <MenuItemCards
            image={MenuIceCream}
            cardTitle={"Ice Cream"}
            index={2}
            link="/menu/ice-cream"
          />
          <MenuItemCards
            image={LemonadeRefreshers}
            cardTitle={"Lemonade & Refreshers"}
            index={3}
            link="/menu/lemonade-refreshers"
          />
          <MenuItemCards
            image={MenuSandwiches}
            cardTitle={"Sandwiches"}
            index={4}
            link="/menu/sandwiches"
          />
        </div>
      </section>
      <section
        id="SeasonalContentv1"
        className="h-screen lg:h-[65%] py-10 px-6 lg:pl-0 lg:py-20 lg:pr-5 2xl:pr-[18%]"
      >
        <div className="h-full w-full flex flex-col lg:flex-row">
          <div className="w-full h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center p-48 lg:py-10 lg:px-16 xl:pr-32 2xl:pr-16">
            <img src={madeToOrderImage()} alt="Chocolate Donut" />
          </div>
          <div className="w-full h-1/2 lg:h-auto lg:w-1/2 xl:py-8 xl:pl-16 2xl:pl-32 2xl:py-12">
            <div className="w-full h-full flex flex-col items-center">
              <div
                className="text-5xl text-sky-500 font-bold w-full flex justify-center py-2 font-boogaloo"
                style={{ textShadow: "2px 2px 4px rgb(0, 0, 0, 0.5)" }}
              >
                WARM, DELICIOUS
              </div>
              <div
                className="text-6xl text-sky-500 font-bold w-full flex justify-center py-2 font-boogaloo"
                style={{ textShadow: "2px 2px 4px rgb(0, 0, 0, 0.5)" }}
              >
                MADE TO ORDER
              </div>
              <div className="flex justify-center w-full h-full py-3">
                <div className="w-1/2 bg-gray-300 h-[2.5px]" />
              </div>
              <div className="flex justify-center space-x-7 text-lg font-bold">
                <div
                  className={`${
                    selectedMadeToOrderOption === "coating"
                      ? "text-black"
                      : "text-gray-300"
                  } cursor-pointer`}
                  onClick={() => {
                    setSelectedMadeToOrderOption("coating");
                  }}
                >
                  COATING
                </div>
                <div
                  className={`${
                    selectedMadeToOrderOption === "topping"
                      ? "text-black"
                      : "text-gray-300"
                  } cursor-pointer`}
                  onClick={() => {
                    setSelectedMadeToOrderOption("topping");
                  }}
                >
                  TOPPING
                </div>
                <div
                  className={`${
                    selectedMadeToOrderOption === "drizzle"
                      ? "text-black"
                      : "text-gray-300"
                  } cursor-pointer`}
                  onClick={() => {
                    setSelectedMadeToOrderOption("drizzle");
                  }}
                >
                  DRIZZLE
                </div>
              </div>
              <div className="px-6 leading-6 text-sm mt-3">
                {madeToOrderText()}
              </div>
              <div className="flex space-x-4 h-full w-full justify-center pt-4 pb-14">
                <div
                  className={`h-4 w-4 cursor-pointer ${
                    selectedMadeToOrderOption === "coating"
                      ? "bg-[rgb(73,164,154)]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedMadeToOrderOption("coating");
                  }}
                ></div>
                <div
                  className={`h-4 w-4 cursor-pointer ${
                    selectedMadeToOrderOption === "topping"
                      ? "bg-[rgb(73,164,154)]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedMadeToOrderOption("topping");
                  }}
                ></div>
                <div
                  className={`h-4 w-4 cursor-pointer ${
                    selectedMadeToOrderOption === "drizzle"
                      ? "bg-[rgb(73,164,154)]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedMadeToOrderOption("drizzle");
                  }}
                ></div>
              </div>
              <div>
                <Link to="/menu/made-to-order-donuts">
                  <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-52 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white">
                    See All Options
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="SeasonalContentv1"
        className="h-screen lg:h-[65%] py-10 px-6 lg:py-20 lg:pl-5 2xl:pl-[20%]"
      >
        <div className="h-full w-full flex flex-col lg:flex-row-reverse">
          <div className="w-full h-1/2 lg:h-full lg:w-[53%] flex justify-center items-center bg-blue-300">
            <img
              src={FallSeasonalDonuts}
              alt="Fall Seasonal Donuts"
              className=""
            />
          </div>
          <div className="w-full h-1/2 lg:h-auto lg:w-[47%] xl:py-8 xl:pr-16 2xl:pr-32 2xl:py-12">
            <div className="w-full h-full">
              <div className="text-5xl py-2 text-sky-500 font-bold font-boogaloo">
                A DOZEN REASONS WE LOVE FALL
              </div>
              <div className="my-5 font-bold text-2xl">
                AVAILABLE SEPT. 4 - DEC. 1
              </div>
              <div className="text-sm">
                Cozy up with our Fall Favorites Dozen complete with apple
                topping, Girl Scout Coconut Caramel Cookie crumbles, and more.
              </div>
              <div className="pt-6">
                <Link to="/menu/seasonal">
                  <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-52 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400 text-white">
                    Seasonal Donuts
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="SeasonalContentv1"
        className="bg-orange-400 md:h-[90%] lg:h-[53%] 2xl:h-[61%]"
      >
        {/* <div className="h-[385px]">hello world</div> */}
      </section>
      <section
        id="SeasonalContentv1"
        className="h-auto flex items-center justify-center py-16 px-28"
      >
        <div className="flex items-center justify-center h-full w-full max-w-[70rem]">
          <div className="h-1 w-1/5 bg-sky-500"></div>
          <div className="uppercase text-3xl flex text-sky-500 font-bold w-full justify-center">
            FOLLOW US ON INSTAGRAM
            <p
              className="ml-2 text-[#E6427A] cursor-pointer relative"
              onMouseEnter={() => {
                setDuckDonutsInstagramHovered(true);
              }}
              onMouseLeave={() => {
                setDuckDonutsInstagramHovered(false);
              }}
            >
              @DUCKDONUTSBELFAST
              <span
                className={`absolute left-0 bottom-0 w-full h-[3px] bg-current transition-opacity duration-700 ease-in-out ${
                  duckDonutsInstagramHovered ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <FontAwesomeIcon
                className={`absolute -top-6 left-[43%] transition-opacity duration-500 ease-in-out ${
                  duckDonutsInstagramHovered ? "opacity-100" : "opacity-0"
                }`}
                icon={faMessage}
              />
              <FontAwesomeIcon
                className={`absolute -top-[18px] left-[47%] text-white w-3 h-3 transition-opacity duration-500 ease-in-out ${
                  duckDonutsInstagramHovered ? "opacity-100" : "opacity-0"
                }`}
                icon={faHeart}
              />
            </p>
          </div>
          <div className="h-1 w-1/5 bg-sky-500"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
