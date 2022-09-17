import React from "react";
import { ItemContainer, ItemInfo, ItemImg } from "../styledComponent";
import blood2 from "../images/blood2.png";

const EventItem = ({ name, date, src, place }) => {
  return (
    <ItemContainer>
      <ItemInfo>
        <div
          style={{
            position: "relative",
            zIndex: "1",
            padding: "10px",
          }}
        >
          <span style={{ position: "relative" }}>
            <span style={{ position: "relative", zIndex: "1" }}>{name}</span>
            {name === "서강, 좀비의 집" ? (
              <img
                style={{
                  position: "absolute",
                  top: "-40px",
                  left: "10%",
                  zIndex: "0",
                }}
                src={blood2}
              ></img>
            ) : (
              <img
                style={{
                  position: "absolute",
                  top: "-40px",
                  left: "-20%",
                  zIndex: "0",
                }}
                src={blood2}
              ></img>
            )}
          </span>
        </div>

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
