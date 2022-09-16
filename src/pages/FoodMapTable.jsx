import React, { useState } from "react";
import { FoodMapTableContainer } from "../styledComponent";
import FoodModal from "./FoodModal";

const FoodMapTable = (prop) => {
  return (
    <>
      <FoodMapTableContainer
        onClick={() => {
          prop.setShowModal(true);
          prop.setSelectedID(prop.id);
        }}
      >
        {prop.id}
      </FoodMapTableContainer>
    </>
  );
};

export default FoodMapTable;
