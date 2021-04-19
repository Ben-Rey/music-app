import styled from "styled-components";

export const RawDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const BoxCenterColumn = styled(RawDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// make inheritance from div
export const BoxInnerShadow = styled(RawDiv)`
  background: #eaeaea;
  box-shadow: ${props => props.theme.shadowInner};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  padding: 5%;
  margin-top: 2%;
  //   transform: rotate(-90deg);
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FlexContainerExtended = styled(FlexContainer)`
  flex-direction: column-reverse;
`;
