import styled from "styled-components";
import background from "./images/background.png";
import test_bg from "./images/test_bg.png";

// 메인 화면 외에 여백은 검게 처리하기 위한 가장 바깥쪽 div
export const AppContainer = styled.div`
  background-color: black;
  width: 100%;
`;

// 가운데 정렬을 위한 바깥쪽 div
export const OuterDiv = styled.div`
  width: 425px;
  margin: 0 auto;
  text-align: center;
  background-color: black;
  // background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
`;

// home page의 기본 구성요소들
export const HeaderDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.67);
  padding-bottom: 10px;
`;

export const HeaderLogo = styled.img`
  text-align: center;
  padding: 40px 30px 20px 30px;
  max-width: 100%;
`;

export const MainDiv = styled.div`
  width: 100%;
  background-image: url(${test_bg});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const FooterDiv = styled.div`
  padding: 10% 0;
  text-align: center;
`;

export const Nav = styled.nav`
  width: 100%;
`;

// nav의 list들을 가로 정렬 하기 위한 ul
export const FlexUl = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: center;
`;

export const Li = styled.li`
  width: 115px;
`;

export const BlackBg = styled.div`
  position: absolute;
  z-index: 2;
  height: 400px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.67);
`;

// d-day를 위한 divs
export const DdayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  position: relative;
  width: 100%;
  z-index: 3;
  color: white;
`;

export const DdayTitle = styled.div``;
export const DdayTimer = styled.div``;

// event를 위한 divs
export const EventContainerDiv = styled.div`
  width: 100%;
  text-align: center;
`;

export const EventSpan = styled.p`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-size: 30px;
`;

export const EventHeaderDiv = styled.div`
  margin: 5% 0 3% 7%;
  display: flex;
  justify-content: left;
`;
export const EventTitleDiv = styled.div``;
export const EventDateDiv = styled.div``;
export const EventPosterDiv = styled.div`
  width: 90%;
  margin: 0 5%;
  padding-bottom: 100%;
  background-color: white;
`;

// 요일을 위한 divs
export const DayContainerDiv = styled.div`
  display: flex;
  justify-content: right;
  width: 90%;
  margin: 0 5%;
`;

export const DayDiv = styled.div`
  margin: 1px;
`;

// 모달 포지셔닝을 위한 divs
export const ModalOuterDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalInnerDiv = styled.div`
  height: 60%;
  width: 80%;
  background-color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  border-radius: 5px;
`;
