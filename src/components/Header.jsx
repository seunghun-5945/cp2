import React from "react";
import styled from "styled-components";

const HeaderFrame = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
`;

const LeftHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  ul {
    margin-left: 20px;
    font-size: 30px;
  }
`;

const RightHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    margin-right: 20px;
    font-size: 30px;
  }
`;

const SignUpBtn = styled.button`
  width: auto;
  height: auto;
  margin-right: 20px;
  background-color: lightgreen;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
  font-size: 30px;
  padding: 2px;
`;

const Header = () => {
  return (
    <HeaderFrame>
      <LeftHeader>
        <ul style={{fontSize:"40px" , fontWeight:"bold"}}>BEBID</ul>
        <ul>-</ul>
        <ul>Development</ul>
        <ul>How to use</ul>
        <ul>Support</ul>
      </LeftHeader>
      <RightHeader>
        <ul>Log in</ul>
        <SignUpBtn>Sign Up</SignUpBtn>
      </RightHeader>
    </HeaderFrame>
  )
}

export default Header;