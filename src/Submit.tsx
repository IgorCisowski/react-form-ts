import styled from "styled-components";

const LoginButton = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  border: 1px solid white;
  border-radius: 30px;

  &::after {
    content: "";
    width: 1000px;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: -100%;
    background: linear-gradient(
      107deg,
      rgba(13, 109, 140, 1) 30%,
      rgba(35, 39, 47, 1) 100%
    );
    transition: 0.3s ease-in;
  }

  &:hover:after {
    left: 0;
    background: linear-gradient(
      287deg,
      rgba(13, 109, 140, 1) 30%,
      rgba(35, 39, 47, 1) 100% ;
    );
  }
`;

export const Submit = () => {
  return <LoginButton type={"submit"}>sumbit</LoginButton>;
};
