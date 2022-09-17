import React from "react";
import { ItemContainer, ItemInfo, ItemImg } from "../styledComponent";
import blood2 from "../images/blood2.png";

const EventItem = ({ name, date, src, place }) => {
  return (
    <ItemContainer>
      <ItemInfo>
        <div
          style={{ position: "relative", zIndex: "1", marginBottom: "12px" }}
        >
          {name}
        </div>
        <img
          style={{
            position: "absolute",
            top: "-45px",
            left: "160px",
            zIndex: "0",
          }}
          src={blood2}
        ></img>
        <div style={{ zIndex: "1", position: "relative" }}>
          <ItemImg src={require(`../images/home/${src}`)} alt={name} />
        </div>
      </ItemInfo>
      <ul style={{ fontSize: "15px" }}>
        <li style={{ textAlign: "left" }}>장소 : {place}</li>
        <li style={{ textAlign: "left", marginTop: "7px" }}>일시 : {date}</li>
      </ul>
    </ItemContainer>
  );
};

export default EventItem;
