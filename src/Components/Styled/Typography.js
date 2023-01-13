import styled from "styled-components";

const StyledHeading = styled.h1`
  margin: ${(props) => props.m};
  text-align: ${(props) => props.align};
`;
StyledHeading.defaultProps = {
  m: "15px 0",
  align: "center",
};

const StyledLabel = styled.h3`
  width: 85%;
`;

const StyledPara = styled.p`
  margin: ${(props) => props.m};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledHeading, StyledLabel, StyledPara };
