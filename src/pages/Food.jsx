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
  findData,
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
  return (
    <>
      <div style={{ textAlign: "right", marginRight: "10px" }}>
        9.19~23 동일
      </div>
      <div style={{ position: "relative" }}>
        <Map src={foodmap}></Map>
        <FoodMapContainer>
          {foods.map((food) => {
            return (
              <MapTable
                key={food.id}
                {...food}
                setShowModal={setShowModal}
                setSelectedID={setSelectedID}
                Styled={FoodMapTableContainer}
              />
            );
          })}
        </FoodMapContainer>
      </div>
      {/* 데이터 추가 */}

      {pushData(
        foods,
        FoodComponentDiv,
        selectedDay,
        setShowModal,
        setSelectedID
      )}

      {/* 이 모달 부분은 아영이가 만들걸로 바꿔야 할 듯 */}
      {showModal && (
        <FoodModal
          setShowModal={setShowModal}
          data={findData(foods, selectedID)}
          type={"food"}
        ></FoodModal>
      )}
    </>
  );
};

export default Food;
