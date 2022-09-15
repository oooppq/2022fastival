import React from "react";
import { ModalOuterDiv, ModalInnerDiv, FoodModalPopup, FoodImg } from "../styledComponent";
import './close_icon.css'
// 모달에 데이터를 넘겨주고 필요한 데이터를 출력하도록 한다.
// 모달 클릭 후 아무데나 누르면 모달이 사라지도록 하였다.
const FoodModal = (props) => {
  return (
    <FoodModalPopup
      onClick={() => {
        props.setShowModal(false);
      }}
    >   
        <span style={{position: "absolute", right: '10px', top: '10px'}}class="material-symbols-outlined">close</span>
        <FoodImg></FoodImg>
        <h2>{props.data.name}</h2>
        <p>{props.data.date}</p>
        <p>{props.data.detail}</p>
      
    </FoodModalPopup>
  );
};

export default FoodModal;
