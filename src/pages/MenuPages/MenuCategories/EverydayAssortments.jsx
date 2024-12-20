import React from "react";
import EverydayAssortmentsImage from "/assets/images/MenuImages/EverydayAssortmentsImage.jpg";
import MenuCategory from "../../../components/MenuComponents/MenuCategory";
import menuData from "../../../data/menu_data.json";

const EverydayAssortments = () => {
  const everydayAssortmentsData = menuData.filter(
    (data) => data.category === "Everyday Assortments"
  );

  return (
    <>
      <MenuCategory
        backgroundImage={EverydayAssortmentsImage}
        alt="Everyday Assortments"
        title1="Everyday Assortments"
        title2="Assortments perfect for any day of the week"
        data={everydayAssortmentsData}
      />
    </>
  );
};

export default EverydayAssortments;
