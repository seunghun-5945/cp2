import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(white, lightblue);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 1600px;
  height: 900px;
  background-color: white;
  display: flex;
  position: relative; 
`;

const CoverContainer = styled(motion.div)`
  width: 50%;
  height: 100%;
  background-color: lightgreen;
  position: absolute; 
  z-index: 1;
  
`;

const Cover = () => {
  return (
    <CoverContainer
      initial={{ x: "100%" }} // 초기 위치
      animate={{ x: "0%" }} // 애니메이션 중 위치
      transition={{ duration: 1.5 }} // 애니메이션 지속 시간
    >
    </CoverContainer>
  );
};

const LeftFrame = styled.div`
  width: 50%;
  height: 100%;
  background-color: lightgreen;
`;


const RightFrame = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
`;

const Home = () => {
  return (
    <Container>
      <Frame>
        <Cover

        />
        <LeftFrame/>
        <RightFrame></RightFrame>
      </Frame>
    </Container>
  );
};

export default Home;
