import { DayContainerDiv, DayDiv } from "./styledComponent";

// 숫자로 표현된 day를 문자로 바꿔주는 method
export const dayConverter = (num) => {
  let arr = ["일", "월", "화", "수", "목", "금", "토"];
  return arr[num];
};

// 각각의 페이지에 요일 component를 추가해주는 method
export const pushDayDiv = (selectedDay, onClick) => {
  let dayList = ["월", "화", "수", "목", "금"];
  let result = [];
  let i = 0;
  for (let day of dayList) {
    if (day === selectedDay) {
      result.push(
        <DayDiv
          style={{ color: "red" }}
          className="day"
          key={i}
          onClick={onClick}
        >
          {day}
        </DayDiv>
      );
    } else {
      result.push(
        <DayDiv className="day" key={i} onClick={onClick}>
          {day}
        </DayDiv>
      );
    }
    i++;
  }
  return result;
};

// day component의 onclick event 정의, 누르면 해당 요일 빨간색으로!
export const dayOnClick = (setSelectedDay, e) => {
  setSelectedDay(e.target.innerHTML);
  let days = e.target.parentNode.childNodes;
  for (let d of days) {
    if (d === e.target) {
      d.style.color = "red";
    } else {
      d.style.color = "white";
    }
  }
};

// 현재 요일, 아무것도 클릭하지 않았을 때 default로 선택되는 요일을 return해주는 method
export const getDefaultDay = () => {
  let today = new Date().getDay();
  let defaultDay = today > 2 ? today : 2;
  return defaultDay;
};

// 플리, 푸드트럭, 공연일정의 data들을 data.js에서 받아 추가해주는 method
// 각 페이지마다 다른 Element구성을 가지고 있으므로, Element를 받고, 데이터와 modal 기능을 수행하도록 넘겨준다.
export const pushData = (
  datas,
  Element,
  selectedDay,
  setShowModal,
  setSelectedID,
  scrollToDW,
  scrollToCG
) => {
  let result = [];
  console.log('scdw', scrollToDW)
  for (let [idx, data] of datas.entries()) {
    console.log(idx)
    if (typeof data.day === "object") {
      //플리마켓에는 day가 array라서 이렇게 했습니다...
      for (let d of data.day) {
        if (dayConverter(d) === selectedDay || selectedDay === "") {
          result.push(
            <Element
              key={data.id}
              data={data}
              setShowModal={setShowModal}
              setSelectedID={setSelectedID}
            >
              {data.name}
            </Element>
          );
          break;
        }
      }
    } else if (dayConverter(data.day) === selectedDay || selectedDay === "") {
      if(idx===1) {
        result.push(<div ref={scrollToCG}>청년광장</div>)
      }
      if(idx===5) {
        result.push(<div ref={scrollToDW}>대운동장</div>)
      }
      result.push(
        <Element
          key={data.id}
          data={data}
          setShowModal={setShowModal}
          setSelectedID={setSelectedID}
        >
          {data.name}
        </Element>
      );
    }
  }

  return result;
};
// prop으로 넘어온 id에 해당하는 data를 주어진 datas에서 찾아 반환
export const findData = (datas, id) => {
  for (let data of datas) {
    if (data.id === id) {
      return data;
    }
  }
};
