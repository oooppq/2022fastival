import React from "react";
import {
  ModalOuterDiv,
  ModalInnerDiv,
  FoodModalPopup,
  FoodImg,
  FoodNameTag,
} from "../styledComponent";
import "../images/food/close_icon.css";
// 모달에 데이터를 넘겨주고 필요한 데이터를 출력하도록 한다.
// 모달 클릭 후 아무데나 누르면 모달이 사라지도록 하였다.
const FoodModal = (props) => {
  return (
    <FoodModalPopup
      onClick={() => {
        props.setShowModal(false);
      }}
    >
      <span
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          color: "black",
        }}
        class="material-symbols-outlined"
      >
        close
      </span>
      <div
        style={{
          textAlign: "center",
          color: "black",
          fontWeight: "400",
          fontSize: "28px",
          marginTop: "50px",
        }}
      >
        {`< ${props.data.name} >`}
      </div>
      <FoodImg
        src={require("../images/food/food" + props.data.id + ".jpg")}
      ></FoodImg>
      <p
        style={{ fontSize: "25px", margin: "10px 0px 0px 0px", color: "black" }}
      >
        {props.data.menu}
      </p>
      <p style={{ fontSize: "20px", margin: "0px", color: "black" }}>
        {props.data.date}
      </p>

      {/* <p>{props.data.detail}</p> */}
    </FoodModalPopup>
  );
};

export default FoodModal;
