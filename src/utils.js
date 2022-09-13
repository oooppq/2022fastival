import { DayDiv } from "./styledComponent";

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
      d.style.color = "black";
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
// 필요에 따라 변경해서 사용하면 될듯
export const getData = (datas, selectedDay) => {
  let result = [];
  let i = 0;
  for (let data of datas) {
    if (dayConverter(data.day) === selectedDay) {
      result.push(<div key={i}>{data.name}</div>);
      i++;
    }
  }

  return result;
};
