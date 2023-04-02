import { useState } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: white;
  margin-bottom: 25px;
`;

const Error = styled.span`
  position: absolute;
  right: 0px;
  color: darkorange;
  font-size: 14px;
`;

export const Checkbox = ({ check, setCheck, checkError }: any) => {
  return (
    <CheckboxWrapper>
      <input
        type={"checkbox"}
        checked={check}
        onChange={() => setCheck(!check)}
      />
      <p>I agree to the Terms of Service</p>
      {checkError && <Error>{checkError}</Error>}
    </CheckboxWrapper>
  );
};
