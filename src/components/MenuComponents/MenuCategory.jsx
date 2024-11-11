import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenuCategory = (props) => {
  const [showBackground, setShowBackground] = useState(false);
  const [hovered, setHovered] = useState("");
  const data = props.data;
  const title1 = props.title1;
  const title2 = props.title2;
  const description = data[0]?.description ?? "";
  const backgroundImage = props.backgroundImage;
  const items = data[0].featuredItems ? [...data[0].items] : [];
  const featuredItems = data[0].featuredItems ? [...data[0].featuredItems] : [];

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  const ItemImageAndDescription = ({ key, item }) => {
    return (
      <Link to={item.endpoint}>
        <li className="p-4">
          <div
            className="w-full h-[16rem] hover:cursor-pointer"
            onMouseEnter={() => setHovered(item.name)}
          >
            <img
              src={item.image}
              alt={item.name}
              className={`object-contain w-full h-full  ${
                hovered === item.name ? "scale-105" : "scale-100"
              }`}
              onMouseEnter={() => setHovered(item.name)}
            />
          </div>
          <p
            className={`mt-2 font-bold hover:cursor-pointer ${
              hovered === item.name ? "underline" : "no-underline"
            }`}
            onMouseEnter={() => setHovered(item.name)}
          >
            {item.name}
          </p>
        </li>
      </Link>
    );
  };

  const ItemsSection = (props) => {
    let items = props.data.items ? props.data.items : [];
    let featuredItems = props.data.featuredItems
      ? props.data.featuredItems
      : [];

    return (
      <div>
        {featuredItems.length > 0 && (
          <>
            <div id="divTitle" className="flex justify-between items-center">
              <div
                id="categoryName"
                className="my-[1.222rem] font-bold text-2xl uppercase"
              >
                Featured Items
              </div>
            </div>
            <div
              id="itemRow"
              onMouseLeave={() => {
                setHovered("");
              }}
            >
              <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
                {featuredItems.map((item, index) => (
                  <ItemImageAndDescription key={index} item={item} />
                ))}
              </ul>
            </div>
          </>
        )}
        {items.length > 0 && (
          <>
            <div id="divTitle" className="flex justify-between items-center">
              <div
                id="categoryName"
                className="my-[1.222rem] font-bold text-2xl uppercase"
              >
                {props.title}
              </div>
            </div>
            <div
              id="itemRow"
              onMouseLeave={() => {
                setHovered("");
              }}
            >
              <ul className="grid grid-flow-row grid-cols-4 text-center -mx-4">
                {items.map((item, index) => (
                  <ItemImageAndDescription key={index} item={item} />
                ))}
              </ul>
            </div>
          </>
        )}

        <div id="spacingDiv" className="opacity-0">
          <div id="categoryName" className="my-[1.222rem] text-2xl">
            This text is just here to mimic the height of the categoryName div
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <div className=" bg-fuchsia-900 relative">
        <img
          alt="Menu Image"
          src={backgroundImage}
          className={`h-[10%] w-full max-h-[525px] bg-cover transition-opacity duration-1000 ease-in-out ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${
              showBackground ? `url(${backgroundImage})` : ""
            }`,
          }}
        />
        <div
          className="uppercase absolute bottom-[7rem] left-[22%] text-6xl font-bold text-white font-boogaloo"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          {title1}
        </div>
      </div>
      {/* <div className="py-20 px-[1.15rem]">{props.children}</div> */}
      <div className="flex flex-col justify-self-center h-full w-full max-w-[75rem] my-24 mx-20">
        <div
          className={`${
            props.centerText && "text-center"
          } text-sky-500 text-8xl font-bold py-3 font-boogaloo`}
          style={{ textShadow: "2px 2px 4px rgb(0, 0, 0, 0.5)" }}
        >
          {title2}
        </div>
        {description !== "" && (
          <>
            <div
              className={`${props.centerText && "text-center"} ${
                props.boldText && "font-bold"
              } mt-6 mb-20 text-lg`}
            >
              {description}
            </div>
          </>
        )}

        {data.map((data, index) => {
          return (
            <ItemsSection
              key={index}
              title={data.category}
              data={data}
              season={props.season}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
