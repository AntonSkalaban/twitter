import { styled } from "styled-components";

// export const CreateTweetContent = styled(TweetContent)`
//   /* display: flex;
//   gap: 8px;
//   width: 100%;
//   ${borderGreyMixin};

//   padding: 18px 12px 13px 27px;
// `; */

export const TweetTextArea = styled.textarea`
  width: 100%;
  height: auto;
  max-height: 300px;

  border: none;
  /* font-family: "Roboto";
  font-style: normal; */
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  color: ${({ theme }) => theme.fonts.secondary};
  resize: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
