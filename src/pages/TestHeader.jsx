import React, { useState } from "react";
import {
  HeaderDiv,
  HeaderLogo,
  Nav,
  FlexUl,
  Li,
  StyledLink,
} from "../styledComponent";
import logo from "../images/header/header-logo.png";
import Blood from "../images/blood.png";

const Header = () => {
  // nav에 들어갈 요소들을 추가해줌
  // 각각의 url에 진입하면 해당하는 menu component의 background가 red가 되도록 해놓음
  // 핏자국 background image 갖도록 수정 필요
  const [showBlood, setShowBlood] = useState("");

  const handleBlood = (e) => {
    setShowBlood(e.target.innerText);
  };

  const hideBlood = () => {
    setShowBlood("");
  };
  return (
    <HeaderDiv>
      <StyledLink to="/" onClick={hideBlood}>
        <HeaderLogo src={logo}></HeaderLogo>
      </StyledLink>
      <Nav>
        <FlexUl>
          <StyledLink to="/flea">
            <Li
              style={{ zIndex: "1", position: "relative" }}
              onClick={handleBlood}
            >
              플리마켓/마당
            </Li>
            {showBlood === "플리마켓/마당" ? (
              <img
                style={{
                  width: "80px",
                  position: "absolute",
                  top: "-15px",
                  left: "20px",
                  zIndex: "0",
                }}
                src={Blood}
              ></img>
            ) : (
              <></>
            )}
          </StyledLink>
          <StyledLink to="/food">
            <Li
              style={{ zIndex: "1", position: "relative" }}
              onClick={handleBlood}
            >
              푸드트럭
            </Li>
            {showBlood === "푸드트럭" ? (
              <img
                style={{
                  width: "80px",
                  position: "absolute",
                  top: "-15px",
                  left: "20px",
                  zIndex: "0",
                }}
                src={Blood}
              ></img>
            ) : (
              <></>
            )}
          </StyledLink>
          <StyledLink to="/schedule">
            <Li
              style={{ zIndex: "1", position: "relative" }}
              onClick={handleBlood}
            >
              공연일정
            </Li>
            {showBlood === "공연일정" ? (
              <img
                style={{
                  width: "80px",
                  position: "absolute",
                  top: "-15px",
                  left: "20px",
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
