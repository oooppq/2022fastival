import React from "react";

const EventItem = ({ id, name, date, src, detail }) => {
  return (
    <div style={{ width: "100%", margin: "40px 0px" }}>
      <span style={{ width: "100%", textAlign: "left" }}>
        {name}
        {date}
      </span>
      <div>
        <img
          style={{ width: "400px", height: "100px", objectFit: "cover" }}
          src={require(`../images/home/${src}`)}
          alt={name}
        />
      </div>
    </div>
  );
};

export default EventItem;
