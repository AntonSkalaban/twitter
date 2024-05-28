import styled from "styled-components";
import { borderGreyMixin, FlexRow } from "styled/index";
export const PageContainer = styled.div `
  display: flex;
`;
export const StyledMain = styled.main `
  width: 100%;
  max-width: 910px;
  ${borderGreyMixin};
`;
export const TopRow = styled(FlexRow) `
  padding: 15px;
`;
