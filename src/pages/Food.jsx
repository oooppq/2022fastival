import React, { useState } from "react";
import { foods } from "../data";
import Modal from "./Modal";
import {
  FoodMapContainer,
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
import FoodMapTable from "./FoodMapTable";
import FoodModal from "./FoodModal";
import foodmap from "../images/food/K-GN.PNG";

// default로 설정할 요일을 지정
let defaultDay = getDefaultDay();

const Food = () => {
  // 요일 선택을 반영하기 위해 useState로 구현
  const [selectedDay, setSelectedDay] = useState("월");
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  return (
    <>
      <div style={{ position: "relative" }}>
        <Map src={foodmap}></Map>
        <FoodMapContainer>
          {foods.map((food) => {
            return (
              <FoodMapTable
                key={food.id}
                {...food}
                setShowModal={setShowModal}
                setSelectedID={setSelectedID}
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
        ></FoodModal>
      )}
    </>
  );
};

export default Food;
