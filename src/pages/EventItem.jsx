import React from "react";
import { FlexUl } from "../styledComponent";

const EventItem = ({ id, name, date, src, detail, place }) => {
  return (
    <div style={{ width: "93%", margin: "40px auto" }}>
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        <div>{name}</div>
        <div>{place}</div>
        <div>{date}</div>
      </div>
      <div>
        <img
          style={{ width: "400px", height: "200px", objectFit: "cover" }}
          src={require(`../images/home/${src}`)}
          alt={name}
        />
      </div>
    </div>
  );
};

export default EventItem;
