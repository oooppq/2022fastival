import styled from "styled-components";

// 가운데 정렬을 위한 가장 바깥쪽 div
export const OuterDiv = styled.div`
  text-align: center;
`;

// home page의 기본 구성요소들
export const HeaderDiv = styled.div``;

export const HeaderLogo = styled.div`
  text-align: center;
  padding: 20px;
`;

export const MainDiv = styled.div``;

export const FooterDiv = styled.div`
  margin: 10% 0;
  text-align: center;
`;

export const Nav = styled.nav`
  width: 100%;
  margin-bottom: 20px;
`;

// nav의 list들을 가로 정렬 하기 위한 ul
export const FlexUl = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`;

export const Li = styled.li``;

// d-day를 위한 divs
export const DdayDiv = styled.div`
  background-color: black;
  width: 100%;
  padding-top: 50%;
  padding-bottom: 50%;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const DdayTitle = styled.div``;
export const DdayTimer = styled.div``;

// event를 위한 divs
export const EventContainerDiv = styled.div`
  text-align: left;
`;

export const EventSpan = styled.span`
  margin-left: 3%;
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
  background-color: black;
`;

export const DayContainerDiv = styled.div`
  display: flex;
  justify-content: right;
  width: 90%;
  margin: 0 5%;
`;

export const DayDiv = styled.div`
  margin: 1px;
`;
