import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgb(13, 109, 140);
  background: linear-gradient(
    107deg,
    rgba(13, 109, 140, 1) 0%,
    rgba(35, 39, 47, 1) 100%
  );
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 65px 55px 55px;
  border-radius: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;
// ===================================
const Heading = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  padding-bottom: 50px;
  color: white;
  letter-spacing: 0.5px;
  font-size: 40px;
`;
// ===================================
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  &:nth-of-type(1) {
    margin-bottom: 25px;
  }
`;

const Label = styled.label`
  padding-bottom: 15px;
  color: white;
  font-size: 14px;
  letter-spacing: 0.7px;
`;

const Input = styled.input`
  padding-bottom: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  font-size: 17px;
  color: white;
`;
// ===================================
const CheckboxWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  margin-bottom: 25px;
`;

const AcceptTerms = styled.input``;

const Note = styled.p``;
// ===================================
const LoginButton = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  padding: 15px 20px;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;

  &::after {
    content: "";
    width: 500px;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: -25%;
    background: linear-gradient(
      107deg,
      rgba(13, 109, 140, 1) 30%,
      rgba(35, 39, 47, 1) 100%
    );
    transition: 0.3s ease-in;
  }

  &:hover:after {
    left: 0%;
  }
`;

export const Form = () => {
  return (
    <Main>
      <Container>
        <StyledForm onClick={(e) => e.preventDefault()}>
          <Heading>Newsletter</Heading>
          <InputWrapper>
            <Label>Username</Label>
            <Input type={"text"}></Input>
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <Input type={"email"}></Input>
          </InputWrapper>

          <CheckboxWrapper>
            <AcceptTerms type={"checkbox"}></AcceptTerms>
            <Note>I agree to the Terms</Note>
          </CheckboxWrapper>

          <LoginButton type={"submit"}>sumbit</LoginButton>
        </StyledForm>
      </Container>
    </Main>
  );
};
