import styled from "styled-components";

import { borderGreyMixin } from "styled/Mixin";

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
`;

export const SwitchLabel = styled.label`
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  /* border: ${({ theme }) => theme.colors.normal}; */
  ${borderGreyMixin}
  border-color: ${({ theme }) => theme.colors.black};
  position: relative;
  transition: background-color 0.2s;
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: -2px;
  left: 0px;
  width: 25px;
  height: 25px;
  border-radius: 45px;
  ${borderGreyMixin}
  /* border-color: ${({ theme }) => theme.colors.black}; */
  transition: 0.2s;
  /* background: ${({ theme }) => theme.colors.white}; */
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: 100%;
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.black};
  }
`;
