import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  padding-bottom: 50px;
  color: white;
  letter-spacing: 0.5px;
  font-size: 40px;
`;

export const Heading = () => {
  return <StyledHeading>Newsletter</StyledHeading>;
};
