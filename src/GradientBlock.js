import React, { useEffect, useRef, useState } from "react";

// Style
import styled, { css } from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  display: ${({ transitionEnd }) => (transitionEnd ? "none" : "block")};
`;

const BlockContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: -100vh;
  transition: top 1.2s steps(24, end);
  z-index: 1;

  ${(props) =>
    props.enter &&
    css`
      top: 100vh;
    `}

  ${(props) =>
    props.exit &&
    css`
      top: 100vh;
    `}
`;

const TextBlockContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: -100vh;
  transition: top 0.6s steps(12, end);

  ${({ enter }) =>
    enter &&
    css`
      top: 0px;
    `}
  ${({ exit }) =>
    exit &&
    css`
      top: 100vh;
    `}
`;

const Block = styled.div`
  height: calc(100vh / 12);
  background-color: #ff5733;
  opacity: ${({ opacity }) => opacity};
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh / 12);
  font-size: 28px;
  background-color: white;
  

  @media (max-height: 500px) {
    font-size: 20px;
  }
`;

const horizontalDivisions = 12;

function renderBlocks() {
  const textBlocks = [];
  let opacity = 1;
  for (let i = 0; i < horizontalDivisions; i++) {
    textBlocks.unshift(<Block opacity={opacity} key={i} />);
    opacity = opacity / 2;
  }
  return textBlocks;
}

function renderTextBlocks(title) {
  return new Array(horizontalDivisions).fill(<TextBlock>{title}</TextBlock>);
}

function GradientBlock({ setEnter, enter, title }) {
  const [homeVisible, setHomeVisible] = useState(false);
  const [transitionEnd, setTransitionEnd] = useState(false);
  const blockContainerRef = useRef(null);
  const endingBlockContainerRef = useRef(null);

  useEffect(() => {
    if (transitionEnd) {
      setTransitionEnd(false);
      setHomeVisible(false);
      setEnter(false);
    }
  }, [transitionEnd, setEnter]);

  useEffect(() => {
    if (blockContainerRef.current) {
      blockContainerRef.current.addEventListener("webkitTransitionEnd", () => {
        setHomeVisible(true);
      });
    }

    if (endingBlockContainerRef.current) {
      endingBlockContainerRef.current.addEventListener(
        "webkitTransitionEnd",
        () => {
          setTransitionEnd(true);
        }
      );
    }
  }, []);

  return (
    <Container transitionEnd={transitionEnd}>
      <TextBlockContainer enter={enter} exit={homeVisible}>
        {renderTextBlocks(title)}
      </TextBlockContainer>
      <BlockContainer exit={homeVisible} ref={endingBlockContainerRef}>
        {renderBlocks()}
      </BlockContainer>
      <BlockContainer enter={enter} ref={blockContainerRef}>
        {renderBlocks()}
      </BlockContainer>
    </Container>
  );
}

export default function useGradientBlock() {
  const [enter, setEnter] = useState(false);

  return {
    GradientBlock,
    enter,
    setEnter,
  };
}
