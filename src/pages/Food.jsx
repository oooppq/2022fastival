import React, { useState } from "react";
import { foods } from "../data";
import Modal from "./Modal";
import {
  FoodMapContainer,
  FoodMapTableContainer,
  DayContainerDiv,
  FoodCard,
  Map,
} from "../styledComponent";
import {
  dayConverter,
  pushDayDiv,
  dayOnClick,
  getDefaultDay,
  pushData,
  findFoodData,
} from "../utils";
import { FoodComponentDiv } from "./Elements";
import MapTable from "./MapTable";
import FoodModal from "./FoodModal";
import foodmap from "../images/food/K-GN.png";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();

const Food = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  const [selectedDay, setSelectedDay] = useState("월");
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  const [selectName, setSelectName] = useState("");
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          margin: "0px auto",
          position: "absolute",
          zIndex: "0",
          height: "400px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.67)",
        }}
      ></div>
      <div
        style={{
          zIndex: "2",
          textAlign: "center",
          width: "100%",
          fontSize: "20px",
          paddingBottom: "7px",
        }}
      >
        <span style={{ zIndex: "2", position: "relative" }}>푸드트럭 지도</span>
        <p
          style={{
            margin: "5px 0px",
            fontSize: "12px",
            zIndex: "2",
            position: "relative",
          }}
        >
          Mon~Fri (12:00~22:00)
        </p>
      </div>
      <div
        style={{
          width: "320px",
          backgroundImage: `url(${foodmap})`,
          backgroundSize: "cover",
          height: "250px",
          position: "relative",
          margin: "25px auto",
        }}
      >
        <div
          style={{
            textAlign: "right",
            top: "-23px",
            right: "0px",
            position: "absolute",
          }}
        >
          9.19~23 동일
        </div>
        <FoodMapContainer>
          {foods.map((food) => {
            return (
              <MapTable
                key={food.id}
                {...food}
                setShowModal={setShowModal}
                setSelectedID={setSelectedID}
                Styled={FoodMapTableContainer}
                setSelectName={setSelectName}
              />
            );
          })}
        </FoodMapContainer>
      </div>

      {/* 데이터 추가 */}

      {/* {pushData(
        foods,
        FoodComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID
      )} */}
      {foods.map((food) => {
        return (
          <FoodComponentDiv
            key={food.id}
            data={food}
            setShowModal={setShowModal}
            setSelectedID={setSelectedID}
          >
            {food.name}
          </FoodComponentDiv>
        );
      })}

      {/* 이 모달 부분은 아영이가 만들걸로 바꿔야 할 듯 */}
      {showModal && (
        <FoodModal
          setShowModal={setShowModal}
          data={findFoodData(foods, selectedID)}
          type={"food"}
        ></FoodModal>
      )}
    </div>
  );
};

export default Food;
