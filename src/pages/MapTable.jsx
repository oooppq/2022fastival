import React, { useState } from "react";

const MapTable = (prop) => {
  return (
    <>
      <prop.Styled
        onClick={() => {
          prop.setShowModal(true);
          prop.setSelectedID(prop.id);
          prop.setSelectName(prop.name);
        }}
        style={{ cursor: "pointer" }}
      >
        {prop.id}
      </prop.Styled>
    </>
  );
};

export default MapTable;
