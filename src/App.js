import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
import Home from "./Home";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  ul {
    font-size: 40px;
    font-weight: bold;  
  }
  h2 {
    margin-top: 20px;
    text-decoration: underline;
    color: black;
    cursor: pointer;
  }
`;

const AppMainContent = () => {
  return (
    <Container>
      <ul>당신에게 지금 당장 필요한 경매를 찾아보세요 <br/> 혹은 당신의 물품을 판매하세요</ul>
      <Link to="/Home">
        <h2>바로 시작하기</h2>
      </Link>
    </Container>
  );
};

const App = () => {
  return <Layout props={<AppMainContent/>}/>
}

export default App;