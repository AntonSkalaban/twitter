import { css } from "styled-components";
export const borderGreyMixin = css `
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;
export const inputMixin = css `
  width: 100%;

  background: #ffffff;
  ${borderGreyMixin};
  border-radius: 6px;

  padding: 20px 24px;

  cursor: pointer;
`;
export const greyTextMixin = css `
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.fonts.secondary};
`;
