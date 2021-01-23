import React, { useState, useEffect } from "react";

// Style
import styled, { css } from "styled-components";

import GradientBlock from "./GradientBlock";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

function App() {
  const [enter, setEnter] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [transitionEnd, setTransitionEnd] = useState(false);

  function handleClick() {
    setEnter(true);
  }

  console.log({ enter, homeVisible, transitionEnd });

  return (
    <>
      <Container>
        <button onClick={handleClick}>click</button>
      </Container>
      <GradientBlock
        setEnter={setEnter}
        setHomeVisible={setHomeVisible}
        setTransitionEnd={setTransitionEnd}
        enter={enter}
        homeVisible={homeVisible}
        transitionEnd={transitionEnd}
      />
    </>
  );
}

export default App;
