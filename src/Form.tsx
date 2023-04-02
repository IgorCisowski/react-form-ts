import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { Heading } from "./Heading";
import { Submit } from "./Submit";
import { Username } from "./Username";
import { Email } from "./Email";

type Props = {
  submitted: boolean;
};

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

const StyledForm = styled.form<Props>`
  display: ${({ submitted }) => (submitted ? "none" : "flex")};
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

const SubmitConfirmation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  border-radius: 20px;
  padding: 55px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  width: 500px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

export const Form = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [checkError, setCheckError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user === "") {
      setUserError("Please enter your UserName.");
    } else {
      setUserError("");
    }

    if (email === "") {
      setEmailError("Please enter your email.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }

    if (check === false) {
      setCheckError("You must accept");
    } else {
      setCheckError("");
    }

    if (user !== "" && email !== "" && check === true) {
      setCheck(false);
      setEmail("");
      setSubmitted(true);
    }
  };

  return (
    <Main>
      <Container>
        <StyledForm onSubmit={handleSubmit} submitted={submitted}>
          <Heading />
          <Username user={user} setUser={setUser} userError={userError} />
          <Email email={email} setEmail={setEmail} emailError={emailError} />
          <Checkbox check={check} setCheck={setCheck} checkError={checkError} />
          <Submit />
        </StyledForm>
        {submitted && (
          <SubmitConfirmation>
            Thanks for registering {user}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M431.76 256c-69 42.24-137.27 126.89-175.76 224.78C217.51 382.89 149.25 298.24 80.24 256c69-42.24 137.27-126.89 175.76-224.78C294.49 129.11 362.75 213.76 431.76 256z"></path>
            </svg>
          </SubmitConfirmation>
        )}
      </Container>
    </Main>
  );
};
