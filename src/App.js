import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(white, lightgreen, lightgreen, lightgreen);
`;

const Frame = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid lightgray;
  display: flex;
  background-color: white;
`;

const LeftArea = styled.div`
  width: 50%;
  height: 100%;
  background-color: lightsalmon;
`;

const RightArea = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
`;

const SmallBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  border: 1px solid black;
`;

const SmallBoxItem = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
  display: flex;
`;

const BigBox = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid black;
`;

const App = () => {
  return (
    <Container>
      <Frame>
        <LeftArea />
        <RightArea>
          <SmallBox>
            <SmallBoxItem />
            <SmallBoxItem />
          </SmallBox>
          <BigBox />
          <BigBox />
          <BigBox />
        </RightArea>
      </Frame>
    </Container>
  );
};

export default App;