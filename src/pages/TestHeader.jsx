import React, { useState } from "react";
import {
  HeaderDiv,
  HeaderLogo,
  HeaderTestDiv,
  Nav,
  FlexUl,
  Li,
  SpecailLi,
  StyledLink,
} from "../styledComponent";
import logo from "../images/header/header-logo.png";
import Blood from "../images/blood.png";

const Header = ({ setStyled }) => {
  // nav에 들어갈 요소들을 추가해줌
  // 각각의 url에 진입하면 해당하는 menu component의 background가 red가 되도록 해놓음
  // 핏자국 background image 갖도록 수정 필요
  const nowUrl = document.location.href.split("/").slice(-1)[0];
  const [showBlood, setShowBlood] = useState("");
  const handleBlood = (e) => {
    setShowBlood(e.target.innerText);
    setStyled(e.target.innerText);
  };

  const hideBlood = () => {
    setShowBlood("");
    setStyled("");
  };
  return (
    <HeaderDiv>
      <StyledLink to="/">
        <HeaderLogo src={logo} onClick={hideBlood}></HeaderLogo>
      </StyledLink>
      <Nav>
        <FlexUl>
          <StyledLink className="flea" to="/flea">
            <SpecailLi
              style={{ zIndex: "1", position: "relative" }}
              onClick={handleBlood}
            >
              플리마켓/마당
            </SpecailLi>
            {showBlood === "플리마켓/마당" || nowUrl === "flea" ? (
              <img
                style={{
                  width: "80px",
                  position: "absolute",
                  top: "-12px",
                  left: "20px",
                  zIndex: "0",
                }}
                src={Blood}
              ></img>
            ) : (
              <></>
            )}
          </StyledLink>
          <StyledLink className="food" to="/food">
            <Li
              style={{ zIndex: "1", position: "relative" }}
              onClick={handleBlood}
            >
              푸드트럭
            </Li>
            {showBlood === "푸드트럭" || nowUrl === "food" ? (
              <img
                style={{
                  width: "80px",
                  position: "absolute",
                  top: "-12px",
                  left: "16px",
                  zIndex: "0",
                }}
                src={Blood}
              ></img>
            ) : (
              <></>
            )}
          </StyledLink>
          <StyledLink className="schedule" to="/schedule">
            <Li
              style={{ zIndex: "1", position: "relative" }}
              onClick={handleBlood}
            >
              공연일정
            </Li>
            {showBlood === "공연일정" || nowUrl === "schedule" ? (
              <img
                style={{
                  width: "80px",
                  position: "absolute",
                  top: "-12px",
                  left: "16px",
                  zIndex: "0",
                }}
                src={Blood}
              ></img>
            ) : (
              <></>
            )}
          </StyledLink>
        </FlexUl>
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
