import React from "react";
import {
  ModalOuterDiv,
  ModalInnerDiv,
  FleaModalPopup,
  FoodImg,
  FleaNameTag,
} from "../styledComponent";
import "../images/food/close_icon.css";
// 모달에 데이터를 넘겨주고 필요한 데이터를 출력하도록 한다.
// 모달 클릭 후 아무데나 누르면 모달이 사라지도록 하였다.
const FoodModal = (props) => {
  return (
    <FleaModalPopup
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
        className="material-symbols-outlined"
      >
        close
      </span>

      <div style={{ position: "relative" }}>
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "400",
            fontSize: "28px",
            marginTop: "70px",
          }}
        >
          {`< ${props.data.name} >`}
          <p
            style={{
              margin: "20px 0px 0px 0px",
              fontSize: "20px",
              color: "black",
            }}
          >
            {props.data.detail}
          </p>
          <p style={{ margin: "0px", fontSize: "14px", color: "black" }}>
            {props.data.date}
          </p>
        </div>
      </div>

      {/* <p>{props.data.detail}</p> */}
    </FleaModalPopup>
  );
};

export default FoodModal;
