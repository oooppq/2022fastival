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
        style={{ position: "absolute", right: "10px", top: "10px" }}
        class="material-symbols-outlined"
      >
        close
      </span>
      {props.type === "flea" ? (
        <></>
      ) : (
        <FoodImg
          src={require("../images/food/food" + props.data.id + ".jpg")}
        ></FoodImg>
      )}

      <div style={{ position: "relative" }}>
        <FoodNameTag></FoodNameTag>
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate( -50%, -50% )",
            fontFamily: "GungSeo",
            fontWeight: "400",
            fontSize: "15px",
          }}
        >
          {props.data.name}
        </div>
      </div>
      <p style={{ marginTop: "28px", marginLeft: "60px", fontSize: "15px" }}>
        {props.data.date}
      </p>
      <p style={{ marginTop: "40px", fontSize: "30px" }}>{props.data.menu}</p>
      {/* <p>{props.data.detail}</p> */}
    </FoodModalPopup>
  );
};

export default FoodModal;
