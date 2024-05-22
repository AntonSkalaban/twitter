import styled from "styled-components";

export const TweetsImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 88px);
  gap: 2px;

  overflow: hidden;
  border-radius: 10px;
`;

export const TweetImage = styled.div<{ $image: string }>`
  background-image: url(${({ $image }) => $image});

  background-size: cover;
  background-repeat: no-repeat;
`;
