import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
const StoryViewerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;
const StoryImage = styled.img`
  max-height: 90vh;
  object-jit: contain;
`;
const StoryViewer = ({ stories }) => {
  const [curerentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextStory = () => {
    if (curerentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(curerentStoryIndex + 1);
      setActiveIndex(activeIndex + 1);
    } else if (curerentStoryIndex === stories.length - 1) {
      setCurrentStoryIndex(0);
      setActiveIndex(0);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextStory();
    }, 2000);
    return () => clearInterval(interval);
  }, [curerentStoryIndex]);
  return (
    <div className="relative w-full">
      <StoryViewerContainer>
        <StoryImage src={stories?.[curerentStoryIndex].image} />
        <div className="absolute top-0 flex w-full">
          {stories.map((item, index) => (
            <ProgressBar
              key={index}
              duration={2000}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </StoryViewerContainer>
    </div>
  );
};

export default StoryViewer;
