import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
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

const Error = styled.p`
  position: absolute;
  right: 0;
  color: darkorange;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

export const Username = ({ user, setUser, userError }: any) => {
  return (
    <>
      <InputWrapper>
        <Label>Username</Label>
        <Input
          type={"text"}
          value={user}
          onChange={(event) => setUser(event.target.value)}
        ></Input>
        {userError && <Error>{userError}</Error>}
      </InputWrapper>
    </>
  );
};
