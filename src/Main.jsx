import Image from "./img.jpg";
import Container from "./Componets/Styled/Container";
import {
  StyledHeading,
  StyledLabel,
  StyledPara,
} from "./Componets/Styled/Typography";
import {
  FormContainer,
  InputBox,
  InputField,
  CheckBoxDiv,
  StyledButton,
} from "./Componets/Styled/FormContainer";

const Main = () => {
  return (
    <Container w="100%">
      <Container w="40%" h="100vh" w_md="100%" h_md="700px" m_md="20px 0px">
        <Container
          bgImage={Image}
          h="422px"
          w="364px"
          h_md="379.8px"
          w_md="327.6px"
        />
      </Container>
      <Container
        w="55%"
        h="650px"
        shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
        w_md="90%"
        direction="column"
        rounded
        m_md="0px 0px 40px 0px"
      >
        <StyledHeading>Login</StyledHeading>
        <FormContainer>
          <StyledLabel>Login ID</StyledLabel>
          <InputBox>
            <InputField placeholder="Enter Login Id" type="text" />
          </InputBox>
          <StyledLabel>Password</StyledLabel>
          <InputBox>
            <InputField placeholder="Enter Password" type="password" />
          </InputBox>
          <CheckBoxDiv>
            <StyledPara>
              {" "}
              <input type="checkbox" style={{ margin: "5px" }} /> Remember me{" "}
            </StyledPara>
            <StyledPara color="orange">Forget Password</StyledPara>
          </CheckBoxDiv>
          <CheckBoxDiv>
            <StyledPara>
              {" "}
              <input type="checkbox" style={{ margin: "5px" }} /> agree to{" "}
              <StyledPara
                color="orange"
                style={{ textDecoration: "underline", marginLeft: "5px" }}
              >
                {" "}
                Terms and Conditions{" "}
              </StyledPara>{" "}
            </StyledPara>
          </CheckBoxDiv>
          <StyledButton>Sign in</StyledButton>
          <StyledPara>
            {" "}
            Don't have an account?{" "}
            <StyledPara
              color="orange"
              style={{ textDecoration: "underline", marginLeft: "5px" }}
            >
              Register Here{" "}
            </StyledPara>{" "}
          </StyledPara>
        </FormContainer>
      </Container>
    </Container>
  );
};
export default Main;