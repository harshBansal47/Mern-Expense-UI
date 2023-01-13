import styled from "styled-components";

const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  flex-grow: 1;
  margin: 8px 0;
  border: 1px solid rgb(0, 0, 0, 0.4);
  border-radius: 5px;
  &:hover {
    border: 2px solid purple;
  }
`;
const InputField = styled.input`
outline:none;
border:none;
background:transparent;
width:80%;
font-size:18px;
padding-left:5px;
placeholder = ${(props) => props.placeholder};
type = ${(props) => props.type};
id = ${(props) => props.id};
`;
const CheckBoxDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;
const StyledButton = styled.button`
  border-radius: 5px;
  width: 80%;
  margin: 30px 0 20px 0;
  padding: 10px 30px;
  background: #5f55ab;
  color: white;
  text-align: center;
`;

export { FormContainer, InputBox, InputField, CheckBoxDiv, StyledButton };
