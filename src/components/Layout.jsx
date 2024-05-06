import React from "react";
import styled from "styled-components";
import Header from "../components/Header"; 

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
  background-color: lightgreen;
`;

const Main = styled.div`
  width: 100%;
  height: 85%;
`;


const Layout = ( {props} ) => {
  return (
    <Container>
      <Frame>
        <Header/>
        <Main>
          {props}
        </Main>
      </Frame>
    </Container>
  )
}

export default Layout;