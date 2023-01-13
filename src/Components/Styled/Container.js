import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  box-shadow: ${(props) => props.shadow};
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  margin: ${(props) => props.m};
  border-radius: ${(props) => (props.rounded ? "10px" : "0px")};
  @media (max-width: 950px) {
    width: ${(props) => props.w_md};
    height: ${(props) => props.h_md};
    margin: ${(props) => props.m_md};
  }
`;
export default Container;
