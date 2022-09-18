import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "./images/background.png";
import test_bg from "./images/test_bg.png";
import nameTag from "./images/nametag.png";

// 메인 화면 외에 여백은 검게 처리하기 위한 가장 바깥쪽 div
export const AppContainer = styled.div`
  min-width: 320px;
  background-color: black;
  width: 100%;
`;

// 가운데 정렬을 위한 바깥쪽 div
export const OuterDiv = styled.div`
  min-width: 320px;
  max-width: 480px;
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
  padding: 40px 30px 0px 30px;
  max-width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const MainDiv = styled.div`
  width: 100%;
`;

export const FooterDiv = styled.div`
  padding: 10% 0;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
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
  gap: 10px;
`;

export const Li = styled.li`
  padding: 20px 3px;
  font-size: 20px;
`;

export const BlackBg = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.67);
`;

// d-day를 위한 divs
export const DdayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  position: relative;
  width: 100%;
  z-index: 3;
  color: white;
  background-image: url(${test_bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DdayTitle = styled.div``;
export const DdayTimer = styled.div``;

// event를 위한 divs
export const EventContainerDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  position: relative;
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
  // width: 100%;
  width: 90%;
  margin: 0 5%;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const DayDiv = styled.div`
  margin: 3px;
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

//푸드트럭

export const Map = styled.img`
  width: 380px;
  height: 300px;
  background: white;
  margin: 10px auto;
  margin-bottom: 10px;
  border: 2px solid white;
`;
export const DescCard = styled.div`
  height: 74px;
  width: 345px;
  left: 35px;
  top: 600px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: black;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const DescCardNumber = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  background-color: #a30000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescCardName = styled.div`
  color: black;
  width: 150px;
  text-align: start;
`;
export const DescCardDetail = styled.div`
  width: 50;
  color: black;
`;

export const FoodModalPopup = styled.div`
  height: 430px;
  width: 317px;
  left: 51px;
  top: 186px;
  border-radius: 7px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  background-color: black;
  z-index: 100;
`;

export const FoodImg = styled.img`
  height: 218px;
  width: 243px;
  left: 88px;
  top: 246px;
  border-radius: 6px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const FoodName = styled.div`
  height: 26px;
  width: 102px;
  left: 157px;
  top: 460px;
  border-radius: nullpx;
  color: white;
`;

export const FoodNameTag = styled.div`
  background-image: url(${nameTag});
  background-repeat: no-repeat;
  width: 230px;
  height: 50px;
  position: absolute;
  left: 90px;
  top: -25px;
`;

export const FoodMapContainer = styled.div`
  display: flex;
  position: absolute;
  top: 75px;
  left: 60px;
  gap: 3px;

  > div:nth-child(5) {
    margin-left: 25px;
  }
`;

export const FoodMapTableContainer = styled.div`
  width: 23px;
  height: 23px;
  background-color: #a30000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

// flea-market

export const FleaMapTableContainer = styled.div`
  width: 21px;
  height: 21px;
  background-color: #a30000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export const FleaModalPopup = styled.div`
  height: 200px;
  width: 317px;
  left: 51px;
  top: 186px;
  border-radius: 7px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  background-color: black;
  z-index: 100;
`;

export const FleaNameTag = styled.div`
  background-image: url(${nameTag});
  background-repeat: no-repeat;
  width: 230px;
  height: 50px;
  position: absolute;
  left: 90px;
  top: 40px;
`;

export const FleaMapContainerThr = styled.div`
  display: flex;
  position: absolute;
  top: 114px;
  left: 70px;
  gap: 3px;

  > div:nth-child(13) {
    margin-left: 6px;
  }
  > div:nth-child(n + 14) {
    transform: translateX(-24px) translateY(25px);
  }
  > div:nth-child(n + 15) {
    transform: translateX(-48px) translateY(50px);
  }
  > div:nth-child(n + 16) {
    transform: translateX(-100px) translateY(50px);
  }
  > div:nth-child(n + 17) {
    transform: translateX(-148px) translateY(50px);
  }
  > div:nth-child(n + 18) {
    transform: translateX(-196px) translateY(50px);
  }
  > div:nth-child(n + 19) {
    transform: translateX(-244px) translateY(50px);
  }
  > div:nth-child(n + 20) {
    transform: translateX(-292px) translateY(50px);
  }
  > div:nth-child(n + 21) {
    transform: translateX(-340px) translateY(50px);
  }
  > div:nth-child(n + 22) {
    transform: translateX(-388px) translateY(50px);
  }
  > div:nth-child(n + 23) {
    transform: translateX(-436px) translateY(50px);
  }
  > div:nth-child(n + 24) {
    transform: translateX(-484px) translateY(50px);
  }
  > div:nth-child(n + 25) {
    transform: translateX(-532px) translateY(50px);
  }
  > div:nth-child(n + 26) {
    transform: translateX(-580px) translateY(50px);
  }
  > div:nth-child(n + 27) {
    transform: translateX(-625px) translateY(63px) rotate(-60deg);
  }
  > div:nth-child(n + 28) {
    transform: translateX(-652px) translateY(86px) rotate(-90deg);
  }
`;

export const FleaMapContainerMon = styled.div`
  display: flex;
  position: absolute;
  top: 115px;
  left: 120px;
  gap: 3px;

  > div:nth-child(n + 11) {
    transform: translateX(-240px) translateY(46px);
  }
`;

export const FleaBlood = styled.img`
  width: 60px;
  position: absolute;
  top: -25px;
  left: -10px;
  z-index: 0;
`;

export const FleaEachDay = styled.div`
  z-index: "3";
  position: relative;
  cursor: pointer;
`;

//공연일정 divs
export const MainScheduleDiv = styled.div`
  position: relative;
  background-image: url(${background});
  background-repeat:no-repeat;
  background-size: 100%;
  backdrop-filter: blur(1000px);
  .noResult{
    height:40vh;
    line-height:40vh;
    font-size:25px;
  }
  
  .today{
    height:30px;
    padding-left:10%;
    line-height: 30px;
    font-size:20px;
    font-weight: 100;
    text-align: left;
  }
`;
export const ScheduleContainerDIv = styled.div``;
export const ScheduleSpan = styled.div`
  text-align: center;
  font-size: 25px;
  padding: 15px;
`;

export const ScheduleimgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Scheduleimg = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 250px;
  height: 240px;
  margin: 15px 0;
  border: 2px solid #ffffff;
`;

export const Schedulenametag = styled.div`
  font-family: ChosunGs;
  font-size: 18px;
  font-weight: 100;
  line-height: 20px;
  width: 140px;
  height: 55px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${nameTag});
  background-repeat: no-repeat;
  position: relative;
  top: -40px;
`;

export const SchedulePlace = styled.div`
  font-size: 30px;
  margin: 20px;
  color: white;
  background-color: #424242;
  border-radius: 5px;
`;

export const ScheduleType = styled.div`
  font-size: 22px;
  color: white;
  padding-bottom: 10px;
`;

export const ScheduleDate = styled.div`
  font-size: 15px;
  color: white;
  padding-bottom: 20px;
`;

export const ScheduleTime = styled.div`
  font-size: 15px;
  color: white;
  padding: 5px;
`;

// home-event

export const ItemContainer = styled.div`
  width: 93%;
  margin: 40px auto;
`;

export const ItemInfo = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  position: relative;
`;

export const ItemImg = styled.img`
  width: 97%;
  height: 250px;
  object-fit: cover;
  z-index: 1;
`;

//schedule page resources
export const RoundImgContainer = styled.div`
width:calc(${props => props.height});
height:calc(${props => props.height});
display: flex;
justify-content:center;
align-items: center;
border-radius:1000px;
border:solid 3px #620303;
overflow: hidden;
img{
  width:100%;
}
`
export const SquareImgContainer = styled.div`
width:calc(${props => props.width});
height:calc(${props => props.height});
display: flex;
justify-content:center;
align-items: center;
border:solid 3px #620303;
overflow: hidden;
img{
  width:100%;
}
`

export const TeamName = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
  .name{
    font-size: 20px;
    line-height: 24px;
  }
  .text{
    font-size: 10px;

  }

`
export const TeamBlock = styled.div`
margin:40px auto;
width:80%;
display:flex;
flex-direction: ${props => props.even ? "row" : "row-reverse"};
justify-content: flex-start;
align-items: center;
img{
  display: block;
}
.handImg{
  width:35px;
  height:35px;
  margin:0 15px;
}
`
